import { Component, OnInit } from '@angular/core';
import { OrderPipe } from 'ngx-order-pipe';
import { ContactService }  from '../../../home/shared/services/contact.service';
@Component({
  selector: 'app-show-contact',
  templateUrl: './show-contact.component.html',
  styleUrls: ['./show-contact.component.css']
})
export class ShowContactComponent implements OnInit {

  // trang hiện tại
  p: number = 1;
  perpages_number = 10;

  list_contact;
  stt:Number = 0;

  //sorting
  key: string = 'time_contact'; //set default
  reverse: boolean = true;
  sort(key){
    if( this.key == key ) {
      this.reverse = !this.reverse;
    } else {
      this.key = key;
    }
    
  }

  constructor(private orderPipe: OrderPipe,
              private contactService: ContactService) { }
  
  ngOnInit() { 


    // lấy danh sách liên hệ
    this.contactService.getListContact()
    .then( res => {
      this.list_contact = res;
    })
  }


  delete(id: Number){
    // Thông báo xóa
    if(confirm("Bạn thực sự muốn xóa !!")) {
      this.contactService.deleteContact(id)
      .then( () => { 
        this.contactService.getListContact()
      .then( (res) => this.list_contact = res )
      });
    }
  }

}
