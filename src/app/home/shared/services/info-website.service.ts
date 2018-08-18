import { Injectable } from '@angular/core';
import { Http,RequestOptions,Headers } from '@angular/http';
import { AppSettings } from '../AppSettings';
import 'rxjs/add/operator/toPromise';

@Injectable()
export class InfoWebsiteService {

  constructor(private http: Http) { }


  getInfoWebsite(){
    return this.http.get(AppSettings.API_ENDPOINT + '/dashboard/info-website/get-info.php')
    .toPromise()
      .then( res => res.json() )
      .catch(err => err)
  }

}
