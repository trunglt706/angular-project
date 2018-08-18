import { Injectable } from '@angular/core';
import { Http,RequestOptions,Headers } from '@angular/http';
import { AppSettings } from '../../../home/shared/AppSettings';
import 'rxjs/add/operator/toPromise';

@Injectable()
export class InfoWebsiteService {

  constructor(private http: Http) { }
  // insert thông tin 
  insertInfoWebsite(formData){
    return this.http.post(AppSettings.API_ENDPOINT + '/dashboard/info-website/insert-info.php', formData)
    .toPromise()
      .then( res => res.text() )
      .catch(err => err)
  }

  getInfoWebsite(){
    return this.http.get(AppSettings.API_ENDPOINT + '/dashboard/info-website/get-info.php')
    .toPromise()
      .then( res => res.json() )
      .catch(err => err)
  }

  // insert nội dung giới thiệu 
  insertIntroduce(textIntroduce: String){
    let headers = new Headers({'Content-Type':'application/x-www-form-urlencoded'});
    let options = new RequestOptions({ headers: headers, method: "post"});
    return this.http.post(AppSettings.API_ENDPOINT + '/dashboard/info-website/insert-introduce.php', {textIntroduce: textIntroduce}, options)
    .toPromise()
      .then( res => res.json() )
      .catch(err => err)
  }
}
