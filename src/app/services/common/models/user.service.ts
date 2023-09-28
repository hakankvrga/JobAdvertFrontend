import { Injectable } from '@angular/core';
import { HttpClientService } from '../http-client.service';

import { Create_User } from 'src/app/contracts/users/create_user';
import { Observable, firstValueFrom } from 'rxjs';
import { User } from 'src/app/entities/user';


import { CustomToastrService, ToastrMessageType, ToastrPosition } from '../../ui/custom-toastr.service';


@Injectable({
  providedIn: 'root'
})
export class UserService {

  constructor(private httpClientService: HttpClientService, private toastrService: CustomToastrService) { }


  async create(user: User): Promise<Create_User> {
    const observable: Observable<Create_User | User> = this.httpClientService.post<Create_User | User>({
      controller: "users"
    }, user);

    return await firstValueFrom(observable) as Create_User;
  }


  async createNormalUser(user: User): Promise<Create_User> {
    const observable: Observable<Create_User | User> = this.httpClientService.post<Create_User | User>({
      controller: "users",
      action:"CreateNormalUser"
    }, user);

    return await firstValueFrom(observable) as Create_User;
  }


}
