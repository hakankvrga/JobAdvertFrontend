import { Component } from '@angular/core';
import { NgxSpinnerService } from 'ngx-spinner';
import { BaseComponent, SpinnerType } from 'src/app/base/base.component';

@Component({
  selector: 'app-job-posts',
  templateUrl: './job-posts.component.html',
  styleUrls: ['./job-posts.component.scss']
})
export class JobPostsComponent extends BaseComponent{
  constructor( spinner: NgxSpinnerService){
    super(spinner);
  }

  ngOnInit(): void{
    this.showSpinner(SpinnerType.BallAtom); 
  }
}
