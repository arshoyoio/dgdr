export interface Fiches {
  ref: string;
  responsable: string;
  validationDate?: string;
  controlDate?: string;
  finalisationDate: string;
  theme: string;
  risque: string;
  created: boolean;
  createdAt: string;
  archive: boolean;
  status: string;
  readBy: string;
  validatedBy: string;
}

export interface FichesByStatus {
  notStarted: Fiches[];
  inProgress: Fiches[];
  onHold: Fiches[];
  broadcast: Fiches[];
  fixed: Fiches[];
}
