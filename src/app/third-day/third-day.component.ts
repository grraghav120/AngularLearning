import { Component } from '@angular/core';

@Component({
  selector: 'app-third-day',
  templateUrl: './third-day.component.html',
  styleUrls: ['./third-day.component.css'],
})
export class ThirdDayComponent {
  server: string = 'Raghav Garg';
  serverName: string;
  data:string='';
  isData:boolean=false;
  constructor() {}
  onClick() {
    this.serverName = 'Name is : ' + this.server;
  }
  onTest(){
    this.isData=true;
  }
}
