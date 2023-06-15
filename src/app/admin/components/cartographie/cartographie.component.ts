import { Component } from '@angular/core';
import { THEMES } from 'src/app/main/services/fake-data/theme';

@Component({
  selector: 'app-cartographie',
  templateUrl: './cartographie.component.html',
  styleUrls: ['./cartographie.component.css']
})
export class CartographieComponent {

  themes: any[] = THEMES;

  faible: any[] = [3, 4, 6, 8, 9, 2, 5, 1, 7, 11];
  moyen: any[] = [2, 6, 9, 14, 4, 2, 0, 1, 18, 13];
  eleve: any[] = [1, 2, 4, 10, 5, 8, 14, 9, 11, 3];
}
