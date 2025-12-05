export enum CharacterId {
  GERALT = 'geralt',
  YENNEFER = 'yennefer',
  JASKIER = 'jaskier',
  ROACH = 'roach',
  CIRI = 'ciri',
  TRISS = 'triss',
  VESEMIR = 'vesemir',
  ZOLTAN = 'zoltan',
  REGIS = 'regis',
  LAMBERT = 'lambert',
  ESKEL = 'eskel',
  KEIRA = 'keira',
  DIJKSTRA = 'dijkstra',
  EMHYR = 'emhyr',
  ROCHE = 'roche',
  IORVETH = 'iorveth',
  GAUNTER = 'gaunter',
  SHANI = 'shani',
  PHILIPPA = 'philippa',
  // New Characters
  VILGEFORTZ = 'vilgefortz',
  CAHIR = 'cahir',
  MILVA = 'milva',
  ANGOULEME = 'angouleme',
  BONHART = 'bonhart',
  FRINGILLA = 'fringilla',
  MARGARITA = 'margarita',
  SHEALA = 'sheala',
  TISSAIA = 'tissaia',
  DUDU = 'dudu',
  PRISCILLA = 'priscilla',
  DETTLAFF = 'dettlaff',
  SYANNA = 'syanna',
  ANNA_HENRIETTA = 'anna_henrietta',
  OLGIERD = 'olgierd',
  VLODIMIR = 'vlodimir',
  CRACH = 'crach',
  CERYS = 'cerys',
  HJALMAR = 'hjalmar',
  MOUSESACK = 'mousesack',
  RADOVID = 'radovid',
  FOLTEST = 'foltest',
  LETHO = 'letho',
  VES = 'ves',
  THALER = 'thaler',
  UMA = 'uma',
  IMLERITH = 'imlerith',
  EREDIN = 'eredin',
  AVALLACH = 'avallach',
  RENFRI = 'renfri',
  CALANTHE = 'calanthe',
  PAVETTA = 'pavetta',
  YARPEN = 'yarpen'
}

export interface Option {
  id: string;
  text: string;
  weights: Partial<Record<CharacterId, number>>;
}

export interface Question {
  id: string;
  text: string;
  options: Option[];
}

export interface QuizResult {
  id: CharacterId;
  name: string;
  title: string;
  description: string;
  quote: string;
  alignment: string;
  colorTheme: string;
}

export enum AppState {
  START = 'START',
  PLAYING = 'PLAYING',
  RESULT = 'RESULT'
}