import { Component, OnInit } from '@angular/core';
import emailjs, { EmailJSResponseStatus } from '@emailjs/browser';
@Component({
  selector: 'app-contact',
  templateUrl: './contact.component.html',
  styleUrls: ['./contact.component.css']
})
export class ContactComponent implements OnInit {
  value1: any;
  constructor() { }

  ngOnInit(): void {
  }
  public sendEmail(e: Event) {
    e.preventDefault();
    emailjs.sendForm('YOUR_SERVICE_ID', 'YOUR_TEMPLATE_ID', e.target as HTMLFormElement, 'YOUR_PUBLIC_KEY')
      .then((result: EmailJSResponseStatus) => {
        console.log(result.text);
      }, (error: { text: any; }) => {
        console.log(error.text);
      });
  }

}
