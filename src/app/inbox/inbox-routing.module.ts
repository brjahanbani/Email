import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { EmailResolver } from '../_resolvers/email.resolver';
import { EmailShowComponent } from './email-show/email-show.component';
import { InboxHomeComponent } from './inbox-home/inbox-home.component';
import { NotFoundComponent } from './not-found/not-found.component';
import { PlaceholderComponent } from './placeholder/placeholder.component';

const routes: Routes = [
  {
    //localhost:4200/inbox/
    path: '',
    component: InboxHomeComponent,
    children: [
      { path: '', component: PlaceholderComponent },

      //localhost:4200/inbox/not-found
      {
        path: 'not-found',
        pathMatch: 'full',
        component: NotFoundComponent,
      },
      //localhost:4200/inbox/1
      {
        path: ':id',
        pathMatch: 'full',
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
