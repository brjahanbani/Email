import { Component, OnInit } from '@angular/core';
import { AuthService } from '../_services/auth.service';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.css'],
})
export class NavbarComponent implements OnInit {
  public sign = false;
  constructor(private authService: AuthService) {}

  ngOnInit(): void {
    this.authService.signedin$.subscribe((value) => {
      this.sign = value;
    });
  }
}
