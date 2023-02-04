import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class LoggingServiceService {

  constructor() { }
  logConsoleData(value:number){
    console.log(`The Value is ${value}`);
  }
}
