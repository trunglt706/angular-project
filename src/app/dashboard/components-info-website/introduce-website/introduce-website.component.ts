import { Component, OnInit } from '@angular/core';
import { InfoWebsiteService } from '../../shared/services/info-website.service';

@Component({
  selector: 'app-introduce-website',
  templateUrl: './introduce-website.component.html',
  styleUrls: ['./introduce-website.component.css']
})
export class IntroduceWebsiteComponent implements OnInit {
  textIntroduce;
  constructor(private infoWebsiteService: InfoWebsiteService) { }

  ngOnInit() {
    this.infoWebsiteService.getInfoWebsite()
    .then( (res) => {
      res.forEach(element => {
        let name: any = element.name;

        switch(name){
          case 'text_introduce': 
            this.textIntroduce = element.value;
        }
         
      });
    })
  }
  // Tùy chỉnh Editor
  options: Object = {
    placeholderText: 'Nhập nội dung ở đây !!',
    height: 400,
    imageAllowedTypes: ['jpeg', 'jpg', 'png']
  }

  onSubmit(formIntroduce){
    this.infoWebsiteService.insertIntroduce(formIntroduce.value.textIntroduce)
    .then( res => console.log(res) );
  }

}
