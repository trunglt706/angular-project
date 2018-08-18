import { Injectable } from '@angular/core';
import { AppSettings } from '../AppSettings';
import {Http, Response, Headers, RequestOptions} from '@angular/http';
import { stringify } from 'querystring';

@Injectable()
export class ContactService {

  constructor(private http: Http) { }

  sendFormContact(formData) {
    let headers = new Headers({'Content-Type':'application/x-www-form-urlencoded'});
    let options = new RequestOptions({ headers: headers, method: "post"});

    return this.http.post(AppSettings.API_ENDPOINT + '/home/contact/send-contact.php', formData, options)
    .toPromise()
    .then(res => res.text())
  }

  getListContact(){
    return this.http.get(AppSettings.API_ENDPOINT + '/home/contact/get-list-contact.php')
    .toPromise()
    .then(res => res.json())
  }

  // xóa liên hệ
  deleteContact(id) {
    return this.http.get(AppSettings.API_ENDPOINT + '/home/contact/delete-contact.php?id=' + id)
    .toPromise()
    .then(res => res.text())
  }

  // lấy danh sách liên hệ chưa xem 
  getListContactNotsee(){
    return this.http.get(AppSettings.API_ENDPOINT + '/home/contact/get-list-contact-notsee.php')
    .toPromise()
    .then(res => res.json())
  }

  updateStatusContact(id) {
    return this.http.get(AppSettings.API_ENDPOINT + '/home/contact/update-status-contact.php?id=' + id)
    .toPromise()
    .then(res => res.text())
  }


  getContact(id){
    return this.http.get(AppSettings.API_ENDPOINT + '/home/contact/get-contact.php?id=' + id)
    .toPromise()
    .then(res => res.json())
  }

  updateStatusAllContact(){
    return this.http.get(AppSettings.API_ENDPOINT + '/home/contact/update-status-all-contact.php')
    .toPromise()
    .then(res => res.text())
  }


}
