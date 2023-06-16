import ObjectID from 'bson-objectid';
import { Acquirer } from './acquirer';
import { B2B } from './b2b';
import { Department } from './department';
import { Opcvm } from './opcvm';
import { Tag } from './tag';

export interface Questionnaire {
  _id: ObjectID;
  label: string;
  copyOf: Date;
  acquirer: Acquirer;
  b2b: B2B;
  createdAt: string;
  tags: Tag[];
  status: string;
  docType: string;
  doc: string;
  originDoc: string;
  updatedAt: string;
  version: string;
  responsable: Department;
  opcvm: Opcvm;
  progression?: number;
  assignees: Department[];
  finalisationDate: string;
  displayOnDashboard: boolean;
}
