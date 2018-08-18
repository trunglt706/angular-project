import { Component, OnInit } from '@angular/core';
import { AccountService } from '../../shared/services/account.service';

@Component({
  selector: 'app-register-user',
  templateUrl: './register-user.component.html',
  styleUrls: ['./register-user.component.css']
})
export class RegisterUserComponent implements OnInit {
  existedAccount: boolean = false;
  alertSuccess: boolean = false;
  alertDanger: boolean = false;

  // type_account default
  type_account: String = '4';

  // hiển thị bác sĩ hay k
  show:String = '0';

  file_data: any;
  isType: boolean;
  textErroFile: String;
  linkDefaultImg:any;
  constructor(private account: AccountService) { }

  ngOnInit() {
  }

  // thay đổi dạng tài khoản
  changTypeAccount(type){
    // thay đổi hình ảnh ( khi click qua type_account khác thì bỏ hình ảnh img hiện tại )
    this.linkDefaultImg = null;
  }
  // kiểm tra hình ảnh đại diện
  onChange(event) {
    this.file_data = event.target.files[0];
    
    // kiểm tra định dạng hình ảnh
    if( !( this.file_data['type'] == "image/jpeg"|| this.file_data['type'] == "image/jpg" ||   this.file_data['type'] == "image/png" ) ) {
      this.isType = false;
      this.textErroFile = 'Hình ảnh không hợp lệ !!';
      this.file_data = null;

    } else {
      this.isType = true;

       // hiển thị ảnh thay đổi
       let ready = new FileReader();
      
       ready.onload = (e: any) => { this.linkDefaultImg = e.srcElement.result }
       ready.readAsDataURL(this.file_data);
    }
  }

  
  onSubmit(formRegister){
    if(formRegister.valid){
      // kiểm tra xem name có tồn tài không
      this.account.checkExistAccount(formRegister.value.account)
      .then( res => {
        if ( res == '1' ) {
          this.existedAccount = true;
        } else {
          // tạo form data lưu dữ liệu
          let formData = new FormData();
          formData.append('name', formRegister.value.name);
          formData.append('account', formRegister.value.account);
          formData.append('password', formRegister.value.password);
          formData.append('phone', formRegister.value.phone);
          formData.append('email', formRegister.value.email);
          formData.append('address', formRegister.value.address);
          formData.append('email', formRegister.value.email);
          formData.append('type_account', formRegister.value.user);
          formData.append('file', this.file_data);
          // thấy thông tin riêng theo từng loại tài khoản
          if(formRegister.value.user == '3') {
            
            formData.append('position', formRegister.value.position);
            formData.append('education', formRegister.value.education);
            formData.append('status_show', formRegister.value.show);
          }

          this.account.creatUser(formData)
          .then(res => console.log(res) )
          .then( () =>  {
            formRegister.resetForm();
            this.alertSuccess = true;
          })
          
        }
      })
      


    }
  }

}
