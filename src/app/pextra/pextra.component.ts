import { Component, OnInit } from '@angular/core';
import { users } from './pextra.data.module';
import { pextraservice } from '../services/pextra.service';

@Component({
  selector: 'app-pextra',
  templateUrl: './pextra.component.html',
  styleUrls: ['./pextra.component.css']
})
export class PextraComponent  {

  constructor(private ps:pextraservice){ }
  
 
  ptest="this string is try @Input";

  entrypage=true;
  userpage=false;

  uname:string='';
  pwd:string=''; 

  
  authenticate:any;

  userdata: any=[];
  
 
  
  ngOnInIt(): void{
    
  }

  

  //Register User
  RegisterUser(user:users){
    this.ps.reguser(user).subscribe(()=>{});
    this.entry();
  }

  //Login User
  Login(uname:string, pwd:string){
    // console.log(uname,pwd);
    this.ps.authuser(uname,pwd).subscribe((data)=>{

      
      this.userdata=data;

      // console.log("data =");
      // console.log(data);
      // for(const i in this.userdata){
      //   console.log(this.userdata[i]);
      // }

      // console.log(this.userdata);
      this.ps.userdata=this.userdata[0];

      // console.log(this.ps.Userdetails);
      // this.ps.printUserdetails();
      this.authenticate=Object.keys(data).length;
      if(this.authenticate!=0){
       
        this.entrypage=false;
        this.userpage=true;
      }
    });
    
  }


  //Login and Register Control
  registerbutton=true;

  entry(){
    this.registerbutton=!this.registerbutton;
  }


}
