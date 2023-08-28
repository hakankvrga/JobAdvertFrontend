import { Component, OnInit } from '@angular/core';
import { NgxSpinnerService } from 'ngx-spinner';
import { BaseComponent, SpinnerType } from 'src/app/base/base.component';

@Component({
  selector: 'app-user',
  templateUrl: './user.component.html',
  styleUrls: ['./user.component.scss']
})
export class UserComponent extends BaseComponent implements OnInit{
  constructor( spinner: NgxSpinnerService){
    super(spinner);
  }

  ngOnInit(): void{
    this.showSpinner(SpinnerType.BallAtom); 
  }
}
