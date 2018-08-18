import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'searchService'
})
export class SearchServicePipe implements PipeTransform {

  transform(listService: any, searchText: string): any {
    if(searchText == null) return listService;
    
    return listService.filter(function(service){
      // Tìm theo title hoặc tên người viết bài
      return (service.title_service.toLowerCase().indexOf(searchText.toLowerCase()) > -1 || 
      service.name_user.toLowerCase().indexOf(searchText.toLowerCase()) > -1);
    })
  }

}
