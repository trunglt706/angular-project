import { Component, OnInit } from '@angular/core';
import { OrderPipe } from 'ngx-order-pipe';
import { RegistrationService } from '../../shared/services/registration.service';
@Component({
  selector: 'app-show-registration',
  templateUrl: './show-registration.component.html',
  styleUrls: ['./show-registration.component.css']
})
export class ShowRegistrationComponent implements OnInit {

  // trang hiện tại
  p: number = 1;
  perpages_number = 10;

  list_registration;
  stt:Number = 0;

  //sorting
  key: string = 'date_customer'; //set default
  reverse: boolean = true;
  sort(key){
    if( this.key == key ) {
      this.reverse = !this.reverse;
    } else {
      this.key = key;
    }
    
  }

  constructor(private orderPipe: OrderPipe,
              private registrationService: RegistrationService) { }
  
  ngOnInit() { 


    // lấy danh sách đặt khám
    this.registrationService.getListRegisraion()
    .then( res => {
      this.list_registration = res
    })
  }


  delete(id: Number){
    // Thông báo xóa
    if(confirm("Bạn thực sự muốn xóa !!")) {
      this.registrationService.deleteRegistration(id)
      .then( () => { 
        this.registrationService.getListRegisraion()
      .then( res => this.list_registration = res)
      });
    }
  }
}
