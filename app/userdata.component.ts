import { Component } from '@angular/core';
import { HttpService} from './http.service';
import {
  FormGroup,
  FormControl,
  Validators,
  FormBuilder,
  FormArray
} from "@angular/forms";
import { Observable } from "rxjs/Rx";

@Component({
  selector: 'app-userdata',
  templateUrl: './userdata.component.html',
styles: ['.invalid-text { color:red }']
})
export class UserdataComponent {
 myForm: FormGroup;
 httpData:Object;
 postdata:string;
  constructor(private formBuilder: FormBuilder,private httpService: HttpService,) {
     this.myForm = formBuilder.group({
    
      'name': ['', Validators.required],
       'email': ['', [
          Validators.required,
          Validators.pattern("[a-z0-9!#$%&'*+/=?^_`{|}~-]+(?:\.[a-z0-9!#$%&'*+/=?^_`{|}~-]+)*@(?:[a-z0-9](?:[a-z0-9-]*[a-z0-9])?\.)+[a-z0-9](?:[a-z0-9-]*[a-z0-9])?")
        ]],
        'post': ['', [Validators.required, this.postValidator]],
     
    });
       this.myForm.statusChanges.subscribe(
      (data: any) => console.log(data) );
 
  }

 
   getData() {
  //  this.httpData= JSON.stringify(this.httpService.getData());
   this.httpData= this.httpService.getData();
  }
   postData(value) {
   this.postdata= this.httpService.postData(value);
   console.log(value);
  //  this.httpService.postData(value).subscribe(
  //    data =>this.postdata=data,
  //    error => alert(error),
  //    ()=>console.log("finished")
  //  );
  }

  postValidator(control: FormControl): {[s: string]: boolean} {
    if (control.value.length <= 10) {
      return {example: true};
    }
    return null;
  }
}
