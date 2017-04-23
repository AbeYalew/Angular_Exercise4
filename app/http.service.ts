import { Injectable } from '@angular/core';
import { Http , Response, Headers} from '@angular/http';

@Injectable()
export class HttpService {
data:Object;
  constructor(public http: Http ) {}
getData(){
  this.http.request('http://jsonplaceholder.typicode.com/users/1').subscribe(
    (res:Response) => this.data=res.json());
    return this.data;
  }


 
  postData(value){
  //    headers=new Headers();
  // headers.append('Content-Type','application/x-www-form-urlencoded');
  // return this.http.post('http://validate.jsontest.com',value);
  console.log(value);
  return value;

 
}

}