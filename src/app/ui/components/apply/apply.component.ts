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

  async ngOnInit() {
    this.baseUrl = await this.fileService.getBaseStoragaUrl();
    await this.getJobPostDetails();
    console.log('Job Post in ngOnInit:', this.jobPost);
  }

  async getJobPostDetails(): Promise<void> {
    try {
      const id = +this.route.snapshot.paramMap.get('id');
      this.jobPost = await this.jobPostService.getJobPostById(id, () => {
        console.log('Job Post successfully fetched.');
      });
  
      console.log('Job Post after fetching:', this.jobPost);
    } catch (error) {
      console.error('Error fetching job post details:', error);
    }
  }
  
  

  applyForJob(): void {
    // Başvuru işlemleri burada yapılabilir.
  }

  getJobPostImageUrl(): string {
    console.log('Inside getJobPostImageUrl - Job Post Data:', this.jobPost);
  
    if (this.jobPost && this.jobPost.images && this.jobPost.images.length > 0) {
      return this.jobPost.images[0];  // Displaying the first image in the array, you can modify as needed
    } else {
      // If there are no images or the images array is empty, return the default image
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
