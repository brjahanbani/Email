import { Component, OnInit } from '@angular/core';
import { EmailDetail } from 'src/app/_services/email.service';

@Component({
  selector: 'app-email-create',
  templateUrl: './email-create.component.html',
  styleUrls: ['./email-create.component.css'],
})
export class EmailCreateComponent implements OnInit {
  showModal = false;
  email: EmailDetail;
  constructor() {
    this.email = {
      id: 0,
      subject: '',
      text: '',
      from: 'babakjahanbani@xpnnt.com',
      time: '',
      to: '',
    };
  }

  ngOnInit(): void {}
}
