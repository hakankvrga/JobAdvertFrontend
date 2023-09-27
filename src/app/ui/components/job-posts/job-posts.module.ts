import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
import { JobPostsComponent } from './job-posts.component';
import { ListComponent } from './list/list.component';



@NgModule({
  declarations: [
    JobPostsComponent,
    ListComponent
  ],
  imports: [
    CommonModule,
    RouterModule.forChild([
      {path:"", component:JobPostsComponent}
    ])
  ]
})
export class JobPostsModule { }
