import { Component, Inject } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})

export class HomeComponent {
  public vacancies: Vacancy[];

  constructor(http: HttpClient, @Inject('BASE_URL') baseUrl: string) {
    http.get<Vacancy[]>(baseUrl + 'vacancies').subscribe(result => {
      this.vacancies = result;
    }, error => console.error(error));
  }
}

interface Vacancy {
  id: string;
  title: string;
  description: string;
  tumbnailImage: string;
  requirements: Requirement[];
  company: Company;
  companyId: string;
  contacts: Contacts;
  salary: string;
}

interface Requirement {
  key: string;
  value: string;
}

interface Company {
  id: string;
  name: string;
  industry: string;
  description: string;
  rating: number;
  contacts: Contacts;
}

interface Contacts {
  phone: string;
  email: string;
  address: string;
}
