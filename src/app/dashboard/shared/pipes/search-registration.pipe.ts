import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'searchRegistration'
})
export class SearchRegistrationPipe implements PipeTransform {

  transform(listRegistration: any, searchText: string): any {
    if(searchText == null) return listRegistration;
    
    return listRegistration.filter(function(registration){

      return (registration.name_customer.toLowerCase().indexOf(searchText.toLowerCase()) > -1 || 
      registration.phone_customer.toLowerCase().indexOf(searchText.toLowerCase()) > -1 || 
      registration.email_customer.toLowerCase().indexOf(searchText.toLowerCase()) > -1) ||
      registration.address_customer.toLowerCase().indexOf(searchText.toLowerCase()) > -1 || 
      registration.phone_customer.toLowerCase().indexOf(searchText.toLowerCase()) > -1 || 
      registration.name_user.toLowerCase().indexOf(searchText.toLowerCase()) > -1;
    })
  }

}
