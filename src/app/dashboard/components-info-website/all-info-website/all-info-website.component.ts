import { Component, OnInit } from '@angular/core';
import { InfoWebsiteService } from '../../shared/services/info-website.service';
@Component({
  selector: 'app-all-info-website',
  templateUrl: './all-info-website.component.html',
  styleUrls: ['./all-info-website.component.css']
})
export class AllInfoWebsiteComponent implements OnInit {
  // data server
  name_website: String;
  link_facebook: String;
  link_youtube: String;
  email: String;
  address: String;
  phone_number: String;

  // file ảnh logo
  logo: any;
  linkDefaultImg: String;
  constructor(private infoWebsiteService: InfoWebsiteService) { }

  ngOnInit() {
    // lấy dữ liệu
    this.infoWebsiteService.getInfoWebsite()
    .then( (res) => {
      res.forEach(element => {
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
            this.linkDefaultImg = element.value;
            this.logo = element.value;
            break;
        }
         
      });
    })
  }
  // kiểm tra logo
  onChange(event) {
    this.logo = event.target.files[0];
    // kiểm tra định dạng logo
    if( !( this.logo['type'] == "image/jpeg"|| this.logo['type'] == "image/jpg" ||   this.logo['type'] == "image/png" ) ) {
      this.logo = null;

    } else {
       // hiển thị ảnh thay đổi
       let ready = new FileReader();
      
       ready.onload = (e: any) => { this.linkDefaultImg = e.srcElement.result }
       ready.readAsDataURL(this.logo);
    }
  }
  
  onSubmit(formInfo){
    console.log(formInfo)
      // nếu form đã điền đủ thông tin
      if( formInfo.valid ){
        // kiểm tra xem nếu logo = undefined thì cho nó rỗng
        this.logo = typeof this.logo == "undefined" ? "" : this.logo;

        const formData = new FormData();
        // data send to server
        formData.append('name_website', formInfo.value.name_website);
        formData.append('link_facebook', formInfo.value.facebook);
        formData.append('link_youtube', formInfo.value.youtube);
        formData.append('logo', this.logo);
        formData.append('email', formInfo.value.email);
        formData.append('address', formInfo.value.address);
        formData.append('phone_number', formInfo.value.phone_number);

        this.infoWebsiteService.insertInfoWebsite(formData)
        .then( res => {
          console.log(res)
          alert("Lưu thành công !!");
        });
        
      } else {
        console.log(formInfo, 'err');
      }
    
  }
}
