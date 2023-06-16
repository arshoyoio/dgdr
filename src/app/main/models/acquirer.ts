import ObjectID from 'bson-objectid';
import { B2B } from './b2b';

export interface Acquirer {
  _id: ObjectID | string;
  b2b?: B2B;
  name: string;
  archive?: boolean;
  createdAt?: string;
  updatedAt?: string;
}
