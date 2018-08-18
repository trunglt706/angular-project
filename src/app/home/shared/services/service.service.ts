import { Injectable } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Http } from '@angular/http';
import { AppSettings } from '../AppSettings';

import 'rxjs/add/operator/toPromise';

@Injectable()

export class ServiceService{
    constructor(private route: ActivatedRoute, private http: Http){}


    getListService(){

        return new Promise( (resolve, reject) => {
            this.http.get(AppSettings.API_ENDPOINT + '/home/service/get-list-service.php')
            .toPromise()
            .then(
                res => {
                    resolve(res.json());
                },
                err => {
                    reject();
                }
            )
        }) 
    }


    // lấy service theo id
    getService(id: Number){

        return new Promise( (resolve, reject) => {
            this.http.get(AppSettings.API_ENDPOINT + '/home/service/get-service.php?id=' + id)
            .toPromise()
            .then(
                res => {
                    resolve(res.json());
                },
                err => {
                    reject();
                }
            )
        }) 
    }

    // cập nhật lượt xem thêm 1
    updateView(id: Number)  {

        return new Promise( (resolve, reject) => {
            this.http.get(AppSettings.API_ENDPOINT + '/home/service/update-viewService.php?id=' + id)
            .toPromise()
            .then(
                res => {
                    resolve(res.json());
                },
                err => {
                    reject();
                }
            )
        }) 

    }

}