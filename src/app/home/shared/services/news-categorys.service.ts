import { Injectable } from '@angular/core';
import { Http } from '@angular/http';
import { AppSettings } from '../AppSettings';

import 'rxjs/add/operator/toPromise';

@Injectable()

export class NewsCategorysService{
    constructor(private http: Http){}


    // lấy danh sách tin tức thuộc loại id_category
    getListNewsOfCategory(id:Number){
        return new Promise( (resolve, reject) => {
            this.http.get(AppSettings.API_ENDPOINT + '/home/news-categorys/get-list-news.php?id='+ id)
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
    // lấy tất cả loại tin tức
    getListNewsCategorys(){
        return new Promise( (resolve, reject) => {
            this.http.get(AppSettings.API_ENDPOINT + '/home/news-categorys/get-list-newsCategorys.php')
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
    // lấy tin tức
    getNews(id_news:Number) {
        return new Promise( (resolve, reject) => {
            this.http.get(AppSettings.API_ENDPOINT + '/home/news-categorys/get-news.php?id=' + id_news)
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
            this.http.get(AppSettings.API_ENDPOINT + '/home/news-categorys/update-viewNews.php?id=' + id)
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