import { Injectable } from '@angular/core';
import { AppSettings } from '../../../home/shared/AppSettings';
import {Http, Response, Headers, RequestOptions} from '@angular/http';
import { stringify } from 'querystring';
@Injectable()
export class AccountService {

  constructor(private http: Http) { }
  getAllUser(){
    return this.http.get(AppSettings.API_ENDPOINT + '/dashboard/account/get-list-account.php')
    .toPromise()
    .then(res => res.json())
  }

  creatUser(formData){
    return this.http.post(AppSettings.API_ENDPOINT + '/dashboard/account/create-account.php', formData)
    .toPromise()
    .then(res => res.text())
  }

  checkExistAccount(name: String) {
    return this.http.get(AppSettings.API_ENDPOINT + '/dashboard/account/check-exist-account.php?name=' + name)
    .toPromise()
    .then(res => res.text())
  }

  deleteUser(id: Number) {
    return this.http.get(AppSettings.API_ENDPOINT + '/dashboard/account/delete-account.php?id=' + id)
    .toPromise()
    .then(res => res.text())
  }

  getAccount(id: any) {
    return this.http.get(AppSettings.API_ENDPOINT + '/dashboard/account/get-account.php?id=' + id)
    .toPromise()
    .then(res => res.json())
  }

  updateUser(formData){
    return this.http.post(AppSettings.API_ENDPOINT + '/dashboard/account/update-account.php', formData)
    .toPromise()
    .then(res => res.text())
  }

  // đặt lại mật khẩu
  resetPassword(id: Number) {
    return this.http.get(AppSettings.API_ENDPOINT + '/dashboard/account/reset-account.php?id=' + id)
    .toPromise()
    .then(res => res.text())
  }
}
