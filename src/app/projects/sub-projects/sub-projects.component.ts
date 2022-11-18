import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-sub-projects',
  templateUrl: './sub-projects.component.html',
  styleUrls: ['./sub-projects.component.css']
})
export class SubProjectsComponent implements OnInit {
  imageSrc1 = 'assets/images/image1.jpeg';
  imageSrc2 = 'assets/images/image2.jpeg';
  imageSrc3 = 'assets/images/image3.jpeg';

  constructor() { }


  ngOnInit(): void {
  }

}
