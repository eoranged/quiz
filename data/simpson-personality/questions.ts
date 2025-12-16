import { Question, Trait } from "../../types";

export const SIMPSON_QUESTIONS: Question[] = [
    {
        id: "q_simpson_food",
        text: "What is your favorite food?",
        tags: ["simpson"],
        options: [
            {
                id: "opt_donuts",
                text: "Donuts",
                traitModifiers: { [Trait.IMPULSIVENESS]: 200, [Trait.INTELLECT]: -100 }
            },
            {
                id: "opt_veg",
                text: "Vegetables",
                traitModifiers: { [Trait.INTELLECT]: 100, [Trait.ORDER]: 100 }
            }
        ]
    },
    {
        id: "q_simpson_hobby",
        text: "What is your hobby?",
        tags: ["simpson"],
        options: [
            {
                id: "opt_skate",
                text: "Skateboarding",
                traitModifiers: { [Trait.IMPULSIVENESS]: 200, [Trait.EXTROVERSION]: 100 }
            },
            {
                id: "opt_sax",
                text: "Saxophone",
                traitModifiers: { [Trait.INTELLECT]: 200, [Trait.EMPATHY]: 200 }
            },
            {
                id: "opt_tv",
                text: "Watching TV",
                traitModifiers: { [Trait.AMBITION]: -200 }
            }
        ]
    }
];
