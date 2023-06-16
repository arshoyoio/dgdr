import ObjectID from 'bson-objectid';
import { Answer } from './answer';
import { Category } from './category';
import { Department } from './department';
import { User } from './user';

export interface Question {
  _id: ObjectID;
  category: Category;
  department: Department;
  order: number;
  autoAssign?: boolean;
  fr: string;
  en?: string;
  status: string;
  choices?: string[];
  docType: string;
  type: string;
  answer?: Answer;
  createdAt: string;
  updatedAt: string;
  occupiedBy: User;
  questionnaire?: string;
  questionnaireId?: string;
  updatedAnswerAt?: Date;
  answerDoc?: any;
  opcvm?: string;
  frId?: ObjectID;
}
