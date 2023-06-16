import ObjectID from 'bson-objectid';

export interface B2B {
  _id: ObjectID;
  logo: string;
  name: string;
  createdAt: string;
  updatedAt: string;
}
