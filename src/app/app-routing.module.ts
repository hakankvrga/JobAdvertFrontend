import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { LayoutComponent } from './employer/layout/layout.component';
import { DashboardComponent } from './employer/components/dashboard/dashboard.component';
import { HomeComponent } from './ui/components/home/home.component';
import { AuthGuard } from './guards/common/auth.guard';


const routes: Routes = [
  {path:"employer", component: LayoutComponent, children:[
    {path:"", component: DashboardComponent, canActivate:[AuthGuard]},
    {path:"users", loadChildren: () => import("./employer/components/users/user.module").then(module => module.UserModule), canActivate:[AuthGuard]},
    {path:"jobPosts", loadChildren: () => import("./employer/components/job-posts/job-posts.module").then(module => module.JobPostsModule), canActivate:[AuthGuard]},
    {path:"userJobPosts", loadChildren: () => import("./employer/components/user-job-posts/user-job-post.module").then(module => module.UserJobPostModule), canActivate:[AuthGuard]}
  ], canActivate:[AuthGuard]}, 

  {path:"", component: HomeComponent},
  {path:"applications", loadChildren :()=> import("./ui/components/applications/applications.module").then(module=> module.ApplicationsModule)},
  {path:"jobPosts" , loadChildren :()=> import("./ui/components/job-posts/job-posts.module").then(module=> module.JobPostsModule)
,data:{
  name:'jobPost'
}},
  {path:"jobPosts/:pageNo", loadChildren :()=> import("./ui/components/job-posts/job-posts.module").then(module=> module.JobPostsModule)},
  {path:"normalRegister", loadChildren :()=> import("./ui/components/register/normal-register/normal-register.module").then(module=> module.NormalRegisterModule)},
  {path:"register", loadChildren :()=> import("./ui/components/register/register.module").then(module=> module.RegisterModule)},
  {path:"login", loadChildren :()=> import("./ui/components/login/login.module").then(module=> module.LoginModule)},
  {path:"apply", loadChildren :()=> import("./ui/components/apply/apply.module").then(module=> module.ApplyModule)}
  
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
