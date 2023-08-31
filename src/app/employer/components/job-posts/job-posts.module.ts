import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
import { JobPostsComponent } from './job-posts.component';
import {MatFormFieldModule} from '@angular/material/form-field';
import {MatInputModule} from '@angular/material/input';
import {MatSelectModule} from '@angular/material/select';
import {MatButtonModule} from '@angular/material/button';
import { CreateComponent } from './create/create.component';
import {MatSidenavModule} from '@angular/material/sidenav';
import { ListComponent } from './list/list.component';
import {MatTableModule} from '@angular/material/table';
import {MatPaginatorModule} from '@angular/material/paginator';
import { DeleteDirective } from 'src/app/directives/employer/delete.directive';

@NgModule({
  declarations: [
    JobPostsComponent,
    CreateComponent,
    ListComponent,
    DeleteDirective
  ],
  imports: [
    CommonModule,
    RouterModule.forChild([
      {path:"", component:JobPostsComponent}
    ]),
    MatFormFieldModule, MatInputModule, MatSelectModule,MatButtonModule,MatSidenavModule,MatTableModule,MatPaginatorModule
  ]
})
export class JobPostsModule { }
