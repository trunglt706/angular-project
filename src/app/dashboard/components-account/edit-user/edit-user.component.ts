import { Component, OnInit } from '@angular/core';
import { AccountService } from '../../shared/services/account.service';
import { ActivatedRoute } from '@angular/router';
@Component({
  selector: 'app-edit-user',
  templateUrl: './edit-user.component.html',
  styleUrls: ['./edit-user.component.css']
})
export class EditUserComponent implements OnInit {

  existedAccount: boolean = false;
  alertSuccess: boolean = false;
  alertDanger: boolean = false;

  // type_account default
  type_account: String;

  // hiển thị bác sĩ hay k
  show:String;

  file_data: any;
  isType: boolean;
  textErroFile: String;
  linkDefaultImg:any;

  // lưu id tài khoản lấy từ url
  id_account: any;
  // thông tin tài khoản
  info_account: any;
  // vị trí nếu là bác sĩ
  positionDefault: any;
  constructor(private account: AccountService, private router: ActivatedRoute) { }

  ngOnInit() {
    this.id_account = this.router.snapshot.paramMap.get('id');
    // lấy thông tin tài khoản
    this.account.getAccount(this.id_account)
    .then( res => {
      this.info_account = res[0];
      this.type_account = this.info_account.type_account;
      this.linkDefaultImg = this.info_account.image_user;
      this.positionDefault = this.info_account.id_position;
      this.show = this.info_account.status_show;


    })
  }
  // đặt lại mật khẩu
  resetPassword(id: Number) {
    
    if( confirm("Bạn thực sự muốn đặt lại mật khẩu cho người dùng này!!") ) {
      this.account.resetPassword(id)
      .then( res => {
        alert("Mật khẩu đã được thay đổi thành : 11111111");
      })
    }
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

        // tạo form data lưu dữ liệu
        let formData = new FormData();
        formData.append('id_account', this.id_account);
        formData.append('name', formRegister.value.name);
        formData.append('phone', formRegister.value.phone);
        formData.append('email', formRegister.value.email);
        formData.append('address', formRegister.value.address);
        formData.append('email', formRegister.value.email);
        formData.append('type_account', formRegister.value.user);
        formData.append('file', this.file_data);

        // lấy hình ảnh
        if( this.file_data ) {
          formData.append('file', this.file_data);
        } else {
          formData.append('file', this.linkDefaultImg);
        }

        // thấy thông tin riêng theo từng loại tài khoản
        if(formRegister.value.user == '3') {     
          formData.append('position', formRegister.value.position);
          formData.append('education', formRegister.value.education);
          formData.append('status_show', formRegister.value.show);
        }

        this.account.updateUser(formData)
        .then(res => console.log(res) )
        .then( () =>  {
          this.alertSuccess = true;
        })

      })
      


    }
  }

}
