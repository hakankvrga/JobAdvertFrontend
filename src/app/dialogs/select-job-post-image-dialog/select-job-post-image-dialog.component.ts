import { Component, Inject, OnInit, Output } from '@angular/core';
import { BaseDialog } from '../base/base-dialog';
import { MAT_DIALOG_DATA, MatDialogRef } from '@angular/material/dialog';
import { FileUploadOptions } from 'src/app/services/common/file-upload/file-upload.component';
import { JobPostService } from 'src/app/services/common/models/job-post.service';
import { List_JobPost_Image } from 'src/app/contracts/list_jobPost-image';
import { NgxSpinner, NgxSpinnerService } from 'ngx-spinner';
import { SpinnerType } from 'src/app/base/base.component';
import { MatCard } from '@angular/material/card';
import { DialogService } from 'src/app/services/common/dialog.service';
import { DeleteDialogComponent, DeleteState } from '../delete-dialog/delete-dialog.component';

declare var $:any

@Component({
  selector: 'app-select-job-post-image-dialog',
  templateUrl: './select-job-post-image-dialog.component.html',
  styleUrls: ['./select-job-post-image-dialog.component.scss']
})
export class SelectJobPostImageDialogComponent extends BaseDialog<SelectJobPostImageDialogComponent> implements OnInit{

  constructor(dialogRef : MatDialogRef<SelectJobPostImageDialogComponent>,
    @Inject(MAT_DIALOG_DATA) public data: SelectJobPostImageState | string,
    private jobPostService: JobPostService,
    private spinner: NgxSpinnerService,
    private dialogService:DialogService
    ){
    super(dialogRef)
  }
 


 @Output() options :  Partial<FileUploadOptions>={
    accept:".png, .jpg, .jpeg",
    action:"upload",
    controller:"jobPosts",
    explanation:"İlan resmini seçin veya sürükleyin...",
    isEmployerPage: true,
    queryString:`id=${this.data}`
  };

  images: List_JobPost_Image[];

 async ngOnInit() {
  this.spinner.show(SpinnerType.BallAtom);
   this.images = await this.jobPostService.readImages(this.data as string,()=>this.spinner.hide(SpinnerType.BallAtom));
  }

 async deleteImage(imageId:string, event:any){

  this.dialogService.openDialog({
    componentType:DeleteDialogComponent,
    data:DeleteState.Yes,
    afterClosed: async ()=> {
      this.spinner.show(SpinnerType.BallAtom)
      await  this.jobPostService.deleteImage(this.data as string, imageId, ()=>{
        this.spinner.hide(SpinnerType.BallAtom);
        var card = $(event.srcElement).parent().parent();
        card.fadeOut(500);
      });
    }
  })


  
  }

  showCase(imageId: string) {
    this.spinner.show(SpinnerType.BallAtom);

    this.jobPostService.changeShowcaseImage(imageId, this.data as string, () => {
      this.spinner.hide(SpinnerType.BallAtom);
    });
  }
}


export enum SelectJobPostImageState{
  Close
}