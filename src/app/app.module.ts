import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { RouterModule } from '@angular/router';
import { FormsModule } from '@angular/forms';
import { ReactiveFormsModule } from '@angular/forms';

import { ROUTES } from './app.routes';
import { AppComponent } from './app.component';
import { BlockABCComponent } from './challenge2/blockABC.component';
import { Challenge2Component } from './challenge2/challenge2.component';
import { Challenge3Component } from './challenge3/challenge3.component';
import { SignUpComponent } from './challenge4/signup.component';
import { UserComponent } from './challenge4/user.component';
import { Challenge4Component } from './challenge4/challenge4.component';
import { DrivenForm } from './template-driven-form/driven-form.component';
import { ReactivForm } from './reactiv-form/reactiv-form.component';

@NgModule({
  declarations: [
    AppComponent,
    BlockABCComponent,
    Challenge2Component,
    Challenge3Component,
    SignUpComponent,
    UserComponent,
    Challenge4Component,
    DrivenForm,
    ReactivForm
  ],
  imports: [
    BrowserModule,
    RouterModule.forRoot(ROUTES),
    FormsModule,
    ReactiveFormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
