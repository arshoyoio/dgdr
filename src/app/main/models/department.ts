import ObjectID from 'bson-objectid';
import { B2B } from './b2b';
import { User } from './user';

export interface Department {
  _id: ObjectID;
  label: string;
  b2b: B2B;
  archive: boolean;
  roles: string[];
  users: User[];
  color: string;
  invitations: any[];
  createdAt: string;
  updatedAt: string;
}
