import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { LayoutComponent } from './employer/layout/layout.component';
import { DashboardComponent } from './employer/components/dashboard/dashboard.component';
import { HomeComponent } from './ui/components/home/home.component';

const routes: Routes = [
  {path:"employer", component: LayoutComponent, children:[
    {path:"", component: DashboardComponent},
    {path:"users", loadChildren: () => import("./employer/components/users/user.module").then(module => module.UserModule)},
    {path:"jobPosts", loadChildren: () => import("./employer/components/job-posts/job-posts.module").then(module => module.JobPostsModule)},
    {path:"userJobPosts", loadChildren: () => import("./employer/components/user-job-posts/user-job-post.module").then(module => module.UserJobPostModule)}
  ]},
  {path:"", component: HomeComponent},
  {path:"applications", loadChildren :()=> import("./ui/components/applications/applications.module").then(module=> module.ApplicationsModule)},
  {path:"jobPosts", loadChildren :()=> import("./ui/components/job-posts/job-posts.module").then(module=> module.JobPostsModule)}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
