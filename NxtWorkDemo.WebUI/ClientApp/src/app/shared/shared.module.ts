import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { NavMenuComponent } from './nav-menu/nav-menu.component';
import { RouterModule } from '@angular/router';
import { MaterialExportsModule } from '../../material.module';
import { HttpClientModule } from '@angular/common/http';
import { FormsModule } from '@angular/forms';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { FlexLayoutModule } from '@angular/flex-layout';
import { VacanciesModule } from '../vacancies/vacancies.module';
import { UserProfileModule } from '../user-profile/user-profile.module';



@NgModule({
  declarations: [
    NavMenuComponent
  ],
  imports: [
    CommonModule,
    RouterModule,
    MaterialExportsModule,
    HttpClientModule,
    FormsModule,
    BrowserAnimationsModule,
    FlexLayoutModule,
    VacanciesModule,
    UserProfileModule
  ],
  exports: [
    NavMenuComponent    
  ]
})
export class SharedModule { }
