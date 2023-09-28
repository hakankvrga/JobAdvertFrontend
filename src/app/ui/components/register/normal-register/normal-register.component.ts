import { Component, OnInit } from '@angular/core';
import { AbstractControl, FormBuilder, FormGroup, ValidationErrors, Validators } from '@angular/forms';
import { NgxSpinnerService } from 'ngx-spinner';
import { BaseComponent } from 'src/app/base/base.component';
import { Create_User } from 'src/app/contracts/users/create_user';
import { User } from 'src/app/entities/user';
import { UserService } from 'src/app/services/common/models/user.service';
import { CustomToastrService, ToastrMessageType, ToastrPosition } from 'src/app/services/ui/custom-toastr.service';

@Component({
  selector: 'app-normal-register',
  templateUrl: './normal-register.component.html',
  styleUrls: ['./normal-register.component.scss']
})
export class NormalRegisterComponent extends BaseComponent implements OnInit{
  
  constructor(private formBuilder: FormBuilder, private userService: UserService, private toastrService: CustomToastrService, spinner : NgxSpinnerService) { 
    super(spinner)
  }
 

  frm2: FormGroup;

  ngOnInit(): void {
     this.frm2= this.formBuilder.group({
      nameSurname: ["", [
        Validators.required,
        Validators.maxLength(100),
        Validators.minLength(3)]],
      userName: ["",[
        Validators.required,
        Validators.maxLength(100),
        Validators.minLength(3)]],
      email: ["",[
        Validators.required,
        Validators.maxLength(200),
        Validators.email
        ]],
      password: ["",[
        Validators.required,
       ]],
      passwordConfirm: ["",[
        Validators.required,
      ]]
     } ,{validators: (group: AbstractControl): ValidationErrors | null=>
      {
        let password= group.get("password").value;
        let passwordConfirm= group.get("passwordConfirm").value;
        return password === passwordConfirm ? null: {notSame: true};
      }
    })
  }

  get component(){
    return this.frm2.controls;
  }

  submitted: boolean=false;
async  onSubmit(user: User){
    this.submitted = true;
    if(this.frm2.invalid)
    return;

    const result: Create_User = await this.userService.createNormalUser(user);
    if (result.succeeded)
      this.toastrService.message(result.message, "Kullanıcı Kaydı Başarılı", {
        messageType: ToastrMessageType.Success,
        position: ToastrPosition.TopRight
      })
    else
      this.toastrService.message(result.message, "Hata", {
        messageType: ToastrMessageType.Error,
        position: ToastrPosition.TopRight
      })
    }
}
