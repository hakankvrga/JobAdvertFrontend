import { SocialAuthService, SocialUser } from '@abacritt/angularx-social-login';
import { Component } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { NgxSpinnerService } from 'ngx-spinner';
import { BaseComponent, SpinnerType } from 'src/app/base/base.component';
import { TokenResponse } from 'src/app/contracts/token/tokenResponse';
import { AuthService } from 'src/app/services/common/auth.service';
import { HttpClientService } from 'src/app/services/common/http-client.service';
import { UserAuthService } from 'src/app/services/common/models/user-auth.service';


@Component({
  selector: 'app-normal-login',
  templateUrl: './normal-login.component.html',
  styleUrls: ['./normal-login.component.scss']
})
export class NormalLoginComponent extends BaseComponent {
  constructor(private userAuthService: UserAuthService, spinner : NgxSpinnerService, private authService: AuthService, private activatedRoute: ActivatedRoute,private router: Router, private socialAuthService: SocialAuthService ) { 
    super(spinner)
    socialAuthService.authState.subscribe(async (user: SocialUser) => {
      console.log(user)
      this.showSpinner(SpinnerType.BallAtom);
      await userAuthService.googleLogin(user, () => {
        this.authService.identityCheck();
        this.hideSpinner(SpinnerType.BallAtom);
      })
    });
  }

 async login(usernameOrEmail: string,password: string){
  this.showSpinner(SpinnerType.BallAtom);
   await this.userAuthService.login(usernameOrEmail, password, ()=> {
    this.authService.identityCheck();
    this.activatedRoute.queryParams.subscribe(params => {
      const returnUrl: string = params["returnUrl"];
      if (returnUrl) {
        this.router.navigate([returnUrl]);
      } else {
        // returnUrl yoksa varsayılan olarak "jobPosts" rotasına yönlendir
        this.router.navigate(['/jobPosts']);
      }
    });
    this.hideSpinner(SpinnerType.BallAtom);
   });
  }
}
