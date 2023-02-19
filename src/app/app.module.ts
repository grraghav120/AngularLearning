import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { DemoComponent } from './demo/demo.component';
import { SecondDayComponent } from './second-day/second-day.component';
import { ThirdDayComponent } from './third-day/third-day.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { Assignment2Component } from './assignment2/assignment2.component';
import { Assignment03Component } from './assignment03/assignment03.component';
import { NewComponentComponent } from './new-component/new-component.component';
import { SwtichCasesComponent } from './swtich-cases/swtich-cases.component';
import { LoggingServiceService } from './logging-service.service';
import { HttpClientModule } from '@angular/common/http';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MatTableModule } from '@angular/material/table';
import { ImageUploadComponent } from './image-upload/image-upload.component';
// import {MatNativeDateModule} from '@angular/material/core';

@NgModule({
  declarations: [
    AppComponent,
    DemoComponent,
    SecondDayComponent,
    ThirdDayComponent,
    Assignment2Component,
    Assignment03Component,
    NewComponentComponent,
    SwtichCasesComponent,
    ImageUploadComponent,
    // MatNativeDateModule,
  ],
  imports: [
    BrowserModule,
    FormsModule,
    ReactiveFormsModule,
    FormsModule,
    HttpClientModule,
    BrowserAnimationsModule,
    MatTableModule,
  ],
  providers: [LoggingServiceService],
  bootstrap: [AppComponent],
})
export class AppModule {}
