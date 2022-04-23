import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ProfilePageComponent } from './profile-page/profile-page.component';
import { RouterModule } from '@angular/router';
import { MaterialExportsModule } from '../../material.module';
import { HttpClientModule } from '@angular/common/http';
import { FormsModule } from '@angular/forms';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { FlexLayoutModule } from '@angular/flex-layout';
import { VacanciesModule } from '../vacancies/vacancies.module';
import { NxtUserService } from '../user-auth/services/nxt-user.service';



@NgModule({
  declarations: [
    ProfilePageComponent,
  ],
  imports: [    
    CommonModule,
    RouterModule.forChild([
      { path: 'profile', component: ProfilePageComponent },
    ]),
    RouterModule,
    MaterialExportsModule,
    HttpClientModule,
    FormsModule,
    BrowserAnimationsModule,
    FlexLayoutModule,
    VacanciesModule
  ],
  exports: [
    ProfilePageComponent
  ],
  providers: [
    NxtUserService
  ]
})
export class UserProfileModule { }
