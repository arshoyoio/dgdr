import ObjectID from 'bson-objectid';
import { Document } from './document';

export interface Category {
  _id: ObjectID;
  label: string;
  parent: Category;
  questionnaire: ObjectID;
  createdAt: string;
  updatedAt: string;
  documents: Document[];
  order: number;
}
