import { HttpClient } from "@angular/common/http";
import { Inject, Injectable } from "@angular/core";
import { Vacancy } from "../models/vacancy.model";

@Injectable()
export class VacancyService {
  constructor(private http: HttpClient, @Inject('BASE_URL') private baseUrl: string) {}

  getAllVacancies() {
    return this.http.get<Vacancy[]>(this.baseUrl + 'vacancies');
  }

  getVacancy(id: string) {
    return this.http.get<Vacancy>(this.baseUrl + 'vacancies/' + id);
  }
}
