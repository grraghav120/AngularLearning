import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { DemoComponent } from './demo/demo.component';
import { SecondDayComponent } from './second-day/second-day.component';
import { ThirdDayComponent } from './third-day/third-day.component';
import { FormsModule } from '@angular/forms';
import { Assignment2Component } from './assignment2/assignment2.component';
import { Assignment03Component } from './assignment03/assignment03.component';
import { NewComponentComponent } from './new-component/new-component.component';
import { SwtichCasesComponent } from './swtich-cases/swtich-cases.component';
@NgModule({
  declarations: [
    AppComponent,
    DemoComponent,
    SecondDayComponent,
    ThirdDayComponent,
    Assignment2Component,
    Assignment03Component,
    NewComponentComponent,
    SwtichCasesComponent
  ],
  imports: [
    BrowserModule,
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
