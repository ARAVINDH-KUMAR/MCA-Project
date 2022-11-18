import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
})
export class AppComponent {
  openSidenav = false;
   public start: string;
    public range: string;

    public constructor() {
        this.start = "Tracy CA";
        this.range = "300";
    }

    public ngOnInit() { }

}
