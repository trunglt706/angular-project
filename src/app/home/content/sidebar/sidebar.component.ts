import { Component, OnInit } from '@angular/core';
import { ImageAdvertisementService } from '../../../dashboard/shared/services/image-advertisement.service';
import { OrderPipe } from 'ngx-order-pipe';
@Component({
  selector: 'app-sidebar',
  templateUrl: './sidebar.component.html',
  styleUrls: ['./sidebar.component.css']
})
export class SidebarComponent implements OnInit {

  array_advertisement: any;

  //sorting
  key: string = 'order_num'; //set default
  reverse: boolean = false;

  constructor(private imageAdvertisementService: ImageAdvertisementService) { }

  ngOnInit() {
    this.imageAdvertisementService.get_advertisement()
    .then( res =>  this.array_advertisement = res);
  }

}
