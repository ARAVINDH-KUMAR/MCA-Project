import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-display-content',
  templateUrl: './display-content.component.html',
  styleUrls: ['./display-content.component.css']
})
export class DisplayContentComponent implements OnInit {
    // images = [944, 1011, 984].map((n) => `https://picsum.photos/id/${n}/900/500`);
    items: any;
    // imageSrc1 = 'assets/images/images.png';
    // imageSrc2 = 'assets/images/images (1).png';
    // imageSrc3 = 'assets/images/image.png';
    imageSrc1 = 'assets/images/image1.jpeg';
    imageSrc2 = 'assets/images/image2.jpeg';
    imageSrc3 = 'assets/images/image3.jpeg';
  constructor() { }

  ngOnInit(): void {
  }

}
