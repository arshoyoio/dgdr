import { Component, Input } from '@angular/core';
import { Fiches } from '~/main/models/fiches';

@Component({
  selector: 'app-question-card',
  templateUrl: './question-card.component.html',
  styleUrls: ['./question-card.component.css'],
})
export class QuestionCardComponent {
  @Input() questions: { name: string, field: string }[];

  @Input() fiche: Fiches | any;

  @Input() respName?: string;
}
