import { Component, OnInit } from '@angular/core';
import { LoggingServiceService } from '../logging-service.service';

@Component({
  selector: 'app-swtich-cases',
  templateUrl: './swtich-cases.component.html',
  styleUrls: ['./swtich-cases.component.css'],
  providers: [LoggingServiceService],
})
export class SwtichCasesComponent implements OnInit {
  value: number;
  constructor(public mySer: LoggingServiceService) {}
  onClick() {
    this.mySer.logConsoleData(this.value);
  }
  ngOnInit() {}
}
