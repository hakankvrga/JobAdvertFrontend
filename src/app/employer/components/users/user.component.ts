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
    // this.showSpinner(SpinnerType.BallAtom); 
    
    // this.httpClientService.get<User[]>({
    //   controller: "users"
    // }).subscribe(data => console.log(data));


    // this.httpClientService.post({
    //   controller: "users"
    // },{
    //   UserTypeId : 1,
    //   FirstName : "hakan",
    //   LastName : "kavurga",
    //   Email : "safgsag",
    //   Password: "12345"
    // }).subscribe();

    // this.httpClientService.put({
    //   controller: "users"
    // },{
    //   id: 32,
    //   UserTypeId : 1,
    //   firstName: "kaan",
    //   lastName:"kurt",
    //   email: "asgasg",
    //   password:"asdgasg"
    // }).subscribe();
    

    // this.httpClientService.delete({
    //   controller: "users"
    // }, "14")
    // .subscribe();

    // this.httpClientService.get({
    //   baseUrl:"https://jsonplaceholder.typicode.com",
    //   controller: "posts"
    // }).subscribe(data => console.log(data));
  }
}
