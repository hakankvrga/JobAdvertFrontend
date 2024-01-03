import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
import { UserJobPostComponent } from './user-job-post.component';

import { MatButtonModule } from '@angular/material/button';
import { MatSidenavModule } from '@angular/material/sidenav';
import { MatTableModule } from '@angular/material/table';
import {MatPaginatorModule} from '@angular/material/paginator';
import { DialogModule } from '@angular/cdk/dialog';
import { FileUploadModule } from 'src/app/services/common/file-upload/file-upload.module';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input';
import { MatDatepickerModule } from '@angular/material/datepicker';
import { MatNativeDateModule } from '@angular/material/core';
import { MatSelectModule } from '@angular/material/select';



@NgModule({
  declarations: [],
  imports: [
    CommonModule,
    RouterModule.forChild([
      {path:"", component:UserJobPostComponent}
    ]),
    MatFormFieldModule, MatInputModule, MatSelectModule,MatButtonModule,MatSidenavModule,MatTableModule,MatPaginatorModule,DialogModule,FileUploadModule,MatDatepickerModule,MatFormFieldModule, MatInputModule, MatDatepickerModule, MatNativeDateModule
  ]
})
export class UserJobPostModule { }
