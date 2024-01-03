import { Component, EventEmitter, OnInit, Output } from '@angular/core';
import { NgxSpinnerService } from 'ngx-spinner';
import { BaseComponent, SpinnerType } from 'src/app/base/base.component';
import { CreateJobPost } from 'src/app/contracts/create-job-post';

import { HttpClientService } from 'src/app/services/common/http-client.service';
import { JobPostService } from 'src/app/services/common/models/job-post.service';
import { AlertifyService, MessageType, Position } from 'src/app/services/employer/alertify.service';

@Component({
  selector: 'app-user',
  templateUrl: './user.component.html',
  styleUrls: ['./user.component.scss']
})
export class UserComponent extends BaseComponent {
  constructor(spiner:NgxSpinnerService, private jobPostService: JobPostService, private alertify: AlertifyService){
    super(spiner)
   }
 
   
   @Output() createdJobPost: EventEmitter<CreateJobPost> = new EventEmitter();
   
  
  
    create(title: HTMLInputElement, companyName: HTMLInputElement, description: HTMLInputElement, startDateInput: HTMLInputElement, endDateInput: HTMLInputElement) {
      this.showSpinner(SpinnerType.BallAtom);
      const createJobPost: CreateJobPost = new CreateJobPost();
  
      createJobPost.title = title.value;
      createJobPost.companyName = companyName.value;
      createJobPost.description = description.value;
  
      const startDate = new Date(startDateInput.value);
      const endDate = new Date(endDateInput.value);
      createJobPost.startDate = startDate.toISOString();
      createJobPost.endDate = endDate.toISOString();
  
      this.jobPostService.create(createJobPost, () => {
        this.hideSpinner(SpinnerType.BallAtom);
        this.alertify.message("ilan oluşturudu", {
          dismissOthers: true,
          messageType: MessageType.Success,
          position: Position.TopRight
        });
        this.createdJobPost.emit(createJobPost);
      }, errorMessage => {
        this.alertify.message(errorMessage, {
          dismissOthers: true,
          messageType: MessageType.Error,
          position: Position.TopRight
        });
      });
    }
    
}
