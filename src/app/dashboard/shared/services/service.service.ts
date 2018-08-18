import { Injectable } from '@angular/core';
import {Http, Response, Headers, RequestOptions} from '@angular/http';
import { AppSettings } from '../../../home/shared/AppSettings';
import 'rxjs/add/operator/toPromise';

@Injectable()
export class ServiceService {

  constructor(private http: Http) { }
  // lấy tin tức theo id 
  get_service(id: Number){
    return this.http.get(AppSettings.API_ENDPOINT + '/dashboard/service/get-service.php?id_service=' + id)
    .toPromise()
      .then( res => res.json() )
      .catch(err => err)
  }
  // lấy danh sách dịch vụ
  get_list_serviceAll(){
    return this.http.get(AppSettings.API_ENDPOINT + '/dashboard/service/get-list-service.php')
    .toPromise()
      .then( res => res.json() )
      .catch(err => err)
  }
  // edit dịch vụ
  edit_service(formData){
    return this.http.post(AppSettings.API_ENDPOINT + '/dashboard/service/edit-service.php', formData)
    .toPromise()
      .then( res => res.json() )
      .catch(err => err)
  }

  // insert dịch vụ
  insert_service(formData){
    return this.http.post(AppSettings.API_ENDPOINT + '/dashboard/service/insert-service.php', formData)
    .toPromise()
      .then( res => res.json() )
      .catch(err => err)
  }
  // Xóa dịch vụ
  delete(id_service: Number){
    let headers = new Headers({'Content-Type':'application/x-www-form-urlencoded'});
    let options = new RequestOptions({ headers: headers, method: "post"});
    return this.http.post(AppSettings.API_ENDPOINT + '/dashboard/service/delete-service.php', {id_service: id_service}, options)
          .toPromise()
          .then(res => res.json);
  }

}
