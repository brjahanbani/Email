import { Component, OnInit } from '@angular/core';
import { EmailService } from 'src/app/_services/email.service';

@Component({
  selector: 'app-email-index',
  templateUrl: './email-index.component.html',
  styleUrls: ['./email-index.component.css'],
})
export class EmailIndexComponent implements OnInit {
  emails: any[] = [];
  constructor(private emailService: EmailService) {}

  ngOnInit(): void {
    //this was a suitable solution but in our course didnt work and we were ought to solve it with fake and static emails:
    this.emailService.getEmails().subscribe((data) => {
      this.emails = data;
    });
  }
}
