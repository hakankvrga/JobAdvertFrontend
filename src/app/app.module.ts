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
import { DeleteDirective } from './directives/employer/delete.directive';



@NgModule({
    declarations: [
        AppComponent,
        
        
        
    ],
    providers: [
        {provide: "baseUrl", useValue: "https://localhost:7138/api", multi: true}
    ],
    bootstrap: [AppComponent],
    imports: [
        BrowserModule,
        AppRoutingModule,
        EmployerModule, UiModule, BrowserAnimationsModule,  ToastrModule.forRoot(), NgxSpinnerModule, HttpClientModule
    ]
})
export class AppModule { }
