import { Component, OnInit } from '@angular/core';
import { ViewChild } from '@angular/core';
import { } from '@types/googlemaps';
import { ContactService } from '../../../shared/services/contact.service';
import { InfoWebsiteService } from '../../../shared/services/info-website.service';
@Component({
  selector: 'app-contact',
  templateUrl: './contact.component.html',
  styleUrls: ['./contact.component.css']
})
export class ContactComponent implements OnInit {
  // data server
  name_website: String;
  link_facebook: String;
  link_youtube: String;
  email: String;
  address: String;
  phone_number: String;
  logo: String;


  // thông báo khi gửi thành công
  alertSuccess: boolean = false;

  constructor(private contactService: ContactService,
              private infoWebsiteService: InfoWebsiteService) {}
  @ViewChild('gmap') gmapElement: any;
  map: google.maps.Map;

  latitude:number;
  longitude:number;

  ngOnInit() {
    const myLatlng = new google.maps.LatLng(10.0465737,105.7679048);
    var mapProp = {
      center: myLatlng,
      zoom: 16,
      mapTypeId: google.maps.MapTypeId.ROADMAP,
    };
    this.map = new google.maps.Map(this.gmapElement.nativeElement, mapProp);

    const Marker = new google.maps.Marker({
      position: myLatlng,
      title: '3T Shop'
    });
    Marker.setMap(this.map);

    // lấy thông tin website

    this.infoWebsiteService.getInfoWebsite()
    .then( res => { res.forEach(element => {
      let name: any = element.name;
      switch(name){
        case 'name_website': 
          this.name_website = element.value;
          break;

        case 'link_facebook': 
          this.link_facebook = element.value;
          break;

        case 'link_youtube': 
          this.link_youtube = element.value;
          break;

        case 'email': 
          this.email = element.value;
          break;

        case 'address': 
          this.address = element.value;
          console.log(this.address);
          break;

        case 'phone_number': 
          this.phone_number = element.value;
          break;
        
        case 'link_img': 
          this.logo = element.value;
          break;
      }
       
    })
    
   }) //
  }

  setMapType(mapTypeId: string) {
    this.map.setMapTypeId(mapTypeId)    
  }

  setCenter(e:any){
    e.preventDefault();
    this.map.setCenter(new google.maps.LatLng(this.latitude, this.longitude));
  }



  // Gửi liên hệ
  onSubmit(formData) {
    
    if(formData.valid){

      this.contactService.sendFormContact(formData.value)
      .then( (res) => {
        this.alertSuccess = true;
        formData.resetForm();
      })
    }
  }

}

