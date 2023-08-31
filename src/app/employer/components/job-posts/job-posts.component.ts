import { Component, OnInit, ViewChild } from '@angular/core';
import { NgxSpinnerService } from 'ngx-spinner';
import { BaseComponent, SpinnerType } from 'src/app/base/base.component';
import { CreateJobPost } from 'src/app/contracts/create-job-post';
import { ListComponent } from './list/list.component';

@Component({
  selector: 'app-job-posts',
  templateUrl: './job-posts.component.html',
  styleUrls: ['./job-posts.component.scss']
})
export class JobPostsComponent extends BaseComponent implements OnInit{
  constructor( spinner: NgxSpinnerService){
    super(spinner);
  }

  ngOnInit(): void{
    this.showSpinner(SpinnerType.BallAtom); 
  }

  @ViewChild(ListComponent) ListComponents : ListComponent;

  createdJobPost(createdJobPost: CreateJobPost){
    this.ListComponents.getJobPosts();
  }
}
