import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { NewsCategorysService } from '../../../../shared/services/news-categorys.service';
import { EscapeHtmlPipe } from '../../../../shared/pipes/keep-html.pipe';

@Component({
  selector: 'app-news',
  templateUrl: './news.component.html',
  styleUrls: ['./news.component.css']
})
export class NewsComponent implements OnInit {
  id: Number;
  news;
  title: String;
  constructor(private route: ActivatedRoute, private newsCategoryService: NewsCategorysService) {}

  ngOnInit() {

    // lấy tham số id
    this.route.params.subscribe( params => {
      this.id = params.id;
    });
    
    this.newsCategoryService.updateView(this.id)
    .then( () => {
      // Lấy danh sách tin tức
      this.newsCategoryService.getNews(this.id)
      .then(news => {
        this.news = news;
      })
    })
    
  }

}
