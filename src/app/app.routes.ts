import { Routes } from '@angular/router';
import { Challenge2Component } from './challenge2/challenge2.component';
import { Challenge3Component } from './challenge3/challenge3.component';
import { SignUpComponent } from './challenge4/signup.component';
import { UserComponent } from './challenge4/user.component';
import { Challenge4Component } from './challenge4/challenge4.component';
import { DrivenForm } from './template-driven-form/driven-form.component';
import { ReactivForm } from './reactiv-form/reactiv-form.component';
import { Challenge7Component } from './challenge7/challenge7.component';

const ROUTES: Routes = [
  { path: '2', component: Challenge2Component },
  { path: '3', component: Challenge3Component },
  { path: 'signup', component: SignUpComponent },
  { path: 'user', component: UserComponent },
  { path: '4', component: Challenge4Component },
  { path: 'driven-form', component: DrivenForm },
  { path: '7', component: Challenge7Component },
  { path: 'reactiv-form', component: ReactivForm }
];

export { ROUTES };
