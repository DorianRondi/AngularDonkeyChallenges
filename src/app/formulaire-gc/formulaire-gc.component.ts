import { Component } from '@angular/core';
import { Order } from './order';

@Component({
  selector: 'formulaireGC',
  templateUrl: './formulaire-gc.component.html',
  styleUrls: ['./formulaire-gc.component.scss']
})
export class FormulaireGC {
  model: Order = new Order();
  constructor() { }
  onSubmit() {
    console.log(this.model);
 }
}
