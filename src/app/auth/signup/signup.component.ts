import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { MatchPasswordsService } from 'src/app/_validators/match-passwords.service';

@Component({
  selector: 'app-signup',
  templateUrl: './signup.component.html',
  styleUrls: ['./signup.component.css'],
})
export class SignupComponent implements OnInit {
  form = new FormGroup(
    {
      username: new FormControl('', [
        Validators.required,
        Validators.minLength(5),
        Validators.maxLength(13),
      ]),
      password: new FormControl('', [
        Validators.required,
        Validators.minLength(6),
        Validators.maxLength(20),
      ]),
      passwordConfirmation: new FormControl('', [
        Validators.required,
        Validators.minLength(6),
        Validators.maxLength(20),
      ]),
    },
    {
      validators: [this.matchPasswords.validate],
    }
  );
  constructor(private matchPasswords: MatchPasswordsService) {}

  onSubmit() {
    console.log(this.form.value);
  }

  ngOnInit(): void {}
}
