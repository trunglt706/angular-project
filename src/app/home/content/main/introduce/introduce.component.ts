import { Component, OnInit } from '@angular/core';
import { InfoWebsiteService } from '../../../shared/services/info-website.service';
@Component({
  selector: 'app-introduce',
  templateUrl: './introduce.component.html',
  styleUrls: ['./introduce.component.css']
})
export class IntroduceComponent implements OnInit {
  textIntroduce: String;
  constructor(private info: InfoWebsiteService) { }

  ngOnInit() {

    this.info.getInfoWebsite()
    .then( res => res.forEach(element => {
      this.textIntroduce = element.name == 'text_introduce' ? element.value : null ; }) 
    )
  }

}
