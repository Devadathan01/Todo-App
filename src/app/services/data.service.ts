import { Injectable } from '@angular/core';
import { Router } from '@angular/router';

@Injectable({
  providedIn: 'root'
})



export class DataService {



    userdetails:any={
      "joice@gmail.com":{username:'joice',password:'1234',email:'joice@gmail.com'},
      "arjun@gmail.com":{username:'arjun',password:'1234',email:'arjun@gmail.com'},
      "deva@gmail.com":{username:'joice',password:'1234',email:'dathen@gmail.com'}
    }
   currentuser ="";
    nlist:any;
    
    constructor(private router:Router) { }
  
    Login (email:any,pswd:any)
    {
      if(email in this.userdetails)
      {     
        if(pswd == this.userdetails[email]['password'])
        {
          this.currentuser=this.userdetails[email].username
           this.router.navigateByUrl('index');
          return true;
        }
        else
        {
          return false;
        }
      }
      else
      {
        return false;
      }
    }
  
  
    register(email:any,pswd:any)
    {
      if(email in this.userdetails)
      {
        return false;
      }
      else
      {
        this.userdetails[email]={
          
          password:pswd,
          email:email
        }
        return true
      }
    }
  
    
  }