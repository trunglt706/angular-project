import { Injectable } from '@angular/core';
import { Http } from '@angular/http';
import { AppSettings } from '../AppSettings';
import { Observable } from 'rxjs/Observable';


import 'rxjs/add/operator/catch';
import 'rxjs/add/operator/map';
import 'rxjs/add/operator/toPromise';
@Injectable()

export class SliderService{
    
    constructor(private http: Http){
       
    }

    getSlider(){
        return(this.http.get(AppSettings.API_ENDPOINT + '/home/slider/getSlider.php')
            .toPromise()
                .then( res => res.json() )
                .catch(err => err)
        )
    }
}
