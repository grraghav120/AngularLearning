import { Component } from '@angular/core';

@Component({
  selector: 'app-second-day',
  templateUrl: './second-day.component.html',
  styleUrls: ['./second-day.component.css'],
})
export class SecondDayComponent {
  numberGiven: number = 10;
  numberWord: string = 'Ten';
  numberGiven2:number=20;
  numberWord2:string ="Twenty"
  name='';
  onUpdateName(event : Event){
    console.log(event.type);
    this.name=(<HTMLInputElement>event.target).value;
  }
}
