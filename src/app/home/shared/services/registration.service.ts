import { Injectable } from '@angular/core';
import { Http } from '@angular/http';
import { AppSettings } from '../AppSettings';
import 'rxjs/add/operator/toPromise';


@Injectable()
export class RegistrationService {

  constructor(private http: Http){}


    // lấy bác sĩ phù hợp
    getDoctor(condition){
        return new Promise( (resolve, reject) => {
            this.http.get(AppSettings.API_ENDPOINT + '/home/registration/get-doctor.php?condition='+ condition)
            .toPromise()
            .then(
                res => {
                    resolve(res.text());
                },
                err => {
                    reject();
                }
            )
        }) 
    }

    // gửi form đăng kí khám
    sendFormResgistration(formData){
        return this.http.post(AppSettings.API_ENDPOINT + '/home/registration/send-registration.php', formData)
        .toPromise()
            .then( res => res.json() )
            .catch(err => err)
    }
    

}
