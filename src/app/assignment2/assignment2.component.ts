import { Component } from '@angular/core';

@Component({
  selector: 'app-assignment2',
  templateUrl: './assignment2.component.html',
  styleUrls: ['./assignment2.component.css'],
})
export class Assignment2Component{
  userName: string = '';
  constructor(){}

  onClick() {
    if (this.userName === '') return true;
    return false;
  }

  resetData() {
    this.userName = '';
  }

}
