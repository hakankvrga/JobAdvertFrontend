import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { JobPostsComponent } from './job-posts/job-posts.component';
import { ApplicationsModule } from './applications/applications.module';
import { HomeModule } from './home/home.module';
import { JobPostsModule } from './job-posts/job-posts.module';
import { RegisterComponent } from './register/register.component';
import { RegisterModule } from './register/register.module';
import { LoginModule } from './login/login.module';
import { NormalRegisterModule } from './register/normal-register/normal-register.module';
import { ApplyModule } from './apply/apply.module';




@NgModule({
  declarations: [
    
  ],
  imports: [
    CommonModule,
    ApplicationsModule,
    HomeModule,
    JobPostsModule,
    RegisterModule,
    NormalRegisterModule,
    ApplyModule
    //LoginModule
  ]
})
export class ComponentsModule { }
