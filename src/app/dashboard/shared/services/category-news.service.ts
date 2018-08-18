import { Injectable } from '@angular/core';
import { Http,RequestOptions,Headers } from '@angular/http';
import { AppSettings } from '../../../home/shared/AppSettings';
import 'rxjs/add/operator/toPromise';

@Injectable()
export class CategoryNewsService {

  constructor(private http: Http) { }

  getAllCategory(){
    return this.http.get(AppSettings.API_ENDPOINT + '/dashboard/category-news/get-list-categoryNews.php')
    .toPromise()
    .then(res => res.json())
  }
  addCategory(formData: Object){
    let headers = new Headers({'Content-Type':'application/x-www-form-urlencoded'});
    let options = new RequestOptions({ headers: headers, method: "post"});
    return this.http.post(AppSettings.API_ENDPOINT + '/dashboard/category-news/insert-categoryNews.php', formData, options)
          .toPromise()
          .then(res=> res.json());
  }

  delete(id_category: Number){
    let headers = new Headers({'Content-Type':'application/x-www-form-urlencoded'});
    let options = new RequestOptions({ headers: headers, method: "post"});
    return this.http.post(AppSettings.API_ENDPOINT + '/dashboard/category-news/delete-categoryNews.php', {id_category: id_category}, options)
          .toPromise()
          .then(res => res.json);
  }

  edit(id_category: Number, name_category: String){
    let headers = new Headers({'Content-Type':'application/x-www-form-urlencoded'});
    let options = new RequestOptions({ headers: headers, method: "post"});
    return this.http.post(AppSettings.API_ENDPOINT + '/dashboard/category-news/edit-categoryNews.php', {id_category: id_category, name_category: name_category}, options)
          .toPromise()
          .then(res => res.json);
  }

}
