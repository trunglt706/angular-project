import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'searchContact'
})
export class SearchContactPipe implements PipeTransform {

  transform(listContact: any, searchText: string): any {
    if(searchText == null) return listContact;
    
    return listContact.filter(function(contact){
      
      return (contact.name_contact.toLowerCase().indexOf(searchText.toLowerCase()) > -1 || 
        contact.phone_contact.toLowerCase().indexOf(searchText.toLowerCase()) > -1 || 
        contact.time_contact.toLowerCase().indexOf(searchText.toLowerCase()) > -1 || 
        contact.email_contact.toLowerCase().indexOf(searchText.toLowerCase()) > -1 ||
        contact.title_contact.toLowerCase().indexOf(searchText.toLowerCase()) > -1 );
    })
  }

}
