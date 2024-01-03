import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ApplyComponent } from './apply.component';
import { RouterModule } from '@angular/router';



@NgModule({
  declarations: [
    ApplyComponent
  ],
  imports: [
    CommonModule,
    RouterModule.forChild([
      {path:"apply/:id", component:ApplyComponent}
    ])
  ]
})
export class ApplyModule { }
