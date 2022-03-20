import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
import { RouterModule } from '@angular/router';

import { AppComponent } from './app.component';
import { NavMenuComponent } from './nav-menu/nav-menu.component';
import { HomeComponent } from './home/home.component';
import { CounterComponent } from './counter/counter.component';
import { FetchDataComponent } from './fetch-data/fetch-data.component';
import { VacancyListComponent } from './vacancy/vacancy-list.component';
import { VacancyCardComponent } from './vacancy/vacancy-card.component';
import { VacancyService } from './services/vacancy.service';
import { VacancyDetailsComponent } from './vacancy-details/vacancy-details.component';

@NgModule({
  declarations: [
    AppComponent,
    NavMenuComponent,
    HomeComponent,
    CounterComponent,
    FetchDataComponent,
    VacancyListComponent,
    VacancyCardComponent,
    VacancyDetailsComponent
  ],
  imports: [
    BrowserModule.withServerTransition({ appId: 'ng-cli-universal' }),
    HttpClientModule,
    FormsModule,
    RouterModule.forRoot([
      { path: '', component: HomeComponent, pathMatch: 'full' },
      { path: 'counter', component: CounterComponent },
      { path: 'fetch-data', component: FetchDataComponent },
      { path: 'vacancies', component: VacancyListComponent },
      { path: 'vacancies/:id', component: VacancyDetailsComponent },
    ])
  ],
  providers: [
    VacancyService
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
