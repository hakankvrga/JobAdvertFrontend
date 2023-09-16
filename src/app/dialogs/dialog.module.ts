import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { DeleteDialogComponent } from './delete-dialog/delete-dialog.component';
import { FileUploadDialogComponent } from './file-upload-dialog/file-upload-dialog.component';
import {MatDialogModule} from '@angular/material/dialog';
import { MatButtonModule } from '@angular/material/button';
import { SelectJobPostImageDialogComponent } from './select-job-post-image-dialog/select-job-post-image-dialog.component';
import { FileUploadModule } from '../services/common/file-upload/file-upload.module';
import {MatCardModule} from '@angular/material/card';


@NgModule({
  declarations: [
    DeleteDialogComponent, SelectJobPostImageDialogComponent
  ],
  imports: [
    CommonModule,MatDialogModule,MatButtonModule,FileUploadModule,MatCardModule 

  ]
})
export class DialogModule { }
