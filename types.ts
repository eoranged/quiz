export enum CharacterId {
  GERALT = 'geralt',
  YENNEFER = 'yennefer',
  JASKIER = 'jaskier',

  CIRI = 'ciri',
  TRISS = 'triss',
  VESEMIR = 'vesemir',
  ZOLTAN = 'zoltan',
  REGIS = 'regis',
  LAMBERT = 'lambert',
  ESKEL = 'eskel',

  DIJKSTRA = 'dijkstra',
  EMHYR = 'emhyr',
  ROCHE = 'roche',
  IORVETH = 'iorveth',
  GAUNTER = 'gaunter',
  SHANI = 'shani',
  PHILIPPA = 'philippa',
  // New Characters
  VILGEFORTZ = 'vilgefortz',










  DETTLAFF = 'dettlaff',

  ANNA_HENRIETTA = 'anna_henrietta',
  OLGIERD = 'olgierd',







  LETHO = 'letho',




  EREDIN = 'eredin',
  AVALLACH = 'avallach',




}

export enum Trait {
  EMPATHY = 'empathy',
  IMPULSIVENESS = 'impulsiveness',
  AMBITION = 'ambition',
  INTELLECT = 'intellect',
  CYNICISM = 'cynicism',
  EXTROVERSION = 'extroversion',
  MAGIC = 'magic',
  ORDER = 'order'
}

export interface ClusterCondition {
  trait: Trait;
  operator: '>' | '<' | '>=' | '<=';
  threshold: number;
}

export interface ClusterRule {
  tag: string;
  conditions: ClusterCondition[];
  combineWith?: 'AND' | 'OR'; // default AND
}

export interface PhaseWeights {
  global: number;
  archetype: number;
  refinement: number;
}

export interface QuizEngineConfig {
  maxQuestions: number;
  clusterRules?: ClusterRule[];
  phaseWeights?: PhaseWeights;
  baseBoostFactor?: number; // default 0.25 (25%)
  duplicateCheck?: boolean;
  randomSeed?: number; // for deterministic determinism if needed
  debug?: boolean;
}

export type TraitProfile = Record<Trait, number>;

export interface Option {
  id: string;
  text: string;
  traitModifiers: Partial<TraitProfile>;
  characterBoosts?: Partial<Record<string, number>>;
}

export interface Question {
  id: string;
  text: string;
  options: Option[];
  tags?: string[]; // e.g., 'global', 'ruler', 'monster', etc.
}

export interface QuizConfig {
  id: string;
  title: string;
  description: string;
  characters: Record<string, QuizResult>;
  questions: Question[];
  path: string;
  engineConfig?: QuizEngineConfig; // Optional configuration for the engine
}

export interface QuizResult {
  id: CharacterId;
  name: string;
  title: string;
  description: string;
  quote: string;
  alignment: string;
  colorTheme: string;
  traits: TraitProfile;
  signatureWeights?: Partial<TraitProfile>;
}

export enum AppState {
  START = 'START',
  PLAYING = 'PLAYING',
  RESULT = 'RESULT'
}