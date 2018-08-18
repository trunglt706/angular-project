import { Component, OnInit } from '@angular/core';
import { NewsCategorysService } from '../../../shared/services/news-categorys.service';
import { News } from '../../../shared/models/news.model';

@Component({
  selector: 'app-news-categorys',
  templateUrl: './news-categorys.component.html',
  styleUrls: ['./news-categorys.component.css']
})
export class NewsCategorysComponent implements OnInit {
  
  list_newsCategorys;
  constructor(private newsCategorysService: NewsCategorysService) {

    this.newsCategorysService.getListNewsCategorys()
    .then( 
      res => { 
        // lấy danh sách loại tin tức
        this.list_newsCategorys = res;
      }
    )
  }
  
  ngOnInit() {
  }

}
