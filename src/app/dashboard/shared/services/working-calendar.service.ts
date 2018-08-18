import { Injectable } from '@angular/core';
import { AppSettings } from '../../../home/shared/AppSettings';
import {Http, Response, Headers, RequestOptions} from '@angular/http';
import { stringify } from 'querystring';

@Injectable()
export class WorkingCalendarService {

  constructor(private http: Http) { }

  updateWorkingCalendarDoctor(id, formData) {

    let headers = new Headers({'Content-Type':'application/x-www-form-urlencoded'});
    let options = new RequestOptions({ headers: headers, method: "post"});

    return this.http.post(AppSettings.API_ENDPOINT + '/dashboard/working-calendar/update-working-calendar-doctor.php', {id, formData}, options)
    .toPromise()
    .then(res => res.text())
  }

  // lấy lịch khám của 1 bác sĩ theo id
  getWorkingCalendarDoctor(id){
    return this.http.get( AppSettings.API_ENDPOINT + '/dashboard/working-calendar/get-working-calendar-doctor.php?id=' + id )
    .toPromise()
    .then(res => res.json())
  }

  // lấy tất cả lịch khám
  getWorkingCalendarDoctors(){
    return this.http.get( AppSettings.API_ENDPOINT + '/dashboard/working-calendar/get-working-calendar-doctors.php' )
    .toPromise()
    .then(res => res.json())
  }

}
