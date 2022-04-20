import { Injectable } from '@angular/core';
import {
  Router,
  Resolve,
  RouterStateSnapshot,
  ActivatedRouteSnapshot,
} from '@angular/router';
import { Observable, of } from 'rxjs';
import { EmailDetail, EmailService } from '../_services/email.service';

@Injectable({
  providedIn: 'root',
})
export class EmailResolver implements Resolve<EmailDetail | undefined> {
  constructor(private emailService: EmailService) {}
  resolve(
    route: ActivatedRouteSnapshot,
    state: RouterStateSnapshot
  ): Observable<EmailDetail | undefined> {
    const id = route.params.id;

    return this.emailService.getEmail(id);
  }
}
