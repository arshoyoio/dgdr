import ObjectID from 'bson-objectid';
import { Category } from './category';
import { Tag } from './tag';
import { B2B } from './b2b';

export interface Document {
  _id: ObjectID;
  name: string;
  recto: string;
  size: string;
  type: string;
  responsable: any;
  hasExpired: boolean;
  department: any;
  opcvm: any;
  reminder: number;
  validity: string;
  frequency: string;
  tags: ObjectID[] | Tag[];
  categories: Category[] | ObjectID[];
  createdAt: Date;
  updatedAt: Date;
  sharedWith: { groups: string[]; users: string[] };
  isUsed: boolean;
  b2b: B2B;
}

export interface DocumentPopulated extends Document {
  categories: Category[];
  tags: Tag[];
}

export interface DocumentHistory extends Document {
  docId: ObjectID;
}

export interface DocumentResult {
  total_count: number;
  items: Document[];
}
