import { Component, Input, OnInit } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';
import { EmailDetail } from 'src/app/_services/email.service';

@Component({
  selector: 'app-email-form',
  templateUrl: './email-form.component.html',
  styleUrls: ['./email-form.component.css'],
})
export class EmailFormComponent implements OnInit {
  @Input() email!: EmailDetail;
  form!: FormGroup;
  constructor() {}

  ngOnInit(): void {
    this.form = new FormGroup({
      subject: new FormControl(this.email.subject), //reply
      text: new FormControl(this.email.text), //reply
      from: new FormControl(this.email.from), // create  //reply
      to: new FormControl(this.email.to), //reply
    });
  }
}
