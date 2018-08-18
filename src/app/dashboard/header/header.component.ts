import { Component, OnInit } from '@angular/core';
import { AuthCustomerService } from '../../home/shared/gruads/auth-customer.service';
import { RegistrationService } from '../shared/services/registration.service';
import { ContactService } from '../../home/shared/services/contact.service';
// import { setInterval } from 'timers';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit {

  listRegistration: any;
  listContact: any;

  total_registration: number;
  total_contact: number;

  type_account;
  constructor(private authService: AuthCustomerService,
              private registrationService: RegistrationService,
              private contactService: ContactService) { }
  
      
  ngOnInit() {
    this.type_account = JSON.parse(localStorage.getItem('currentUser')).type_account;
  
    var getRegistrationNotSee = () => {
      // lấy danh sách đăng kí khám
      this.getRegistrationNotsee();
    }

    // lấy danh sách đăng kí khám
    this.getRegistrationNotsee();
    
    setInterval( getRegistrationNotSee , 5000 );

    // -------------------

    // tạo hàm lấy dữ liệu
    var getContactNotSee = () => {
      // lấy danh sách liên hệ
      this.getContactNotsee();
    }
    // lấy danh sách liên hệ
    this.getContactNotsee();
    setInterval( getContactNotSee , 5000 );

  }

  // đăng xuất
  logOut(){
    this.authService.logout();
  }

  // cập nhật trạng thái đã xem đăng kí khám
  seeRegistration(id) {
    
    // cập nhật trạng thái đã xem
    this.registrationService.updateStatusRegistration(id)
    .then( () => {

      // cập nhật lại
      // lấy danh sách đăng kí khám
      this.getRegistrationNotsee();
      
    });

    

  }

  // cập nhật trạng thái đã xem đăng kí khám ( tất cả )
  seeAllRegistration() {
    
    // cập nhật trạng thái đã xem
    this.registrationService.updateStatusAllRegistration()
    .then( () => {
      // cập nhật lại
      // lấy danh sách đăng kí khám
      this.registrationService.getListRegistraionNotsee()
      .then( res => {
        this.listRegistration = res;
        this.total_registration = this.listRegistration.length;
      })
    });
  }

  // lấy danh sách đăng kí khám chưa xem
  getRegistrationNotsee(){
    // lấy danh sách đăng kí khám
    this.registrationService.getListRegistraionNotsee()
    .then( res => {
      this.listRegistration = res;
      this.total_registration = this.listRegistration.length;
    })
  }

  // cập nhật trạng thái đã xem đăng kí khám ( tất cả )
  seeAllContact() {
    
    // cập nhật trạng thái đã xem
    this.contactService.updateStatusAllContact()
    .then( () => {
      // cập nhật lại
      // lấy danh sách liên hệ
      this.getContactNotsee();
    });
  }

  // cập nhật trạng thái liên hệ
  seeContact(id) {
    
    // cập nhật trạng thái đã xem
    this.contactService.updateStatusContact(id)
    .then( () => {

      // cập nhật lại
      // lấy danh sách liên hệ
    this.contactService.getListContactNotsee()
      
    });
  }

  // lấy danh sách liên hệ chưa xe,
  getContactNotsee(){
    // lấy danh sách liên hệ
    this.contactService.getListContactNotsee()
    .then( res => {
      this.listContact = res;
      this.total_contact = this.listContact.length;
    })
  }
}
