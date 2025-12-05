import cv2
import numpy as np
import os
import sys

def sort_contours(cnts, method="left-to-right"):
    reverse = False
    i = 0 # Sort by x-coordinate
    if method == "top-to-bottom":
        i = 1 # Sort by y-coordinate

    boundingBoxes = [cv2.boundingRect(c) for c in cnts]
    (cnts, boundingBoxes) = zip(*sorted(zip(cnts, boundingBoxes),
                                        key=lambda b: b[1][i], reverse=reverse))
    return (cnts, boundingBoxes)

def split_sprite(image_path, filename_prefix="avatar", output_folder="avatars", start_count=0):
    if not os.path.exists(output_folder):
        os.makedirs(output_folder)

    # 1. Load Image
    img = cv2.imread(image_path, cv2.IMREAD_UNCHANGED)
    if img is None:
        print(f"Error: Could not load image at {image_path}")
        return

    h_img, w_img = img.shape[:2]
    total_img_area = h_img * w_img

    # 2. Determine Background (Top-Left Pixel)
    bg_color = img[0, 0]

    # 3. Create Mask
    diff = cv2.absdiff(img, bg_color)

    if len(bg_color) < 4 or bg_color[3] == 255:
        # Opaque image
        diff_gray = cv2.cvtColor(diff, cv2.COLOR_BGR2GRAY)
        _, mask = cv2.threshold(diff_gray, 10, 255, cv2.THRESH_BINARY)
    else:
        # Transparent image (use Alpha channel)
        _, mask = cv2.threshold(img[:, :, 3], 10, 255, cv2.THRESH_BINARY)

    # 4. Find Contours
    contours, hierarchy = cv2.findContours(mask, cv2.RETR_TREE, cv2.CHAIN_APPROX_SIMPLE)

    valid_contours = []

    # 5. FILTERING LOGIC
    for c in contours:
        x, y, w, h = cv2.boundingRect(c)
        area = cv2.contourArea(c)

        # SKIP if the contour is basically the whole image (border detection)
        if area > (total_img_area * 0.50):
            continue

        # Width must be at least 10% of total image width
        if w < (w_img * 0.10):
            continue

        # Height must be at least 25% of total image height
        if h < (h_img * 0.25):
            continue

        valid_contours.append(c)

    print(f"Found {len(valid_contours)} avatars after filtering.")

    if not valid_contours:
        print("No avatars found.")
        return

    # 6. Sorting (Rows then Columns)
    valid_contours, boxes = sort_contours(valid_contours, method="top-to-bottom")

    rows = []
    current_row = []
    if boxes:
        current_y = boxes[0][1]
        row_height_tolerance = boxes[0][3] / 2

        for c, box in zip(valid_contours, boxes):
            x, y, w, h = box
            if abs(y - current_y) > row_height_tolerance:
                rows.append(current_row)
                current_row = []
                current_y = y
            current_row.append((c, box))
        rows.append(current_row)

    # 7. Process and Save
    count = start_count
    for row_data in rows:
        row_data.sort(key=lambda k: k[1][0]) # Sort Left to Right

        for (c, box) in row_data:
            x, y, w, h = box

            # Crop
            avatar = img[y:y+h, x:x+w]

            # Make Square
            side = max(w, h)
            square_img = np.zeros((side, side, img.shape[2]), dtype=np.uint8)
            square_img[:] = bg_color

            x_offset = (side - w) // 2
            y_offset = (side - h) // 2

            square_img[y_offset:y_offset+h, x_offset:x_offset+w] = avatar

            # Updated format: :02d ensures 0 becomes 00, 5 becomes 05, etc.
            filename = f"{output_folder}/{filename_prefix}{count:02d}.png"
            cv2.imwrite(filename, square_img)
            print(f"Saved {filename}")
            count += 1

# --- Usage ---
if __name__ == "__main__":
    # Usage: python script.py <image_path> [prefix] [start_count]
    if len(sys.argv) > 1:
        img_arg = sys.argv[1]

        # Optional: Prefix (default "avatar")
        prefix_arg = sys.argv[2] if len(sys.argv) > 2 else "avatar"

        # Optional: Start Count (default 0)
        try:
            start_arg = int(sys.argv[3]) if len(sys.argv) > 3 else 0
        except ValueError:
            print("Warning: Start count parameter must be an integer. Defaulting to 0.")
            start_arg = 0

        split_sprite(img_arg, prefix_arg, start_count=start_arg)
    else:
        print("Usage: python script.py <image_path> [prefix] [start_count]")
