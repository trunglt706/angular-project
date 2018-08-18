import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { NewsCategorysService } from '../../../../shared/services/news-categorys.service';

@Component({
  selector: 'app-news-category',
  templateUrl: './news-category.component.html',
  styleUrls: ['./news-category.component.css']
})
export class NewsCategoryComponent implements OnInit {
  id: Number;
  listsNews;
  constructor(private route: ActivatedRoute, private newsCategoryService: NewsCategorysService) { 
    // lấy tham số id
    route.params.subscribe( params => {
      this.id = params.id
    });
    // Lấy danh sách tin tức
    newsCategoryService.getListNewsOfCategory(this.id)
    .then(listsNews => {
      this.listsNews = listsNews;
    })
  }

  ngOnInit() {
    
  }

}
