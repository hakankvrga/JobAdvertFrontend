import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { JobPostsComponent } from './job-posts/job-posts.component';
import { UserJobPostComponent } from './user-job-posts/user-job-post.component';
import { UserModule } from './users/user.module';
import { JobPostsModule } from './job-posts/job-posts.module';
import { UserJobPostModule } from './user-job-posts/user-job-post.module';
import { DashboardModule } from './dashboard/dashboard.module';



@NgModule({
  declarations: [
    JobPostsComponent,
    UserJobPostComponent
  ],
  imports: [
    CommonModule,
    UserModule,
    JobPostsModule,
    UserJobPostModule,
    DashboardModule
  ]
})
export class ComponentsModule { }
