import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-carousel',
  templateUrl: './carousel.component.html',
  styleUrls: ['./carousel.component.css']
})
export class CarouselComponent implements OnInit {
  imageSrc1 = 'assets/images/image1.jpeg';
  imageSrc2 = 'assets/images/image2.jpeg';
  imageSrc3 = 'assets/images/image3.jpeg';
images!: any[];

  constructor() { }

  ngOnInit(): void {
  }

}
