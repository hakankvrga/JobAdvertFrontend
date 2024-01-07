// apply.component.ts

import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { BaseUrl } from 'src/app/contracts/base_url';
import { GetJobPost } from 'src/app/contracts/get-job-post';
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
  applicationStatuses: any[] = [];
  selectedApplyStatusId: number = 3; // Varsayılan değeri buradan ayarlayabilirsiniz.

  async ngOnInit() {
    this.baseUrl = await this.fileService.getBaseStoragaUrl();
    await this.getJobPostDetails();
    await this.getApplicationStatuses();
    
  }

  async getJobPostDetails(): Promise<void> {
    try {
      const id = +this.route.snapshot.paramMap.get('id');
      this.jobPost = await this.jobPostService.getJobPostById(id, () => {
        console.log('Job Post successfully fetched.');
      });
  
      
    } catch (error) {
      console.error('Error fetching job post details:', error);
    }
  }

  async getApplicationStatuses(): Promise<void> {
    this.jobPostService.getApplicationStatuses().subscribe((statuses: any[]) => {
      this.applicationStatuses = statuses;
    });
  }
  
  
  async applyForJob(applyStatusId: number): Promise<any> {
    try {
      const id = +this.route.snapshot.paramMap.get('id');
      const appUserId = 'your_app_user_id'; // Burada gerçek appUserId'yi belirleyin veya uygun bir şekilde alın
      await this.jobPostService.applyForJob(id, applyStatusId, appUserId).toPromise();
      // Optionally, you can update the UI or perform additional actions upon successful application.
    } catch (error) {
      console.error('Error applying for the job:', error);
    }
  }
  
  
  
  
  
  
  






  isApplicationAccepted(): boolean {
    // Implement your logic here based on application status
    // For example, if status is accepted, return true; otherwise, return false.
    return this.jobPost?.applicationStatusId === 3; // Update this with your actual status ID for accepted applications.
  }

  getJobPostImageUrl(): string {
    
  
    if (this.jobPost && this.jobPost.images && this.jobPost.images.length > 0) {
      return this.jobPost.images[0];
    } else {
      return '../../../../assets/job-advert-foto.jpg';
    }
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
    return date.toLocaleDateString('tr-TR', options);
  }
}
