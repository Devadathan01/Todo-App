import { Component, OnInit } from '@angular/core';
import { FormBuilder, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { DataService } from '../services/data.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
email="";
pswd="";
LoginForm = this.fb.group({
  email:['',[Validators.required,Validators.pattern('^[a-z0-9._%+-]+@[a-z0-9.-]+\\.[a-z]{2,4}$')]],
  pswd:['',[Validators.required,Validators.pattern('[0-9a-zA-Z]*')]]
})
  

  constructor(private ds:DataService,private fb:FormBuilder,private router:Router) { }


Login(){
  {
    var mail=this.LoginForm.value.email;
    var pswd=this.LoginForm.value.pswd;
  
    if(this.LoginForm.valid){
  
      const result = this.ds.Login(mail,pswd);
  
      if(result){
        alert('Login success')
        this.router.navigateByUrl('index');
      }
      else{
        alert('Login failed')
      }
  
    }
  

  
   }

}
  ngOnInit(): void {
  }

}
