import { Component, OnInit } from '@angular/core';
import { AuthService } from './_services/auth.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
})
export class AppComponent implements OnInit {
  title = 'Email';
  constructor(private authService: AuthService) {
    this.authService.checkAuth().subscribe((response) => {
      // console.log(response);
    });
  }
  ngOnInit(): void {
    setTimeout(() => {
      this.authService.signout().subscribe((response) => {
        // console.log(response);
      });
    }, 5000000);
  }
}
