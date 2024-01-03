import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { UserComponent } from './user.component';
import { RouterModule } from '@angular/router';

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
  declarations: [
    UserComponent
  ],
  imports: [
    CommonModule,
    RouterModule.forChild([
      {path:"", component:UserComponent}
    ]),
    MatFormFieldModule, MatInputModule, MatSelectModule,MatButtonModule,MatSidenavModule,MatTableModule,MatPaginatorModule,DialogModule,FileUploadModule,MatDatepickerModule,MatFormFieldModule, MatInputModule, MatDatepickerModule, MatNativeDateModule
  ]
})
export class UserModule { }
