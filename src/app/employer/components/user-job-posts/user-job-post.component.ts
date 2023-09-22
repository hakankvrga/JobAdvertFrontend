import { Component, OnInit } from '@angular/core';
import { NgxSpinnerService } from 'ngx-spinner';
import { BaseComponent, SpinnerType } from 'src/app/base/base.component';

@Component({
  selector: 'app-user-job-post',
  templateUrl: './user-job-post.component.html',
  styleUrls: ['./user-job-post.component.scss']
})
export class UserJobPostComponent extends BaseComponent implements OnInit {
  constructor( spinner: NgxSpinnerService){
    super(spinner);
  }

  ngOnInit(): void{
     
  }
}
