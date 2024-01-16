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
    this.get_userdetails;
    this.get_expenses;
    console.log("user in usercomponent ="+this.ps.Userdetails);
  // this.User=this.ps.Userdetails;
  }

  get_userdetails(){
    this.Userdetails=this.ps.Userdetails;
  }

  get_expenses(){
    
  }

  home(){
    this.page=0;
  }
  expenses(){
    this.page=1;
  }

  profile(){
    this.page=2;
  }

  Ofeatures(){
    this.page=3;
  }

  logout(){
    window.location.reload();
  }


  //sub-feature functions
  togglePassword(){
    this.ShoworHide=!this.ShoworHide;
  }

}
