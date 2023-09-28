import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { NormalRegisterComponent } from './normal-register.component';
import { RouterModule } from '@angular/router';
import { ReactiveFormsModule } from '@angular/forms';



@NgModule({
  declarations: [
    NormalRegisterComponent
  ],
  imports: [
    CommonModule,
    RouterModule.forChild([
      {path:"", component:NormalRegisterComponent}  
    ]),
    ReactiveFormsModule
  ]
})
export class NormalRegisterModule { }
