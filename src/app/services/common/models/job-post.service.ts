import { Injectable } from '@angular/core';
import { HttpClientService } from '../http-client.service';
import { CreateJobPost } from 'src/app/contracts/create-job-post';

@Injectable({
  providedIn: 'root'
})
export class JobPostService {

  constructor(private httpClientService: HttpClientService) { }

  create(jobPost: CreateJobPost, succesCallBack?: any){
    this.httpClientService.post({
      controller:"JobPosts"
    },jobPost)
    .subscribe(result =>{
      succesCallBack();
      
    });
  }


}
