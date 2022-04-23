export interface Cv {
  id: string;
  description: string;
  experience: Experience[];
  education: Education[];
  interests: Interest[];
  customEntries: CustomEntry[];
}

export interface Experience {
  company_name: string;
  vacancy_name: string;
  duration: string;
}

export interface Education {
  institution: string;
  degree: string;
  duration: string;
}

export interface Interest {
  interestText: string;
}

export interface CustomEntry {
  sectionName: string;
  value: string;
}
