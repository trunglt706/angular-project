import { Component, OnInit } from '@angular/core';
import { AuthCustomerService } from '../../home/shared/gruads/auth-customer.service';
@Component({
  selector: 'app-main',
  templateUrl: './main.component.html',
  styleUrls: ['./main.component.css']
})
export class MainComponent implements OnInit {

  // thông tin account người dùng đăng nhập
  id_account: any;
  name_user: any;
  image_user: any;
  type_user: any;

  infoUser: any;

  constructor(private authService: AuthCustomerService) { }

  ngOnInit() {
    this.infoUser = JSON.parse(localStorage.getItem('currentUser'));
    this.id_account = this.infoUser.id_account;
    this.name_user = this.infoUser.name_user;
    this.image_user = this.infoUser.image_user;
    this.type_user = this.infoUser.type_account;
  }

}
