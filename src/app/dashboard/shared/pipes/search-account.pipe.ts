import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'searchAccount'
})
export class SearchAccountPipe implements PipeTransform {

  transform(listAccount: any, searchText: string): any {
    if(searchText == null) return listAccount;
    
    return listAccount.filter(function(account){
      // Tìm theo title hoặc tên người viết bài
      return (account.name_position.toLowerCase().indexOf(searchText.toLowerCase()) > -1 || 
        account.name_user.toLowerCase().indexOf(searchText.toLowerCase()) > -1 || 
        account.name_user.toLowerCase().indexOf(searchText.toLowerCase()) > -1 || 
        account.type_account.toLowerCase().indexOf(searchText.toLowerCase()) > -1 ||
        account.phone_user.toLowerCase().indexOf(searchText.toLowerCase()) > -1 ||
        account.email_user.toLowerCase().indexOf(searchText.toLowerCase()) > -1 ||
        account.name_account.toLowerCase().indexOf(searchText.toLowerCase()) > -1);
    })
  }

}
