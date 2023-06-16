import ObjectID from 'bson-objectid';

export interface Opcvm {
  _id: any;
  label: string;
  archive?: boolean;
  order?: number;
  b2b: ObjectID;
}
