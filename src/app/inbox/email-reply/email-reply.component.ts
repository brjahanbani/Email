import { Component, Input, OnInit } from '@angular/core';
import { AuthService } from 'src/app/_services/auth.service';
import { EmailDetail, EmailService } from 'src/app/_services/email.service';

@Component({
  selector: 'app-email-reply',
  templateUrl: './email-reply.component.html',
  styleUrls: ['./email-reply.component.css'],
})
export class EmailReplyComponent implements OnInit {
  showModal = false;
  @Input() email!: EmailDetail;
  constructor(
    private emailService: EmailService,
    private authService: AuthService
  ) {}

  ngOnInit(): void {
    this.email = {
      ...this.email,
      from: `${this.authService.username}@angular-email.com`,
      to: this.email.from,
    };
  }
  onSubmitForm(email: EmailDetail) {
    this.emailService.sendEmail(email).subscribe(() => {
      this.showModal = false;
    });
  }
}
