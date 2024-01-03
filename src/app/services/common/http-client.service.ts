import { Inject, Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs';
@Injectable({
  providedIn: 'root'
})
export class HttpClientService { // http istekleri yapabilmek için oluşturulan  servis

  constructor(private httpClient: HttpClient, @Inject("baseUrl") private baseUrl: string) { }

private url(requestParameter: Partial<RequestParameters>): string{ // Url formatının belirtilmesi 
  return `${requestParameter.baseUrl ? requestParameter.baseUrl : this.baseUrl}/${requestParameter.controller}${requestParameter.action ? `/${requestParameter.action}` : ""}`;

}
 get<T>(requestParameter: Partial<RequestParameters>, id?: string ):// get isteği için oluşturulan servis
 
 Observable<T>{ 
  let url: string= "";
  if(requestParameter.fullEndPoint)
    url=requestParameter.fullEndPoint;
  else
    url= `${this.url(requestParameter)}${id ? `/${id}`:""}${requestParameter.queryString ? `?${requestParameter.queryString}`: ""}`;

   return this.httpClient.get<T>(url, {headers: requestParameter.headers})
 }

 post<T>(requestParameter: Partial<RequestParameters>, body:Partial<T>): //post isteği için oluşturulan servis
 Observable<T>{
  let url: string= "";
  if(requestParameter.fullEndPoint)
    url= requestParameter.fullEndPoint;
  else
  url= `${this.url(requestParameter)}${requestParameter.queryString ? `?${requestParameter.queryString}`: ""}`;

  return this.httpClient.post<T>(url, body, {headers: requestParameter.headers})
 }

 put<T>(requestParameter: Partial<RequestParameters>, body:Partial<T>): //put isteği için oluşturulan servis
  Observable<T>{
  let url: string= "";
  if(requestParameter.fullEndPoint)
    url= requestParameter.fullEndPoint;
  else
  url= `${this.url(requestParameter)}${requestParameter.queryString ? `?${requestParameter.queryString}`: ""}`;
  return this.httpClient.put<T>(url, body,{headers: requestParameter.headers})
 }

 delete<T>(requestParameter: Partial<RequestParameters>, id:string): //delete isteği için oluşturulan servis
 Observable<T>{
  let url: string= "";
  if(requestParameter.fullEndPoint)
    url= requestParameter.fullEndPoint;
  else
  url= `${this.url(requestParameter)}/${id}${requestParameter.queryString ? `?${requestParameter.queryString}`: ""}`;
return this.httpClient.delete<T>(url,{headers: requestParameter.headers})
 }
}
export class RequestParameters{ //istenilen parametrelerin class halinde tutulması
  controller?: string;
  action?: string;
  queryString?: string;
  headers?: HttpHeaders;
  baseUrl?: string;
  fullEndPoint?: string;
}