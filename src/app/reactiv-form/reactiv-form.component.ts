import { Component } from '@angular/core';
import { FormControl, FormGroup, MaxLengthValidator, Validators } from '@angular/forms';

@Component({
  selector: 'reactiv-form',
  templateUrl: './reactiv-form.component.html',
  styleUrls: ['./reactiv-form.component.scss']
})
export class ReactivForm {
  reactiv : FormGroup;

  constructor(){
    this.reactiv = new FormGroup({
      ref : new FormControl(null,[Validators.required,Validators.minLength(5),Validators.maxLength(5)]),
      quantity : new FormControl(null,[Validators.required,Validators.min(1)]),
      date : new FormControl('2022-01-27',Validators.required),
      email : new FormControl(null,[Validators.required,Validators.email]),
    })
  }
  onSubmit(){
    console.log(this.reactiv);
  }
  get ref(){
    return this.reactiv.get('ref') as FormControl;
  }
  get email(){
    return this.reactiv.get('email') as FormControl;
  }
  get quantity(){
    return this.reactiv.get('quantity') as FormControl;
  }
  get date(){
    return this.reactiv.get('date') as FormControl;
  }
}
