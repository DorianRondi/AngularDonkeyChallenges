import { Component } from '@angular/core';

@Component({
  selector: 'app-challenge3',
  templateUrl: './challenge3.component.html',
  styleUrls: ['./challenge3.component.scss']
})
export class Challenge3Component {

  user: User = {
    firstname: 'John',
    lastname: 'Doe',
    age: 25,
    quote: 'saucisse',
    photo: 'https://randomuser.me/api/portraits/lego/2.jpg'
  };

  afficher: string = "Afficher les infos";
  masquer: string = "Masquer les infos";
  maskInfo: string = this.afficher;
  visibility: string = 'd-none';
  button:boolean = false;

  mask = () => {
    if (this.button) {
      this.button = false;
      this.maskInfo = "Afficher les infos";
      this.visibility = "d-none";
      return;
    }
    this.button = true;
    this.maskInfo = "Masquer les infos";
    this.visibility = "";
    return;
  };
}

interface User {
  firstname: string
  lastname: string
  age: number
  quote: string
  photo: string
};
