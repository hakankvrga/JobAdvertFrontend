import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
import { UserJobPostComponent } from './user-job-post.component';



@NgModule({
  declarations: [],
  imports: [
    CommonModule,
    RouterModule.forChild([
      {path:"", component:UserJobPostComponent}
    ])
  ]
})
export class UserJobPostModule { }
