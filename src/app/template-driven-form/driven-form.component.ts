import { Component } from '@angular/core';
import { Order } from './order';
import { NgForm } from '@angular/forms';

@Component({
  selector: 'driven-form',
  templateUrl: './driven-form.component.html',
  styleUrls: ['./driven-form.component.scss']
})
export class DrivenForm {
  model: Order = new Order();
  constructor() { }
  onSubmit(DrivenForm: NgForm) {
    console.log(DrivenForm);
 }
}
