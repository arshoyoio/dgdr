import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'initialName',
})
export class InitialNamePipe implements PipeTransform {
  transform(value: string): string {
    if (!value) return '';
    const partiesNomComplet = value.split(' ');
    const initialeNom = partiesNomComplet[0].charAt(0).toUpperCase();
    let initialePrenom;
    if (partiesNomComplet.length < 2) {
      return initialeNom;
    }
    initialePrenom = partiesNomComplet[1].charAt(0).toUpperCase();
    return initialeNom + initialePrenom;
  }
}
