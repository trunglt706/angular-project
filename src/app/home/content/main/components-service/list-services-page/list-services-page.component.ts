import { Component, OnInit } from '@angular/core';
import { ServiceService } from '../../../../shared/services/service.service';

@Component({
  selector: 'app-list-services-page',
  templateUrl: './list-services-page.component.html',
  styleUrls: ['./list-services-page.component.css']
})
export class ListServicesPageComponent implements OnInit {
  id: Number;
  listService;
  constructor(private service: ServiceService) {}
  ngOnInit() {

    // Lấy danh sách dịch vụ
    this.service.getListService()
    .then( res => this.listService = res )
  }

}
