import { Component, Input, OnInit } from '@angular/core';
import { pextraservice } from 'src/app/services/pextra.service';
import { users } from '../pextra.data.module';

@Component({
  selector: 'app-userpage',
  templateUrl: './userpage.component.html',
  styleUrls: ['./userpage.component.css']
})


export class UserpageComponent implements OnInit {

  constructor(private ps:pextraservice){}
 
  @Input() ctest: string='';//c to c passing

  Userdetails:any;
  
  page: number=0;

  ShoworHide:boolean=false;
 
  ngOnInit(): void{
    // console.log("test="+this.ctest); //c to c passing 
    // this.ps.getUser();
    this.get_userdetails();
    this.get_expenses();
    // console.log("user in usercomponent =");
    // console.log(this.ps.userdata);
  // this.User=this.ps.Userdetails;
  }

  get_userdetails(){
    this.ps.getUser().subscribe((data)=>{
      this.Userdetails=data;
      this.ps.userdata=data;
    });
    // this.Userdetails=this.ps.userdata;
    // console.log("get_userdetails called");
    // console.log(this.Userdetails);
  }

  get_expenses(){
    console.log("Get expenses called");
    this.ps.getexpenses().subscribe((data)=>{
      console.log(data);
    });
  }

  home(){
    // this.get_userdetails();
    this.page=0;
  }
  expenses(){
    this.page=1;
  }

  profile(){
    // this.ps.printUserdetails();
    this.page=2;
  }

  Ofeatures(){
    this.page=3;
  }

  logout(){
    window.location.reload();
  }

  //UPDATING
  update(user:users)
  {
    console.log("Reached UPDATE");
    // console.log(user);
    this.ps.reguser(user).subscribe((data)=>{
      console.log(data);
      if(data == null){
        console.log("Wrong INputs");
      }
      else
      {
      this.get_userdetails();
      this.home();
      }
      
    });
    
    
    // console.log("Exit UPDATE");
  }

  //sub-feature functions
  togglePassword(){
    this.ShoworHide=!this.ShoworHide;
  }

}

