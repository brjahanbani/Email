import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { MatchPasswordsService } from 'src/app/_validators/match-passwords.service';
import { UniqueUsernameService } from 'src/app/_validators/unique-username.service';

@Component({
  selector: 'app-signup',
  templateUrl: './signup.component.html',
  styleUrls: ['./signup.component.css'],
})
export class SignupComponent implements OnInit {
  form = new FormGroup(
    {
      username: new FormControl(
        '',
        [
          Validators.required,
          Validators.minLength(3),
          Validators.maxLength(13),
        ],
        [this.uniqueUsername.validate.bind(this.uniqueUsername)]
      ),
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
  constructor(
    private matchPasswords: MatchPasswordsService,
    private uniqueUsername: UniqueUsernameService
  ) {}

  get f() {
    return this.form.controls;
  }

  onSubmit() {
    console.log(this.form.value);
  }

  showErrorPasswordDontMatch() {
    return (
      this.form.controls.password.dirty &&
      this.form.controls.password.touched &&
      this.form.controls.passwordConfirmation.dirty &&
      this.form.controls.passwordConfirmation.touched
    );
  }

  ngOnInit(): void {}
}
