import { List_JobPost_Image } from "./list_jobPost-image";

export class ListJobPost {

    id:number;
    
    title: string;
    companyName:string;
    description: string;
    startDate: Date;
    endDate: Date;
    jobPostImageFiles? : List_JobPost_Image[];
    imagePath: string;
}
