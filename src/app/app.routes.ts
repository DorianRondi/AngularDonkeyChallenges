import { Routes } from '@angular/router';
import { Challenge2Component } from './challenge2/challenge2.component';
import { Challenge3Component } from './challenge3/challenge3.component';
import { SignUpComponent } from './challenge4/signup.component';
import { UserComponent } from './challenge4/user.component';
import { Challenge4Component } from './challenge4/challenge4.component';

const ROUTES: Routes = [
  { path: '2', component: Challenge2Component },
  { path: '3', component: Challenge3Component },
  { path: 'signup', component: SignUpComponent },
  { path: 'user', component: UserComponent },
  { path: '4', component: Challenge4Component }
];

export { ROUTES };
