import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: "searchCategoryNews"
})
export class SearchCategoryNewsPipe implements PipeTransform {
    
  transform(categories: any, searchText: string): any {
    if(searchText == null) return categories;
    
    return categories.filter(function(category){
        return category.name_category.toLowerCase().indexOf(searchText.toLowerCase()) > -1;
    })
  }
}