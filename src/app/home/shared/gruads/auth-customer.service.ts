import { Injectable } from '@angular/core';
import { AuthInfo } from './auth-info';
import { Http, Response, Headers, RequestOptions } from '@angular/http';
import { AppSettings } from '../AppSettings';
import { Observable, Subject, BehaviorSubject } from "rxjs/Rx";
import { Router } from '@angular/router';
import 'rxjs/add/operator/toPromise';

@Injectable()
export class AuthCustomerService {

  // static UNKNOWN_USER = new AuthInfo(null, null, null, null);

  // authInfo$: BehaviorSubject<AuthInfo> = new BehaviorSubject<AuthInfo>(AuthCustomerService.UNKNOWN_USER);
  isLogin$: BehaviorSubject<AuthInfo> = new BehaviorSubject<AuthInfo>(new AuthInfo(false));
  constructor(
            private http: Http,
            private router: Router) { }


  login(account: String, passwd: String){
    let headers = new Headers({'Content-Type':'application/x-www-form-urlencoded'});
    let options = new RequestOptions({ headers: headers, method: "post"});
    
    // const subject = new Subject<any>();
    return this.http.post(AppSettings.API_ENDPOINT + '/home/login/login.php', {'account': account, 'passwd': passwd}, options)
    .toPromise()
    .then(res => res.json())
    .then( resJson => {
      // const authInfo = new AuthInfo(resJson.id_account, resJson.name_user, resJson.image_user, resJson.type_account);
      // this.authInfo$.next(authInfo);
      // 
      // tên biến hơi sai sai :D
      
      if( resJson != false ) {     
        console.log(resJson);
        localStorage.setItem('currentUser', JSON.stringify(resJson));
        const authInfo = new AuthInfo(true);
        this.isLogin$.next(authInfo);
      }
      
      
      return resJson;
    })
    
  }

  // đăng xuất 
  logout(){
    // const authInfo = new AuthInfo(null, null, null, null);
    // this.authInfo$.next(authInfo);
    // 
    const authInfo = new AuthInfo(null);
    this.isLogin$.next(authInfo);
    localStorage.removeItem('currentUser');
    this.router.navigate(['/login']);
  }

  // kiểm tra mật khẩu hiện tại khi người dùng muốn đổi mật khẩu
  checkPassOfAccount(id, password) {
    let headers = new Headers({'Content-Type':'application/x-www-form-urlencoded'});
    let options = new RequestOptions({ headers: headers, method: "post"});

    return this.http.post(AppSettings.API_ENDPOINT + '/home/register/check-password-user.php', {id, password}, options)
    .toPromise()
    .then(res => res.text())
  }

  // cập nhật mật khẩu của người dùng
  updatePass(id, password) {
    let headers = new Headers({'Content-Type':'application/x-www-form-urlencoded'});
    let options = new RequestOptions({ headers: headers, method: "post"});

    return this.http.post(AppSettings.API_ENDPOINT + '/home/register/update-password-user.php', {id, password}, options)
    .toPromise()
    .then(res => res.text())
  }

}
