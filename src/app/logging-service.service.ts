import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root',
})
export class LoggingServiceService {
  constructor( private http:HttpClient) {}
  logConsoleData(value: number) {
    console.log(`The Value is ${value}`);
  }

  onSendPost(url:string,myForm:any) {
    return this.http
      .post(
        'https://ng-angular-project-1adbc-default-rtdb.firebaseio.com/'+url,
          myForm
      )
  }

  onFetchPost(url:string){
    return this.http
      .get(
        'https://ng-angular-project-1adbc-default-rtdb.firebaseio.com/'+url
      )
  }

  onDeletePost(url:string,id:string){
    return this.http
    .delete(
      'https://ng-angular-project-1adbc-default-rtdb.firebaseio.com/'+url+'/'+id+'.json'
    )
  }

  onDeleteAllPost(url:string){
    this.http.delete('https://ng-angular-project-1adbc-default-rtdb.firebaseio.com/'+url).subscribe((res)=>{
      console.log(res);
    })
  }
}
