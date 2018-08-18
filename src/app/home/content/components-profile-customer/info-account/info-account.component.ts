import { Component, OnInit } from '@angular/core';
import { AuthCustomerService } from '../../../shared/gruads/auth-customer.service';
import { AccountService } from '../../../../dashboard/shared/services/account.service';
import { RegisterUserService } from '../../../shared/services/register-user.service';
@Component({
  selector: 'app-info-account',
  templateUrl: './info-account.component.html',
  styleUrls: ['./info-account.component.css']
})
export class InfoAccountComponent implements OnInit {
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
