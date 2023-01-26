import { Component } from '@angular/core';

@Component({
  selector: 'app-assignment03',
  templateUrl: './assignment03.component.html',
  styleUrls: ['./assignment03.component.css'],
})
export class Assignment03Component {
  countLog = [];
  element = 0;
  constructor() {}
  onClick() {
    this.element += 1;
    this.countLog.push('Log' + this.element);
  }
  getColor() {
    return this.countLog.length > 5 ? 'blue' : 'white';
  }
  gettextColor() {
    return this.countLog.length > 5 ? 'white' : 'black';
  }
}
