import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { ServiceService } from '../../../../shared/services/service.service';
import { EscapeHtmlPipe } from '../../../../shared/pipes/keep-html.pipe';

@Component({
  selector: 'app-service-page',
  templateUrl: './service-page.component.html',
  styleUrls: ['./service-page.component.css']
})
export class ServicePageComponent implements OnInit {

  id: Number;
  service;
  title: String;
  constructor(private route: ActivatedRoute, private serviceService: ServiceService) {}

  ngOnInit() {
    // lấy tham số id
    this.route.params.subscribe( params => {
      this.id = params.id;
    });
    this.serviceService.updateView(this.id);
    // Lấy danh sách tin tức
    this.serviceService.getService(this.id)
    .then(res => {
      this.service = res;
    })
  }

}
