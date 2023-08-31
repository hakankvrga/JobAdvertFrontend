import { Directive, ElementRef, EventEmitter, HostListener, Input, Output, Renderer2 } from '@angular/core';
import { NgxSpinner, NgxSpinnerService } from 'ngx-spinner';
import { SpinnerType } from 'src/app/base/base.component';
import { HttpClientService } from 'src/app/services/common/http-client.service';
import { JobPostService } from 'src/app/services/common/models/job-post.service';

declare var $:any;

@Directive({
  selector: '[appDelete]'
})
export class DeleteDirective {

  constructor(
   private element:ElementRef,
   private _renderer: Renderer2,
   private jobPostService : JobPostService,
   private spinner: NgxSpinnerService
  ) {
    const img= _renderer.createElement("img");
    img.setAttribute("src","../../../../../assets/delete.png");
    img.setAttribute("style","cursor: pointer;");
    img.width=25;
    img.height=25;
    _renderer.appendChild(element.nativeElement, img);

   }

   @Input() id:string;
   @Output() callback : EventEmitter<any> = new EventEmitter();
@HostListener("click")
async onclick(){
  this.spinner.show(SpinnerType.BallAtom)
   const td: HTMLTableCellElement = this.element.nativeElement;
  await this.jobPostService.delete(this.id);
   $(td.parentElement).fadeOut(2000, ()=>{
    this.callback.emit();
   });

}

}