import { Contacts } from "./common.model";
import { Company } from "./company.model";

export interface Vacancy {
  id: string;
  title: string;
  description: string;
  thumbnail_image: string;
  requirements: Requirement[];
  company: Company;
  companyId: string;
  contacts: Contacts;
  salary: string;
}

export interface Requirement {
  key: string;
  value: string;
}
