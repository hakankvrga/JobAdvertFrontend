import { Injectable } from '@angular/core';
import { HttpClientService } from '../http-client.service';
import { CreateJobPost } from 'src/app/contracts/create-job-post';
import { HttpErrorResponse } from '@angular/common/http';
import { ListJobPost } from 'src/app/contracts/list-job-post';
import { Observable, firstValueFrom } from 'rxjs';
import { List_JobPost_Image } from 'src/app/contracts/list_jobPost-image';
import { GetJobPost } from 'src/app/contracts/get-job-post';
import { BaseUrl } from 'src/app/contracts/base_url';

@Injectable({
  providedIn: 'root'
})
export class JobPostService { // ilan işlemlerini yönetmek için oluşturulan servis

  constructor(private httpClientService: HttpClientService) { }

  create(jobPost: CreateJobPost, succesCallBack?: () => void, errorCallBack?: //ilan oluşturma methodu
   (errorMessage: string) => void) {
    this.httpClientService.post({
      controller: "JobPosts"

    }, jobPost)
      .subscribe(result => {
        succesCallBack();

      }, (errorResponse: HttpErrorResponse) => {
        const _error: Array<{ key: string, value: Array<string> }> = errorResponse.error;
        let message = "";
        _error.forEach((v, index) => {
          v.value.forEach((_v, _index) => {
            message += `${_v}<br>`;
          });
        });
        errorCallBack(message);
      });
  }
  async read(page: number = 0, size: number = 5, succesCallBack?: () => void, errorCallBack?: (errorMessage: string) => void): Promise<{ totalJobPostCount: number; jobPosts: ListJobPost[] }> {
    const promiseData: Promise<{ totalJobPostCount: number; jobPosts: ListJobPost[] }> = this.httpClientService.get<{ totalJobPostCount: number; jobPosts: ListJobPost[] }>({
      controller: "jobPosts",
      queryString: `page=${page}&size=${size}`
    }).toPromise();
    promiseData.then(d => succesCallBack())
      .catch((errorResponse: HttpErrorResponse) => errorCallBack(errorResponse.message))

    return await promiseData;
  }
  async delete(id: string) {
    const deleteObservable: Observable<any> = this.httpClientService.delete<any>({
      controller: "jobPosts"
    }, id);

    await firstValueFrom(deleteObservable);
  }

  async readImages(id: string, succesCallBack?: () => void): Promise<List_JobPost_Image[]> {
    const getObservable: Observable<List_JobPost_Image[]> = this.httpClientService.get<List_JobPost_Image[]>({
      action: "getjobpostimages",
      controller: "jobPosts"


    }, id);

    const images: List_JobPost_Image[] = await firstValueFrom(getObservable);
    succesCallBack();

    return images;
  }

  getJobPostById(id: number, succesCallBack?: ()=>void): Promise<GetJobPost> {
   const getJobPostByIdObservable: Observable<GetJobPost> = this.httpClientService.get<GetJobPost>({
      controller: "jobPosts",
      fullEndPoint: `https://localhost:7138/api/jobposts/apply/${id}`
    }, id.toString());
    return firstValueFrom(getJobPostByIdObservable);
  }
  async deleteImage(id: string, imageId: string, succesCallBack?: () => void) {
    const deleteObservable = this.httpClientService.delete({
      action: "DeleteJobPostImage",
      controller: "jobPosts",
      queryString: `imageId=${imageId}`

    }, id)
    await firstValueFrom(deleteObservable);
    succesCallBack();
  }

  async changeShowcaseImage(imageId: string, jobPostId: string, successCallBack?: () => void) : Promise<void> {
    const changeShowcaseImageObservable = this.httpClientService.get({
      action: "ChangeShowcaseImage",
      controller: "jobPosts",
      queryString: `imageId=${imageId}&jobPostId=${jobPostId}`
    });
    await firstValueFrom(changeShowcaseImageObservable);
    successCallBack();
  } 

  async getBaseStorageUrl(): Promise<BaseUrl> {
    const baseUrl = await this.httpClientService.get<BaseUrl>({
      controller: "Base",
      action: "GetStorageUrl"
    });
    return firstValueFrom(baseUrl);
  }
 
}

