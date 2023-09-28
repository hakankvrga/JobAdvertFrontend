import { Component, OnInit } from '@angular/core';
import { NgxSpinnerService } from 'ngx-spinner';
import { BaseComponent, SpinnerType } from 'src/app/base/base.component';

import { HttpClientService } from 'src/app/services/common/http-client.service';

@Component({
  selector: 'app-user',
  templateUrl: './user.component.html',
  styleUrls: ['./user.component.scss']
})
export class UserComponent extends BaseComponent implements OnInit{
  constructor( spinner: NgxSpinnerService, private httpClientService : HttpClientService){
    super(spinner);
  }

  ngOnInit(): void{
    
  }
}
