import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { ContactService } from '../../../home/shared/services/contact.service';

@Component({
  selector: 'app-see-contact',
  templateUrl: './see-contact.component.html',
  styleUrls: ['./see-contact.component.css']
})
export class SeeContactComponent implements OnInit {

  id_contact: any;

  // thông tin liên hệ
  info_contact: any;
  constructor(private router: ActivatedRoute,
              private contactService: ContactService) { }
  
  ngOnInit() { 

    // lấy id liên hệ
    this.id_contact = this.router.snapshot.paramMap.get('id');

    // lấy thông tin liên hệ theo id
    this.contactService.getContact(this.id_contact)
    .then( res => { 
      this.info_contact = res;
      console.log(this.info_contact)
    })
  }

}
