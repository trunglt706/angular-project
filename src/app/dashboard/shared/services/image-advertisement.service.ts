import { Injectable } from '@angular/core';
import { Http } from '@angular/http';
import { AppSettings } from '../../../home/shared/AppSettings';
import 'rxjs/add/operator/toPromise';

@Injectable()
export class ImageAdvertisementService {

  constructor(private http: Http) { }


  // insert slider
  add_slider(formData){
    return this.http.post(AppSettings.API_ENDPOINT + '/dashboard/image-advertisement/insert-slider.php', formData)
    .toPromise()
      .then( res => res.json() )
      .catch(err => err)
  }

  // get slider  
  get_slider(){
    return this.http.get(AppSettings.API_ENDPOINT + '/dashboard/image-advertisement/get-slider.php')
    .toPromise()
      .then( res => res.json() )
      .catch(err => err)
  }


   // insert advertisement
   add_advertisement(formData){
    return this.http.post(AppSettings.API_ENDPOINT + '/dashboard/image-advertisement/insert-advertisement.php', formData)
    .toPromise()
      .then( res => res.json() )
      .catch(err => err)
  }

  // get advertisement 
  get_advertisement(){
    return this.http.get(AppSettings.API_ENDPOINT + '/dashboard/image-advertisement/get-advertisement.php')
    .toPromise()
      .then( res => res.json() )
      .catch(err => err)
  }
}
