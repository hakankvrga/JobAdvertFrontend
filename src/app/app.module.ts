import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { EmployerModule } from './employer/employer.module';
import { UiModule } from './ui/ui.module';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { ToastrModule } from 'ngx-toastr';
import { NgxSpinnerModule } from 'ngx-spinner';
import { BaseComponent } from './base/base.component';
import { HttpClientModule } from '@angular/common/http';
import { CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { JwtModule } from '@auth0/angular-jwt';
import { LoginComponent } from './ui/components/login/login.component';
import { GoogleLoginProvider, GoogleSigninButtonModule, SocialAuthServiceConfig, SocialLoginModule } from '@abacritt/angularx-social-login';





@NgModule({
    declarations: [
        AppComponent,
        LoginComponent
        
    ],
    providers: [
        {provide: "baseUrl", useValue: "https://localhost:7138/api", multi: true},
        {
            provide: "SocialAuthServiceConfig",
            useValue: {
              autoLogin: false,
              providers: [
                {
                  id: GoogleLoginProvider.PROVIDER_ID,
                  provider: new GoogleLoginProvider("329544152871-7tcfg9o4oltadqed8tqmv2ha06snrv42.apps.googleusercontent.com")
                }
              ],
              onError: err => console.log(err)
            } as SocialAuthServiceConfig
          }
    ],
    bootstrap: [AppComponent],
    schemas: [
        CUSTOM_ELEMENTS_SCHEMA  ],
    imports: [
        BrowserModule,
        AppRoutingModule,
        EmployerModule, UiModule, BrowserAnimationsModule,  ToastrModule.forRoot(), NgxSpinnerModule, HttpClientModule, JwtModule.forRoot({
            config: {
                tokenGetter: () => localStorage.getItem("accessToken"),
                allowedDomains : ["localhost:7138"]
                
            }
        }),
        SocialLoginModule,GoogleSigninButtonModule
    ]
})
export class AppModule { }
