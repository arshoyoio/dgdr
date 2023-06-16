import ObjectID from 'bson-objectid';
import { Revision } from './revision';
import { User } from './user';

export interface Answer {
  _id: ObjectID;
  question: ObjectID;
  annexes?: string[];
  by?: User;
  fr: string;
  en: string;
  auto?: boolean;
  desc?: string;
  revision?: Revision;
  revisions?: Revision[];
  createdAt: string;
  updatedAt: string;
}
