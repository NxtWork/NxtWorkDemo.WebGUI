import { Component, OnInit } from "@angular/core";
import { ActivatedRoute } from "@angular/router";
import { Vacancy } from "../models/vacancy.model";
import { VacancyService } from "../services/vacancy.service";

@Component({
  templateUrl: './vacancy-details.component.html',
  styleUrls: [
    './vacancy-details.component.css'
  ]
})
export class VacancyDetailsComponent implements OnInit {
  public vacancy: Vacancy;

  constructor(private vacancyService: VacancyService, private route: ActivatedRoute) {}

  ngOnInit(): void {
    this.vacancyService.getVacancy(this.route.snapshot.params['id'])
      .subscribe(result => {
        this.vacancy = result;
      }, error => console.error(error));
  }

}
