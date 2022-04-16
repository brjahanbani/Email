import { Component, OnInit } from '@angular/core';
import { EmailService } from 'src/app/_services/email.service';

@Component({
  selector: 'app-email-index',
  templateUrl: './email-index.component.html',
  styleUrls: ['./email-index.component.css'],
})
export class EmailIndexComponent implements OnInit {
  emails = [];
  constructor(private emailService: EmailService) {}

  ngOnInit(): void {
    this.emailService.getEmails().subscribe((data) => {
      this.emails = data;
    });
  }
}
