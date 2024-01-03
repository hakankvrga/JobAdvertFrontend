import { HttpEvent, HttpHandler, HttpInterceptor, HttpRequest, HttpStatusCode } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable, catchError, of } from 'rxjs';
import { CustomToastrService, ToastrMessageType, ToastrPosition } from '../ui/custom-toastr.service';
import { UserAuthService } from './models/user-auth.service';

@Injectable({
  providedIn: 'root'
})
export class HttpErrorHandlerInterceptorService implements HttpInterceptor {

  constructor(private toastrService: CustomToastrService, private userAuthService: UserAuthService) { }
  intercept(req: HttpRequest<any>, next: HttpHandler): Observable<HttpEvent<any>> {

    return next.handle(req).pipe(catchError(error => {
      switch (error.status) { // Hata durumlarına göre mesaj verildi.
        case HttpStatusCode.Unauthorized: // Yetkisiz erişim
          this.toastrService.message("Bu işlemi yapmaya yetkiniz bulunmamaktadır.", "Yetkisiz işlem", {
            messageType: ToastrMessageType.Warning,
            position: ToastrPosition.BottomFullWidth
          });
          this.userAuthService.refreshTokenLogin(localStorage.getItem("refreshToken")).then(data => {});
          break;
        case HttpStatusCode.InternalServerError: // Sunucu hatası
          this.toastrService.message("Sunucuya erişilemiyor", "Sunucu hatası", {
            
            messageType: ToastrMessageType.Error,
            position: ToastrPosition.BottomFullWidth
          });
          break;
        case HttpStatusCode.BadRequest: // Geçersiz istek
          this.toastrService.message("Geçersiz istek yapıldı", "Geçersiz istek", {
            
            messageType: ToastrMessageType.Error,
            position: ToastrPosition.BottomFullWidth
          });
          break;
        case HttpStatusCode.NotFound: // Kaynak bulunamadı
          this.toastrService.message("İstenilen kaynak bulunamadı.", "Hata", {
            
            messageType: ToastrMessageType.Error,
            position: ToastrPosition.BottomFullWidth
          });
          break;
        default: // Diğer hatalar
          this.toastrService.message("Bir hata oluştu. Lütfen daha sonra tekrar deneyiniz.", "Hata", {
            
            messageType: ToastrMessageType.Error,
            position: ToastrPosition.BottomFullWidth
          });
          break;
      }


      return of(error);
    }));
  }
}
