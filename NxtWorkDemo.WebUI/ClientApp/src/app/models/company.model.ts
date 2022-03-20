import { Contacts } from "./common.model";

export interface Company {
  id: string;
  name: string;
  industry: string;
  description: string;
  rating: number;
  contacts: Contacts;
}
