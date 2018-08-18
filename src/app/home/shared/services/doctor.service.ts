import { Injectable } from '@angular/core';
import { Http,RequestOptions,Headers } from '@angular/http';
import { AppSettings } from '../AppSettings';
import 'rxjs/add/operator/toPromise';

@Injectable()
export class DoctorService {

  constructor(private http: Http) { }

  getListDoctors(){
    return this.http.get(AppSettings.API_ENDPOINT + '/home/doctor/get-list-doctors.php')
    .toPromise()
      .then( res => res.json() )
      .catch(err => err)
  }

}
