import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-about',
  templateUrl: './about.component.html',
  styleUrls: ['./about.component.css']
})
export class AboutComponent implements OnInit {
  imageSrc1 = 'assets/images/image1.jpeg';
  constructor() { }

  ngOnInit(): void {
  }

}
