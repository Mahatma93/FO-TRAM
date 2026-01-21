
export enum Profession {
  MACHINISTE = 'Machiniste',
  CONTROLEUR = 'Contrôleur',
  MAINTENEUR = 'Mainteneur'
}

export enum Line {
  T1 = 'T1',
  T2 = 'T2',
  T3A = 'T3A',
  T3B = 'T3B',
  T5 = 'T5',
  T6 = 'T6',
  T7 = 'T7',
  T8 = 'T8'
}

export interface UserProfile {
  profession: Profession;
  line: Line;
  username: string;
  matricule: string;
}

export interface Panne {
  rame: string;
  type: 'M1' | 'M2';
  description: string;
  date: string;
}

export interface ReferenceAgent {
  matricule: string;
  nom: string;
  prenom: string;
}

export type View = 'AUTH' | 'HUB' | 'MAINTENANCE';
