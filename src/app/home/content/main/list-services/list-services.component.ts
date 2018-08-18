import { Component, OnInit } from '@angular/core';
import { ServiceService } from '../../../shared/services/service.service';

@Component({
  selector: 'app-list-services',
  templateUrl: './list-services.component.html',
  styleUrls: ['./list-services.component.css']
})
export class ListServicesComponent implements OnInit {
  list_service: any;
  constructor(private serviceService: ServiceService) { }

  ngOnInit() {
    this.serviceService.getListService()
    .then( res => { this.list_service = res })
  }

}
