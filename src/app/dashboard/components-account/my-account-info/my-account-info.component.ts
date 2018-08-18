import { Component, OnInit } from '@angular/core';
import { AuthCustomerService } from '../../../home/shared/gruads/auth-customer.service';
import { AccountService } from '../../shared/services/account.service';
import { RegisterUserService } from '../../../home/shared/services/register-user.service';
@Component({
  selector: 'app-my-account-info',
  templateUrl: './my-account-info.component.html',
  styleUrls: ['./my-account-info.component.css']
})
export class MyAccountInfoComponent implements OnInit {

  uid:any;
  infoCustommer: any;
  constructor(
    private auth: AuthCustomerService,
    private account: AccountService,
    private registerService: RegisterUserService) { }

  ngOnInit() {
    this.uid = JSON.parse(localStorage.getItem('currentUser')).id_account;
    // lấy thông tin tài khoản
    this.account.getAccount(this.uid)
    .then(res => this.infoCustommer = res);
  }

  onSubmit(formRegister){
    if(formRegister.valid){
      this.registerService.updateInfo( this.uid, formRegister.value )
      .then(res => alert("Cập nhật thành công !!") );
    }
  }

}
