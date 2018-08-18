import { Injectable } from '@angular/core';
import {Http, Response, Headers, RequestOptions} from '@angular/http';
import { AppSettings } from '../../../home/shared/AppSettings';
import 'rxjs/add/operator/toPromise';
@Injectable()
export class NewsService {

  constructor(private http: Http) { }
  // lấy tin tức theo id 
  get_news(id: Number){
    return this.http.get(AppSettings.API_ENDPOINT + '/dashboard/news/get-news.php?id_news=' + id)
    .toPromise()
      .then( res => res.json() )
      .catch(err => err)
  }
  // lấy danh sách tin tức
  get_list_newsAll(){
    return this.http.get(AppSettings.API_ENDPOINT + '/dashboard/news/get-list-news.php')
    .toPromise()
      .then( res => res.json() )
      .catch(err => err)
  }
  // insert tin tức  
  insert_news(formData){
    return this.http.post(AppSettings.API_ENDPOINT + '/dashboard/news/insert-news.php', formData)
    .toPromise()
      .then( res => res.json() )
      .catch(err => err)
  }
   // edit tin tức  
   edit_news(formData){
    return this.http.post(AppSettings.API_ENDPOINT + '/dashboard/news/edit-news.php', formData)
    .toPromise()
      .then( res => res.json() )
      .catch(err => err)
  }

  // Xóa tin tức
  delete(id_news: Number){
    let headers = new Headers({'Content-Type':'application/x-www-form-urlencoded'});
    let options = new RequestOptions({ headers: headers, method: "post"});
    return this.http.post(AppSettings.API_ENDPOINT + '/dashboard/news/delete-news.php', {id_news: id_news}, options)
          .toPromise()
          .then(res => res.json);
  }
}
