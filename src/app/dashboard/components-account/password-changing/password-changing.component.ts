import { Component, OnInit } from '@angular/core';
import { AuthCustomerService } from '../../../home/shared/gruads/auth-customer.service';

@Component({
  selector: 'app-password-changing',
  templateUrl: './password-changing.component.html',
  styleUrls: ['./password-changing.component.css']
})
export class PasswordChangingComponent implements OnInit {

  isPasswordCurrent:boolean = true;
  alertSuccess:boolean = false;
  // id tài khoản
  id_account:any;
  constructor(private auth: AuthCustomerService) { }

  ngOnInit() {
    this.id_account = JSON.parse(localStorage.getItem('currentUser')).id_account;
  }

  onSubmit(formData){
    
    if(formData.valid && ( formData.value.password == formData.value.comfirmPassword ) ) {
      
      // kiểm tra mật khẩu hiện tại đúng chưa
      this.auth.checkPassOfAccount(this.id_account, formData.value.password_current)
      .then( res => {

        // nếu nhập đúng mật khẩu hiện tại
        if( res == '1' ) {
          this.isPasswordCurrent = true;
          
          // cập nhật mật khẩu 
          this.auth.updatePass(this.id_account, formData.value.password)
          .then( () => {
            // thông báo thành công
            this.alertSuccess = true;
            formData.resetForm();
          })

        } else {
          this.isPasswordCurrent = false;
        }
      })

    }
  }

}
