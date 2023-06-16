import { Component } from '@angular/core';
import { QUESTIONNAIRE_STATUS, QUESTIONNAIRE_STATUS_COLOR, QUESTIONNAIRE_STATUS_ICON_CLASS } from '../../../main/constants/questionnaire-status';
import { QUESTIONNAIRES } from '../../../main/services/fake-data/questionnaires';

@Component({
  selector: 'app-question-card',
  templateUrl: './question-card.component.html',
  styleUrls: ['./question-card.component.css']
})
export class QuestionCardComponent {
  questions = QUESTIONNAIRES;
  color: any = QUESTIONNAIRE_STATUS_COLOR;
  icon: any = QUESTIONNAIRE_STATUS_ICON_CLASS;
  statuts: any = QUESTIONNAIRE_STATUS
}
