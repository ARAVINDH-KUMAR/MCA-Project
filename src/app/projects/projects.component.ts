import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-projects',
  templateUrl: './projects.component.html',
  styleUrls: ['./projects.component.css']
})
export class ProjectsComponent implements OnInit {
  imageSrc1 = 'assets/images/image1.jpeg';
  imageSrc2 = 'assets/images/image2.jpeg';
  imageSrc3 = 'assets/images/image3.jpeg';
  constructor() { }

  ngOnInit(): void {
  }

}
