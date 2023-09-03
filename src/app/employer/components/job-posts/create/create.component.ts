import { Component, EventEmitter, OnInit, Output } from '@angular/core';
import { NgxSpinnerService } from 'ngx-spinner';
import { BaseComponent, SpinnerType } from 'src/app/base/base.component';
import { CreateJobPost } from 'src/app/contracts/create-job-post';
import { FileUploadOptions } from 'src/app/services/common/file-upload/file-upload.component';
import { JobPostService } from 'src/app/services/common/models/job-post.service';
import { AlertifyService, MessageType, Position } from 'src/app/services/employer/alertify.service';

@Component({
  selector: 'app-create',
  templateUrl: './create.component.html',
  styleUrls: ['./create.component.scss']
})
export class CreateComponent extends BaseComponent  {
 constructor(spiner:NgxSpinnerService, private jobPostService: JobPostService, private alertify: AlertifyService){
  super(spiner)
 }
 
 @Output() createdJobPost: EventEmitter<CreateJobPost> = new EventEmitter();
 @Output() fileUploadOptions: Partial<FileUploadOptions>={
  action: "upload",
  controller:"jobPosts",
  explanation:"Resimleri sürükleyin veya seçin...",
  isEmployerPage:true,
  accept:".png, .jpeg, .jpg"
 };


  create( userId: HTMLInputElement, jobTypeId: HTMLInputElement, title: HTMLInputElement, companyName: HTMLInputElement, description: HTMLInputElement, imagePath: HTMLInputElement,startDate: HTMLInputElement, endDate: HTMLInputElement){
  this.showSpinner(SpinnerType.BallAtom);
  const createJobPost: CreateJobPost = new CreateJobPost();
 
  createJobPost.userId=parseInt(userId.value);
  createJobPost.jobTypeId=parseInt(jobTypeId.value);
  createJobPost.title=title.value;
  createJobPost.companyName=companyName.value;
  createJobPost.description=description.value;
  createJobPost.imagePath=description.value;
  createJobPost.startDate=startDate.value;
  createJobPost.endDate=endDate.value;

  this.jobPostService.create(createJobPost, ()=> {
    this.hideSpinner(SpinnerType.BallAtom);
    this.alertify.message("ilan oluşturudu",{
      dismissOthers:true,
      messageType:MessageType.Success,
      position:Position.TopRight
    });
    this.createdJobPost.emit(createJobPost);
  }, errorMessage =>{
    this.alertify.message(errorMessage,{
      dismissOthers:true,
      messageType: MessageType.Error,
      position: Position.TopRight
    });
  });
 }
  

}
