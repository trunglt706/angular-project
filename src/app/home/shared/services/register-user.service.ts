import { Injectable } from '@angular/core';
import { AppSettings } from '../AppSettings';
import {Http, Response, Headers, RequestOptions} from '@angular/http';
import { stringify } from 'querystring';
@Injectable()
export class RegisterUserService {

  constructor(private http: Http) { }

  sendFormRegister(formData) {
    let headers = new Headers({'Content-Type':'application/x-www-form-urlencoded'});
    let options = new RequestOptions({ headers: headers, method: "post"});

    return this.http.post(AppSettings.API_ENDPOINT + '/home/register/register-user.php', formData, options)
    .toPromise()
    .then(res => res.text())
  }

  // cập nhật thông tin 
  updateInfo(id,formData){
    let headers = new Headers({'Content-Type':'application/x-www-form-urlencoded'});
    let options = new RequestOptions({ headers: headers, method: "post"});

    return this.http.post(AppSettings.API_ENDPOINT + '/home/register/update-user.php', {id, formData}, options)
    .toPromise()
    .then(res => res.text())
  }

}
