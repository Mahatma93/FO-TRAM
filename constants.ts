
import { Profession, Line, ReferenceAgent, Panne } from './types';

export const REFERENCE_AGENTS: ReferenceAgent[] = [
  { matricule: '237323', nom: 'Lemaire', prenom: 'Cédric' },
  { matricule: '123456', nom: 'Dupont', prenom: 'Jean' },
  { matricule: '987654', nom: 'Martin', prenom: 'Sophie' },
  { matricule: '007007', nom: 'Bond', prenom: 'James' },
];

export const PROFESSIONS = Object.values(Profession);
export const LINES = Object.values(Line);

export interface LineStyle {
  color: string;
  slug: string;
  maintenanceSheetId?: string;
}

/**
 * L'identifiant 2PACX... correspond au document Google Sheets publié sur le web.
 * Ce document est désormais la source unique pour toutes les lignes de tramway.
 */
const GLOBAL_MAINTENANCE_ID = '2PACX-1vRu_hE-7qehaxBuQsVvyQcjoPo8d2QYMDrfLUE50WYbNFkc5inYsaNtS7OoS2PZph-VEYqtrfTytJYC';

export const LINE_CONFIG: Record<Line, LineStyle> = {
  [Line.T1]: { color: '#006eb1', slug: 't1', maintenanceSheetId: GLOBAL_MAINTENANCE_ID },
  [Line.T2]: { color: '#c51586', slug: 't2', maintenanceSheetId: GLOBAL_MAINTENANCE_ID },
  [Line.T3A]: { color: '#f28e42', slug: 't3a', maintenanceSheetId: GLOBAL_MAINTENANCE_ID },
  [Line.T3B]: { color: '#518840', slug: 't3b', maintenanceSheetId: GLOBAL_MAINTENANCE_ID },
  [Line.T5]: { color: '#823090', slug: 't5', maintenanceSheetId: GLOBAL_MAINTENANCE_ID },
  [Line.T6]: { color: '#e1001a', slug: 't6', maintenanceSheetId: GLOBAL_MAINTENANCE_ID },
  [Line.T7]: { color: '#8f6031', slug: 't7', maintenanceSheetId: GLOBAL_MAINTENANCE_ID },
  [Line.T8]: { color: '#95c11e', slug: 't8', maintenanceSheetId: GLOBAL_MAINTENANCE_ID },
};
