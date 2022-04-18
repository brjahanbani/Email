import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { of } from 'rxjs';

interface EmailDetail {
  id: string;
  from: string;
  to: string;
  subject: string;
  html: string;
  text: string;
  time: string;
}

@Injectable({
  providedIn: 'root',
})
export class EmailService {
  private rootUrl = 'https://api.angular-email.com';
  constructor(private http: HttpClient) {}
  private emails = [
    {
      id: 1,
      subject: 'Invitation',
      text: 'You are hired in Aize',
      from: 'hr@aize.com',
      time: '2022.08.23',
    },
    {
      id: 2,
      subject: 'Relocation details',
      text: 'Forms you should apply ASAP to relocate',
      from: 'info@norway.gov',
      time: '2022.09.03',
    },
    {
      id: 3,
      subject: 'Volvo: car installation',
      text: 'Congrats to your new car V90. Your first installation due is ...',
      from: 'sale@volvo.com',
      time: '2022.10.13',
    },
  ];
  getEmails() {
    return of(this.emails);

    //***********for calling Up emails as fake api data, this down was commented */

    // return this.http.get<any>(`${this.rootUrl}/emails`);
    //TODO create interface for emails
  }

  getEmail(id: number) {
    const email = this.emails.find((e) => e.id == id);
    return of(email);
    //***********for calling Up emails as fake api data, this down was commented
    // return this.http.get<EmailDetail>(`${this.rootUrl}/emails/${id}`);
  }
}
