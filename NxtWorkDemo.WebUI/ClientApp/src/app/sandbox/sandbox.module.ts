import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { TestNavComponent } from './test-nav/test-nav.component';
import { LayoutModule } from '@angular/cdk/layout';
import { MatToolbarModule } from '@angular/material/toolbar';
import { MatButtonModule } from '@angular/material/button';
import { MatSidenavModule } from '@angular/material/sidenav';
import { MatIconModule } from '@angular/material/icon';
import { MatListModule } from '@angular/material/list';
import { RouterModule } from '@angular/router';
import { MaterialExportsModule } from '../../material.module';
import { HttpClientModule } from '@angular/common/http';
import { FormsModule } from '@angular/forms';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { FlexLayoutModule } from '@angular/flex-layout';



@NgModule({
  declarations: [TestNavComponent],
  imports: [
    CommonModule,
    LayoutModule,
    MatToolbarModule,
    MatButtonModule,
    MatSidenavModule,
    MatIconModule,
    MatListModule,
    RouterModule.forChild([
      { path: 'testnav', component: TestNavComponent },
      { path: 'test-dashboard', component: TestNavComponent },
    ]),
    MaterialExportsModule,
    HttpClientModule,
    FormsModule,
    BrowserAnimationsModule,
    FlexLayoutModule,
  ],
  exports: [
    TestNavComponent
  ]
})
export class SandboxModule { }
