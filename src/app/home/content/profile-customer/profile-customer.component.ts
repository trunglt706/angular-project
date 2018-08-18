import { Component, OnInit } from '@angular/core';
import { AuthCustomerService } from '../../shared/gruads/auth-customer.service';

@Component({
  selector: 'app-profile-customer',
  templateUrl: './profile-customer.component.html',
  styleUrls: ['./profile-customer.component.css']
})
export class ProfileCustomerComponent implements OnInit {

  constructor(private auth: AuthCustomerService) { }

  ngOnInit() {
  }

  logOut(){
    this.auth.logout();
  }

}
