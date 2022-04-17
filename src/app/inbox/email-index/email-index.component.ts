import { Component, OnInit } from '@angular/core';
import { EmailService } from 'src/app/_services/email.service';

@Component({
  selector: 'app-email-index',
  templateUrl: './email-index.component.html',
  styleUrls: ['./email-index.component.css'],
})
export class EmailIndexComponent implements OnInit {
  emails = [
    {
      subject: 'Invitation',
      text: 'You are hired in Aize',
      from: 'hr@aize.com',
      time: '2022.08.23',
    },
    {
      subject: 'Relocation details',
      text: 'Forms you should apply ASAP to relocate',
      from: 'info@norway.gov',
      time: '2022.09.03',
    },
    {
      subject: 'Volvo: car installation',
      text: 'Congrats to your new car V90. Your first installation due is ...',
      from: 'sale@volvo.com',
      time: '2022.10.13',
    },
  ];
  constructor(private emailService: EmailService) {}

  ngOnInit(): void {
    //this was a suitable solution but in our course didnt work and we were ought to solve it with fake and static emails:
    this.emailService.getEmails().subscribe((data) => {
      //   this.emails = data;
    });
  }
}
