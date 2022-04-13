import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { delay } from 'rxjs';
import { AuthService } from 'src/app/_services/auth.service';

@Component({
  selector: 'app-signin',
  templateUrl: './signin.component.html',
  styleUrls: ['./signin.component.css'],
})
export class SigninComponent implements OnInit {
  constructor(private authService: AuthService, private router: Router) {}

  form = new FormGroup({
    username: new FormControl('', [
      Validators.required,
      Validators.minLength(3),
      Validators.maxLength(20),
    ]),
    password: new FormControl('', [
      Validators.required,
      Validators.minLength(6),
      Validators.maxLength(20),
    ]),
  });

  get f() {
    return this.form.controls;
  }

  onSubmit() {
    if (this.form.invalid) {
      this.form.markAllAsTouched();
      return;
    }
    this.authService.signin(this.form.value).subscribe(
      (response) => {
        console.log(response);
      },
      (error: any) => {
        if (!error.status) {
          this.form.setErrors({ noConnection: true });
        } else {
          this.form.setErrors({ unknownError: true });
        }
      }
    );
  }

  ngOnInit(): void {
    this.authService
      .signout()
      .pipe(delay(2000))
      .subscribe(() => {
        //TODO: redirect to home
        this.router.navigate(['/inbox']);
      });
  }
  showErrorPasswordDontMatch() {
    return (
      this.form.controls.password.dirty &&
      this.form.controls.password.touched &&
      this.form.controls.username.dirty &&
      this.form.controls.username.touched
    );
  }
}
