import { Injectable } from '@angular/core';
import {
  Router,
  Resolve,
  RouterStateSnapshot,
  ActivatedRouteSnapshot,
} from '@angular/router';
import { Observable, of } from 'rxjs';
import { EmailDetail } from '../_services/email.service';

@Injectable({
  providedIn: 'root',
})
export class EmailResolver implements Resolve<EmailDetail> {
  resolve(
    route: ActivatedRouteSnapshot,
    state: RouterStateSnapshot
  ): Observable<EmailDetail> | EmailDetail {
    return {
      id: '1',
      subject: 'Invitation',
      text: 'You are hired in Aize',
      from: 'hr@aize.com',
      time: '2022.08.23',
    };
  }
}
