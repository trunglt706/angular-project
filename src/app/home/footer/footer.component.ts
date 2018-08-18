import { Component, OnInit } from '@angular/core';
import { InfoWebsiteService } from '../shared/services/info-website.service';
import { FBPageComponent, FacebookService, InitParams } from 'ngx-facebook';

@Component({
  selector: 'app-footer',
  templateUrl: './footer.component.html',
  styleUrls: ['./footer.component.css']
})
export class FooterComponent implements OnInit {


  // data server
  name_website: String;
  link_facebook: String;
  link_youtube: String;
  email: String;
  address: String;
  phone_number: String;
  logo: String;
  constructor(private infoWebsiteService: InfoWebsiteService,private fb: FacebookService) { 

    let initParams: InitParams = {
      appId: '1377717162334080',
      xfbml: true,
      version: 'v2.9'
    };
  
    fb.init(initParams);
  }

  ngOnInit() {
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
              break;

            case 'phone_number': 
              this.phone_number = element.value;
              break;
            
            case 'link_img': 
              this.logo = element.value;
              break;
          }
          
        });
      })


      

    
  }

}
