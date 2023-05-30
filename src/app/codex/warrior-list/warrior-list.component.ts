import { Component } from '@angular/core';
import { Warrior } from './warrior';

@Component({
  selector: 'warrior-list',
  templateUrl: './warrior-list.component.html',
  styleUrls: ['./warrior-list.component.scss']
})
export class WarriorListComponent {
  warriorName:string = "";
  warriors: Warrior[] = [];

  constructor(){}

  addWarrior(){
    let chapitreAttributor:number = Math.random();
    let chapiteattributed:string;
    let classCSS: string;

    if(chapitreAttributor < 0.25){
      chapiteattributed = 'Ultramarines';
      classCSS = 'ultra';

    }else if(chapitreAttributor >= 0.25 && chapitreAttributor < 0.5){
      chapiteattributed = 'Blood Ravens';
      classCSS = 'blood';

    }else if(chapitreAttributor >= 0.5 && chapitreAttributor < 0.75){
      chapiteattributed = 'Space Wolves';
      classCSS = 'space';

    }else{
      chapiteattributed = 'World Bearers';
      classCSS = 'world';
    }

    this.warriors.push({
      name:this.warriorName,
      chapitre:chapiteattributed,
      classCSS:classCSS,
    });

    console.log(chapitreAttributor + " = " + chapiteattributed);
    console.log(this.warriorName+" Ajouté a la liste");
    console.log(this.warriors);

    this.warriorName = "";
  }

  leaveArmy(index: number){
    this.warriors.splice(index, 1);
  }
}
