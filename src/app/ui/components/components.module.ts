import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { JobPostsComponent } from './job-posts/job-posts.component';
import { ApplicationsModule } from './applications/applications.module';
import { HomeModule } from './home/home.module';
import { JobPostsModule } from './job-posts/job-posts.module';



@NgModule({
  declarations: [
    JobPostsComponent
  ],
  imports: [
    CommonModule,
    ApplicationsModule,
    HomeModule,
    JobPostsModule
  ]
})
export class ComponentsModule { }
