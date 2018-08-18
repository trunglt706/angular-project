import { Component, OnInit } from '@angular/core';
import { SliderService } from '../../../shared/services/slider.service';


@Component({
  selector: 'app-slider',
  templateUrl: './slider.component.html',
  styleUrls: ['./slider.component.css']
})
export class SliderComponent implements OnInit{

  constructor(private sliderService: SliderService){}
  slideConfig = {
    autoplay: true,
    dots: true,
    arrows: false,
    slidesToScroll: 1,
    autoplaySpeed: 5000,
    speed: 1000,
  };
  public sliders;
  ngOnInit() {
      this.sliderService.getSlider()
      .then(
        sliders => this.sliders = sliders,
        err => console.log(err)
      )
  }
}
