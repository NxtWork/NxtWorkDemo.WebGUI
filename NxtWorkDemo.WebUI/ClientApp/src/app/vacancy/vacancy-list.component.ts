import { Component, OnInit } from '@angular/core';
import { Vacancy } from '../models/vacancy.model';
import { VacancyService } from '../services/vacancy.service';

@Component({
  selector: 'app-vacancy-list',
  templateUrl: './vacancy-list.component.html',
  styleUrls: ['./vacancy.component.css']
})

export class VacancyListComponent implements OnInit {
  public vacancies: Vacancy[];

  constructor(private vacancyService: VacancyService) {}

  ngOnInit() {
    this.vacancyService.getAllVacancies()
      .subscribe(result => {
        this.vacancies = result;
      }, error => console.error(error));
  }

  //handleVacancyClicked(data) {
  //  console.log('received: ', data);
  //}
}
