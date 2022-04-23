import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { VacancyListComponent } from './list/vacancy-list.component';
import { VacancyCardComponent } from './list/vacancy-card.component';
import { VacancyDetailsComponent } from './details/vacancy-details.component';
import { VacancyService } from './services/vacancy.service';
import { RouterModule } from '@angular/router';
import { MaterialExportsModule } from '../../material.module';
import { HttpClientModule } from '@angular/common/http';
import { FormsModule } from '@angular/forms';
import { FlexLayoutModule } from '@angular/flex-layout';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';



@NgModule({
  declarations: [
    VacancyListComponent,
    VacancyCardComponent,
    VacancyDetailsComponent,
  ],
  imports: [
    CommonModule,
    RouterModule.forChild([
      { path: 'vacancies', component: VacancyListComponent },
      { path: 'vacancies/:id', component: VacancyDetailsComponent },
    ]),
    MaterialExportsModule,
    HttpClientModule,
    FormsModule,
    BrowserAnimationsModule,
    FlexLayoutModule,
  ],
  providers: [
    VacancyService
  ],
  exports: [
    VacancyListComponent,
    VacancyCardComponent,
    VacancyDetailsComponent,
  ], 
})
export class VacanciesModule { }
