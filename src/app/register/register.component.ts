import { Component, OnInit } from '@angular/core';
import { FormBuilder, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { DataService } from '../services/data.service';


@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
})
export class RegisterComponent implements OnInit {
 email="";
 pswd="";
  RegisterForm=this.fb.group({
    email:['',[Validators.required,Validators.pattern('^[a-z0-9._%+-]+@[a-z0-9.-]+\\.[a-z]{2,4}$')]],
    pswd:['',[Validators.required,Validators.pattern('[0-9a-zA-Z]*')]]
  })

  constructor(private fb:FormBuilder,private ds:DataService,private router:Router) { }

  ngOnInit(): void {

  }
 register(){
  var mail=this.RegisterForm.value.email;
  var password=this.RegisterForm.value.pswd;

  if(this.RegisterForm.valid){

    const result = this.ds.register(mail,password);

    if(result){
      alert('register success')
      this.router.navigateByUrl('')
    }
    else{
      alert('regiister failed')
    }

  }

  

 }
}
