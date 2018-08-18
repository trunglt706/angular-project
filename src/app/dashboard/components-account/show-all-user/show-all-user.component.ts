import { Component, OnInit } from '@angular/core';
import { AccountService } from '../../shared/services/account.service';


@Component({
  selector: 'app-show-all-user',
  templateUrl: './show-all-user.component.html',
  styleUrls: ['./show-all-user.component.css']
})
export class ShowAllUserComponent implements OnInit {

  list_user;
  stt:Number = 0;
  constructor(private accountService: AccountService) { }
  
  //sorting
  key: string = 'type_account'; //set default
  reverse: boolean = false;
  sort(key){
    if( this.key == key ) {
      this.reverse = !this.reverse;
    } else {
      this.key = key;
    }
    
  }

  ngOnInit() { 

    // lấy danh sách tài khoản
    this.accountService.getAllUser()
    .then( res => this.list_user = res)
    .then( () => {
      this.list_user.forEach((element, i) => {
        
        // Thay đổi thành chữ để tìm kiếm
        switch(this.list_user[i].type_account) {
          case '1': this.list_user[i].type_account = 'Admin'; break;
          case '2': this.list_user[i].type_account = 'Tiếp tân'; break;
          case '3': this.list_user[i].type_account = 'Bác sĩ'; break;
          case '4': this.list_user[i].type_account = 'Khách'; break;
        }
      });
    }) // kết thúc lấy danh sách tài khoản

  }

  delete(id: Number){
    // Thông báo xóa
    if(confirm("Bạn thực sự muốn xóa !!")) {
      this.accountService.deleteUser(id)
      .then( () => { 
        
        // lấy danh sách tài khoản
        this.accountService.getAllUser()
        .then( res => this.list_user = res)
        .then( () => {
          this.list_user.forEach((element, i) => {
            
            // Thay đổi thành chữ để tìm kiếm
            switch(this.list_user[i].type_account) {
              case '1': this.list_user[i].type_account = 'Admin'; break;
              case '2': this.list_user[i].type_account = 'Tiếp tân'; break;
              case '3': this.list_user[i].type_account = 'Bác sĩ'; break;
              case '4': this.list_user[i].type_account = 'Khách'; break;
            }
          });
        }) // kết thúc lấy danh sách tài khoản

      });
    }
  }

}
