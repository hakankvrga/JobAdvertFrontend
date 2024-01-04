import { List_JobPost_Image } from "./list_jobPost-image";

export class GetJobPost {
    id:number;
 
    title: string;
    companyName:string;
    description: string;
    startDate: string;
    endDate: string;
    imagePath: string;
    jobPostImageFiles? : List_JobPost_Image[]; 
  images: GetJobPost;
  length: number;
}
