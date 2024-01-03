import { Injectable } from '@angular/core';
import { JwtHelperService } from '@auth0/angular-jwt';

@Injectable({
  providedIn: 'root'
})
export class AuthService {

  constructor(private jwtHelper : JwtHelperService) { }


  identityCheck() {
  const token: string = localStorage.getItem("accessToken"); // Local storage'dan tokeni alıyoruz. 
  let expired: boolean;
  try {
    expired = this.jwtHelper.isTokenExpired(token);
  } catch {
    expired = true; // Token geçersiz mi kontrolü.
  } 

  _isAuthenticated = token != null && !expired; // Token var mı ve geçerli mi kontrolü.
}
  get isAuthenticated(): boolean {
    return _isAuthenticated;
  }

  
}

export let _isAuthenticated: boolean;