import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { exhaustMap, switchMap } from 'rxjs';
import { EmailDetail, EmailService } from 'src/app/_services/email.service';

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
  ) {
    this.route.data.subscribe((data) => console.log(data.email));
  }

  ngOnInit(): void {
    this.route.params
      .pipe(
        exhaustMap(({ id }) => {
          return this.emailService.getEmail(id);
        })
      )
      .subscribe((email: any) => {
        this.email = email;
      });

    //**********2 subscribe is not an ideal way so we'll use  */
    // this.route.params.subscribe(({ id }) =>
    //   this.emailService.getEmail(id).subscribe((email) => {
    //     this.email = email;
    //   })
    // );
    // console.log(this.route.snapshot.params.id);
  }
}
