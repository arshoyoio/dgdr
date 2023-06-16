import ObjectID from 'bson-objectid';
import { Department } from './department';

export interface Company {
  _id: ObjectID;
  accessControlId: string;
  beneficial_owners: [];
  idBc: string;
  is_actor: boolean;
  is_enabled: boolean;
  last_action: string;
  name: string;
  siren: string;
}

export interface User {
  _id: ObjectID;
  accountCreationDate: Date;
  accountDesactivationDate: Date;
  company: string;
  company_doc: Company;
  customersOf: string[];
  email: string;
  emails: [
    {
      email: string;
      isVerified: boolean;
    }
  ];
  firstname: string;
  lastname: string;
  department: ObjectID;
  department_doc: Department;
  idBc: string;
  ips: string[];
  is_enabled: boolean;
  members_of: string[];
  roles: string[];
  fRoles: string[];
  siren: string;
  userDevice: string[];
  userNavigator: string[];
  userOS: string[];
  createdAt: Date;
  updatedAt: Date;
  updated_by: string;
}
