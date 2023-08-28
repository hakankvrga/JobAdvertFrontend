import { Component, OnInit } from '@angular/core';
import { NgxSpinnerService } from 'ngx-spinner';
import { BaseComponent, SpinnerType } from 'src/app/base/base.component';

@Component({
  selector: 'app-applications',
  templateUrl: './applications.component.html',
  styleUrls: ['./applications.component.scss']
})
export class ApplicationsComponent extends BaseComponent implements OnInit {
  constructor( spinner: NgxSpinnerService){
    super(spinner);
  }

  ngOnInit(): void{
    this.showSpinner(SpinnerType.BallAtom); 
  }
}
