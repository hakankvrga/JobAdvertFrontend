import { AfterViewInit, Component, OnInit, ViewChild } from '@angular/core';
import { MatTableDataSource, _MatTableDataSource } from '@angular/material/table';
import { NgxSpinner, NgxSpinnerService } from 'ngx-spinner';
import { BaseComponent, SpinnerType } from 'src/app/base/base.component';
import { ListJobPost } from 'src/app/contracts/list-job-post';
import { JobPostService } from 'src/app/services/common/models/job-post.service';
import { AlertifyService, MessageType, Position } from 'src/app/services/employer/alertify.service';
import {MatPaginator, MatPaginatorModule} from '@angular/material/paginator';
import { DialogService } from 'src/app/services/common/dialog.service';
import { SelectJobPostImageDialogComponent } from 'src/app/dialogs/select-job-post-image-dialog/select-job-post-image-dialog.component';


@Component({
  selector: 'app-list',
  templateUrl: './list.component.html',
  styleUrls: ['./list.component.scss']
})
export class ListComponent extends BaseComponent implements OnInit {
  constructor(spinner : NgxSpinnerService,
      private jobPostService: JobPostService,
      private alertifyService: AlertifyService,
      private dialogService: DialogService) {
    super(spinner)
  }
 
  
  displayedColumns: string[] = ['companyName', 'title', 'jobType', 'startDate', 'endDate','photos','edit','delete'];
  dataSource: MatTableDataSource<ListJobPost> = null;
  @ViewChild(MatPaginator) paginator: MatPaginator;

 async getJobPosts() {
  this.showSpinner(SpinnerType.BallAtom);
  const allJobPosts: {totalJobPostCount:number; jobPosts:ListJobPost[] }= await  this.jobPostService.read(this.paginator? this.paginator.pageIndex:0, this.paginator? this.paginator.pageSize:5, ()=> this.hideSpinner(SpinnerType.BallAtom), errorMessage=> this.alertifyService.message(errorMessage,{
      dismissOthers: true,
      messageType: MessageType.Error,
      position: Position.TopRight
    }))
    this.dataSource= new  MatTableDataSource<ListJobPost>(allJobPosts.jobPosts);
    this.paginator.length= allJobPosts.totalJobPostCount;
    
 }

 addJobPostImages(id: string){
   this.dialogService.openDialog({
    componentType: SelectJobPostImageDialogComponent,
    data: id,
    options: {
      width: "1400px"
    }
     });
 }

  async pageChanged(){
 await this.getJobPosts();
 }

 async ngOnInit() {
  await this.getJobPosts();
  }


}


