export interface Fiches {
  ref: string;
  theme: string;
  name: string;
  createdAt: string;
  refReglementaire?: string[];
  refRecueilProcedures?: string;
  perimetreDeControle?: string;
  periodeControlee?: string;
  dureeControle?: string;
  dateControle?: string;
  dateRelecture?: string;
  respRelecture?: string;
  dateDiffusion?: string;
  respControle?: string;
  dateFinalisation?:string;
  methodControle?: string[];
  conclusions?: string;
  recommandations?: Recommandation[];
  constats?: string;
  recommandation?: string;
  commentaires?: string[];
  answeredQuestions?: number;
  status: string;
}

export interface Recommandation {
  id: string;
  libelleReco: string;
  serviceMiseEnOeuvre: string;
  delaiMiseEnOeuvre: string;
}

// export interface Fiches {
//   ref: string;
//   responsable?: string;
//   validationDate?: string;
//   controlDate?: string;
//   finalisationDate: string;
//   theme: string;
//   risque: string;
//   created: boolean;
//   createdAt: string;
//   archive: boolean;
//   status: string;
//   version?: string;
//   daysLeft?: number;
//   docType?: string;
//   aquirer?:string;
//   tags?: string[];
//   answeredQuestions?: number;
//   readBy: string;
//   validatedBy: string;
// }

export interface FichesByStatus {
  notStarted: Fiches[];
  inProgress: Fiches[];
  onHold: Fiches[];
  broadcast: Fiches[];
  fixed: Fiches[];
}
