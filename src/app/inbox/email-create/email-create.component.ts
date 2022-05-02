import { Component, OnInit } from '@angular/core';
import { AuthService } from 'src/app/_services/auth.service';
import { EmailDetail, EmailService } from 'src/app/_services/email.service';

@Component({
  selector: 'app-email-create',
  templateUrl: './email-create.component.html',
  styleUrls: ['./email-create.component.css'],
})
export class EmailCreateComponent implements OnInit {
  showModal = false;
  email!: EmailDetail;
  constructor(
    private authService: AuthService,
    private emailService: EmailService
  ) {}

  ngOnInit(): void {
    this.email = {
      id: 0,
      subject: '',
      text: '',
      from: `${this.authService.username}@angular-email.com`,
      time: '',
      to: '',
    };
  }
  onSubmitForm(email: EmailDetail) {
    this.emailService.sendEmail(email).subscribe(() => {
      this.showModal = false;
    });
  }
}
