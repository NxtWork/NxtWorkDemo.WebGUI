import { Contacts } from "../../domain/common.model";
import { Cv } from "./cv.model";

export interface NxtUser {
  id: string;
  firstName: string;
  lastName: string;
  dob: Date;
  contacts: Contacts;
  cv: Cv;
  cvId: string;
  password: string;
  preferences: Preferences;
}

export interface Preferences {
  receive_emails: boolean;
  dark_theme: boolean;
  personal_recommendations: boolean;
}
