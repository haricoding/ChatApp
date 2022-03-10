import { Component, OnInit } from '@angular/core';
import { FormGroup,FormBuilder } from '@angular/forms';
import { HttpClient } from '@angular/common/http';
import { Router } from '@angular/router';
@Component({
  selector: 'app-registration',
  templateUrl: './registration.component.html',
  styleUrls: ['./registration.component.css']
})
export class RegistrationComponent implements OnInit {

  constructor(private formBuilder : FormBuilder, private http : HttpClient, private router:Router ) { }
public signupform !: FormGroup;
  ngOnInit(): void {
    this.signupform = this.formBuilder.group({
      fullname:[''],
      email:[''],
      password:[],
      mobilenumber:[]
    })
  }
signup(){
 this.http.post<any>(`http://localhost:3000/signupusers`,this.signupform.value)
 .subscribe(res=>{
   console.log(res);
   
   alert("signupsucessfull")
   this.signupform.reset();
   this.router.navigate(['login']);
 })
}

}
