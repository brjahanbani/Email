import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { EmailDetail } from 'src/app/_services/email.service';

@Component({
  selector: 'app-email-form',
  templateUrl: './email-form.component.html',
  styleUrls: ['./email-form.component.css'],
})
export class EmailFormComponent implements OnInit {
  @Input() email!: EmailDetail;
  @Output() submitEmail = new EventEmitter();

  form!: FormGroup;
  constructor() {}

  ngOnInit(): void {
    this.form = new FormGroup({
      subject: new FormControl(this.email.subject, [Validators.required]), //reply
      text: new FormControl(this.email.text, [Validators.required]), //reply
      from: new FormControl({ value: this.email.from, disabled: true }), // create  //reply
      to: new FormControl(this.email.to, [
        Validators.required,
        Validators.email,
      ]), //reply
    });
  }

  onSubmit() {
    if (this.form.invalid) {
      this.form.markAllAsTouched();
      return;
    }
    this.submitEmail.emit(this.form.getRawValue()); //getRawValue is for disabled (unaccessable) from email
  }
}
