import { Component } from '@angular/core';
import { Order } from './order';

@Component({
  selector: 'driven-form',
  templateUrl: './driven-form.component.html',
  styleUrls: ['./driven-form.component.scss']
})
export class DrivenForm {
  model: Order = new Order();
  constructor() { }
  onSubmit() {
    console.log(this.model);
 }
}
