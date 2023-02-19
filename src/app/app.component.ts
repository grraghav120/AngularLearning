import { HttpClient } from '@angular/common/http';
import { AfterViewInit, Component, OnInit, ViewChild } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { LoggingServiceService } from './logging-service.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
})
export class AppComponent implements OnInit {
  myForm: FormGroup;
  allPost: any = [];
  isLoading: boolean = false;

  // name = 'Raghav Garg';
  // branch = 'Computer Science Engineering';
  // collegeName = 'Hindustan College of Science and Technology';
  // course='Bachelor of Technology';
  // title: any;

  constructor(
    private http: HttpClient,
    private logService: LoggingServiceService
  ) {}
  ngOnInit(): void {
    this.myForm = new FormGroup({
      title: new FormControl('', Validators.required),
      content: new FormControl('', Validators.required),
    });
    this.onFetchPost();
    console.log(this.allPost);
  }

  onSendPost() {
    this.logService.onSendPost('notes.json', this.myForm.value).subscribe((res) => {
      this.onFetchPost()  
    });
    this.myForm.reset();
    
  }

  onFetchPost() {
    this.isLoading = true;
    this.allPost=[];
    this.logService.onFetchPost('notes.json').subscribe((res) => {
      this.isLoading = false;
      if (res) {
        Object.keys(res).forEach((x) =>
          this.allPost.push({
            id: x,
            title: res[x].title,
            content: res[x].content,
          })
        );
      } else {
        console.log('Error in Fetch API');
      }
    });;
  }

  onDeletePost(id:string) {
    this.logService.onDeletePost('notes',id).subscribe((res) => {
      this.onFetchPost();
    });
  }


  onDeleteAllPost(){
    this.logService.onDeleteAllPost('demo.json');
    this.allPost=[];
  }
}
