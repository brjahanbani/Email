import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { EmailService } from 'src/app/_services/email.service';

@Component({
  selector: 'app-email-show',
  templateUrl: './email-show.component.html',
  styleUrls: ['./email-show.component.css'],
})
export class EmailShowComponent implements OnInit {
  email: any;
  constructor(
    private route: ActivatedRoute,
    private emailService: EmailService
  ) {}

  ngOnInit(): void {
    this.route.params.subscribe(({ id }) =>
      this.emailService.getEmail(id).subscribe((email) => {
        this.email = email;
      })
    );
    // console.log(this.route.snapshot.params.id);
  }
}
