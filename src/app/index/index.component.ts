import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { DataService } from '../services/data.service';

@Component({
  selector: 'app-index',
  templateUrl: './index.component.html',
  styleUrls: ['./index.component.css']
})
export class IndexComponent implements OnInit {
 
  task: any;
list:any[]=[]
item: any;
  btnStyle: string | undefined;

 addtask(task:any)
 {
  if(task){
    this.list.push({id:this.list.length,name:task});
    console.log(this.list);
    
  }
 }

 removetask(id:number)
 {
   this.list= this.list.filter(data=>data.id!==id)
 }

 logout()
 {
  localStorage.setItem(
    this.ds.currentuser,JSON.stringify(this.list))
  this.router.navigateByUrl("")
 }
  constructor( private router:Router,private ds :DataService) {
    if(this.ds.currentuser in localStorage)
    {
      this.list= this.ds.nlist;
    }
   }

  ngOnInit(): void {
  }

}