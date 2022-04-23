import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { NxtUserService } from './services/nxt-user.service';



@NgModule({
  declarations: [],
  imports: [
    CommonModule
  ],
  providers: [
    NxtUserService
  ],
})
export class UserAuthModule { }
