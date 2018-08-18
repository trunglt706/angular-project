import { Injectable } from '@angular/core';
import { AppSettings } from '../../../home/shared/AppSettings';
import {Http, Response, Headers, RequestOptions} from '@angular/http';
import { stringify } from 'querystring';

@Injectable()
export class DoctorService {

  constructor(private http: Http) { }

  // lấy tất cả lịch khám
  getDoctors(){
    return this.http.get( AppSettings.API_ENDPOINT + '/dashboard/doctor/get-list-doctor.php' )
    .toPromise()
    .then(res => res.json())
  }

}
