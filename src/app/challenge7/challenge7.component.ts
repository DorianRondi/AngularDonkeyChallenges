import { Component } from '@angular/core';
import { NgForm } from '@angular/forms';
import { User } from './user';

@Component({
  selector: 'challenge7',
  templateUrl: './challenge7.component.html',
  styleUrls: ['./challenge7.component.scss']
})
export class Challenge7Component {
  uzer: User = new User();
  constructor() { }
  onSubmit(DrivenForm: NgForm) {
    console.log(DrivenForm);
 }
}
