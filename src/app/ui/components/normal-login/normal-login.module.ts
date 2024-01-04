import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
import { NormalLoginComponent } from './normal-login.component';



@NgModule({
  declarations: [],
  imports: [
    CommonModule,
    RouterModule.forChild([
      {path:"", component:NormalLoginComponent}
    ])
  ]
})
export class NormalLoginModule { }
