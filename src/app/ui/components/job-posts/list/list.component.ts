import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { BaseUrl } from 'src/app/contracts/base_url';
import { ListJobPost } from 'src/app/contracts/list-job-post';
import { FileService } from 'src/app/services/common/models/file.service';
import { JobPostService } from 'src/app/services/common/models/job-post.service';

@Component({
  selector: 'app-list',
  templateUrl: './list.component.html',
  styleUrls: ['./list.component.scss']
})
export class ListComponent implements OnInit {
  constructor(private jobPostService: JobPostService, private activatedRoute: ActivatedRoute, private fileService: FileService) { }

  currentPageNo: number;
  totalJobPostCount: number;
  totalPageCount: number;
  pageSize: number = 12;
  pageList: number[] = [];
  baseUrl: BaseUrl;

  jobPosts: ListJobPost[];
  async ngOnInit() {
    this.baseUrl = await this.fileService.getBaseStoragaUrl();

    this.activatedRoute.params.subscribe(async params => {
      this.currentPageNo = parseInt(params["pageNo"] ?? 1);
      const data: { totalJobPostCount: number, jobPosts: ListJobPost[] } = await this.jobPostService.read(this.currentPageNo - 1, this.pageSize,
        () => {

        }, errorMessage => {

        });
      this.jobPosts = data.jobPosts;

     this.jobPosts= this.jobPosts.map<ListJobPost>( j => {
     

        const listJobPost: ListJobPost = {
          id: j.id,
          title: j.title,
          companyName: j.companyName,
          startDate: j.startDate,
          endDate: j.endDate,
          imagePath:`${j.jobPostImageFiles.length ? j.jobPostImageFiles.find(j=>j.showcase).path : ""}` ,
          description: j.description,
          jobPostImageFiles: j.jobPostImageFiles
        };
        
        return listJobPost;


      });

     

      this.totalJobPostCount = data.totalJobPostCount;
      this.totalPageCount = Math.ceil(this.totalJobPostCount / this.pageSize);

      this.pageList = [];

      if (this.totalPageCount >= 7) {

        if (this.currentPageNo - 3 <= 0) {
          for (let i = 1; i <= 7; i++) {
            this.pageList.push(i);
          }
        }
        else if (this.currentPageNo + 3 >= this.totalPageCount) {
          for (let i = this.totalPageCount - 6; i <= this.totalPageCount; i++) {
            this.pageList.push(i);
          }
        }
        else {
          for (let i = this.currentPageNo - 3; i <= this.currentPageNo + 3; i++) {
            this.pageList.push(i);
          }
        }

      }
      else {

        for (let i = 1; i <= this.totalPageCount; i++) {
          this.pageList.push(i);
        }

      }
    });


  }
}
