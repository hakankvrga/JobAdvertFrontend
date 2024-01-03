import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { BaseUrl } from 'src/app/contracts/base_url';
import { GetJobPost } from 'src/app/contracts/get-job-post';
import { List_JobPost_Image } from 'src/app/contracts/list_jobPost-image';
import { FileService } from 'src/app/services/common/models/file.service';
import { JobPostService } from 'src/app/services/common/models/job-post.service';


@Component({
  selector: 'app-apply',
  templateUrl: './apply.component.html',
  styleUrls: ['./apply.component.scss']
})
export class ApplyComponent implements OnInit {
  constructor(
    private jobPostService: JobPostService,
    private route: ActivatedRoute,
    private fileService: FileService
  ) {}

  baseUrl: BaseUrl;
  jobPost: GetJobPost;

  async ngOnInit() {
    this.baseUrl = await this.fileService.getBaseStoragaUrl();
    this.getJobPostDetails();
  }

  getJobPostDetails(): void {
    const id = +this.route.snapshot.paramMap.get('id');

    this.jobPostService.getJobPostById(id).then((data) => {
      this.jobPost = data;
    });
  }

  applyForJob(): void {
    
  }



  formatDate(dateString: string): string {
    const options: Intl.DateTimeFormatOptions = {
      day: 'numeric',
      month: 'long',
      year: 'numeric',
      weekday: 'long',
      hour: 'numeric',
      minute: 'numeric',
    };
  
    const date = new Date(dateString);
    const formattedDate = date.toLocaleDateString('tr-TR', options);
    return formattedDate;
  }
}
