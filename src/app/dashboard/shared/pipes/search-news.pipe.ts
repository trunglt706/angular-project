import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'searchNews'
})
export class SearchNewsPipe implements PipeTransform {

   transform(listNews: any, searchText: string): any {
    if(searchText == null) return listNews;
    
    return listNews.filter(function(news){
      // Tìm theo title hoặc tên người viết bài
      return (news.title_news.toLowerCase().indexOf(searchText.toLowerCase()) > -1 || 
        news.name_user.toLowerCase().indexOf(searchText.toLowerCase()) > -1 || 
        news.name_category.toLowerCase().indexOf(searchText.toLowerCase()) > -1);
    })
  }

}
