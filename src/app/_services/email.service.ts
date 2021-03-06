import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable, of } from 'rxjs';
import { AuthService } from './auth.service';

export interface EmailDetail {
  id: number;
  subject: string;
  text: string;
  from: string;
  time: string;
  to: string;
}

@Injectable({
  providedIn: 'root',
})
export class EmailService {
  private rootUrl = 'https://api.angular-email.com';
  constructor(private http: HttpClient) {}
  private emails: EmailDetail[] = [
    {
      id: 1,
      subject: 'Invitation',
      text: 'You are hired in Aize',
      from: 'hr@aize.com',
      time: '2022.08.23',
      to: ``,
    },
    {
      id: 2,
      subject: 'Relocation details',
      text: 'Forms you should apply ASAP to relocate',
      from: 'info@norway.gov',
      time: '2022.09.03',
      to: ``,
    },
    {
      id: 3,
      subject: 'Volvo: car installation',
      text: 'Congrats to your new car V90. Your first installation due is ...',
      from: 'sale@volvo.com',
      time: '2022.10.13',
      to: ``,
    },
  ];
  getEmails() {
    return of(this.emails);

    //***********for calling Up emails as fake api data, this down was commented */

    // return this.http.get<any>(`${this.rootUrl}/emails`);
    //TODO create interface for emails
  }

  getEmail(id: number): Observable<EmailDetail | undefined> {
    const email = this.emails.find((e) => e.id == id);
    return of(email);
    //***********for calling Up emails as fake api data, this down was commented
    // return this.http.get<EmailDetail>(`${this.rootUrl}/emails/${id}`);
  }

  sendEmail(email: EmailDetail) {
    return this.http.post(`${this.rootUrl}/emails`, email);
  }
}
