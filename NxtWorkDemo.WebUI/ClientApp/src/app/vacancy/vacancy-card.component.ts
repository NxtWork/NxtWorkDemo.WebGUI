import { Component, EventEmitter, Input, Output } from "@angular/core";
import { Vacancy } from "../models/vacancy.model";

@Component({
  selector: "app-vacancy-card",
  templateUrl: "./vacancy-card.component.html",
  styleUrls: ["./vacancy.component.css"]
})

export class VacancyCardComponent {
  @Input() public vacancy: Vacancy;

  //@Output() public vacancyClick = new EventEmitter();

  //vacancyInfoClick() {
  //  this.vacancyClick.emit(this.vacancy.title);
  //}

  //logSus() {
  //  console.log('sussy baka');
  //}
}
