// export interface FicheVierge {
//   ref: string;
//   responsable: string;
//   frequence: string;
//   theme: string;
//   risque: string;
//   created: boolean;
//   archive: boolean;
// }

export interface FicheVierge {
  ref: string;
  responsable: string;
  frequence: string;
  theme: string;
  risque: string;
  natureRisque?: string;
  classeTheme?: string;
  description?: string;
  mesurePreventive?: string;
  formMesurePreventive?: string;
  presentationCtrl1?: string;
  respCtrl1?: string;
  qualifRisque1?: string;
  qualifRisque2?: string;
  evalRisqueBrut?: string;
  created: boolean;
  archive: boolean;
}
