import { Component, OnInit } from '@angular/core';
import { DataService } from '../data.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {

  countNum: number;
  btnName: string = "submit now";
  goalText: string = "Here is my string";
  goals = [];
  constructor( private _data: DataService ) { }

  ngOnInit() {
    this._data.goal.subscribe(res => this.goals = res);
    this.countNum = this.goals.length;
    this._data.changeGoal(this.goals);
  }

  addContent(){
    this.goals.push(this.goalText);
    this.goalText = "";
    this.countNum = this.goals.length;
    this._data.goal.subscribe(res => this.goals = res);
  }

}
