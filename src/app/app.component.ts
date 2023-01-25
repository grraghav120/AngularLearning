import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
})
export class AppComponent {
  name = 'Raghav Garg';
  branch = 'Computer Science Engineering';
  collegeName = 'Hindustan College of Science and Technology';
  course='Bachelor of Technology';
  constructor(){
    
  }
}
