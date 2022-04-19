import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { EmailResolver } from '../_resolvers/email.resolver';
import { EmailShowComponent } from './email-show/email-show.component';
import { InboxHomeComponent } from './inbox-home/inbox-home.component';
import { PlaceholderComponent } from './placeholder/placeholder.component';

const routes: Routes = [
  {
    path: '',
    component: InboxHomeComponent,
    children: [
      { path: '', component: PlaceholderComponent },
      {
        path: ':id',
        component: EmailShowComponent,
        resolve: { email: EmailResolver },
      },
    ],
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class InboxRoutingModule {}
