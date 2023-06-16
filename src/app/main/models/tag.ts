import ObjectID from 'bson-objectid';
import { B2B } from './b2b';

export interface Tag {
  _id: ObjectID;
  b2b: B2B;
  fr: string;
  en: string;
  archive?: boolean;
}
