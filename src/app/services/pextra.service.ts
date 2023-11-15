import { Injectable } from "@angular/core";
import {  users } from "../pextra/pextra.data.module";
import { HttpClient } from "@angular/common/http"

@Injectable({
    providedIn: 'root'
})

export class pextraservice{
  
   
  constructor(private hc:HttpClient){}

  // Userdetails={ 
  //   uid: 0,
  //   mobile: '',
  //   name: '',
  //   uname: "",
  //   pwd: '',
  //   salary: 0
  // };

  userdata : any;
  expensedata : any;

  testadd="http://localhost:8000/record_expense"
  registeruser="http://localhost:8000/register"
  userauth="http://localhost:8000/user-auth"
  expenses="http://localhost:8000/expenses"
  users="http://localhost:8000/useid/"

  printUserdetails(){
    console.log("Userdetails");
    console.log(this.userdata);
  }


  // adate(selectedDate: test) {
  //   // console.log("thedi ="+selectedDate.thedhi);
  //   return this.httpclient.post(this.testadd,selectedDate);
  // }

  reguser(user: users) { //console.log(user);
      return this.hc.post(this.registeruser,user);
  }

  authuser(username:string,password:string){
    const body={uname:username,pwd:password};
    // console.log("body = "+body);
    return this.hc.post(this.userauth,body);
    // .pipe(
    //   map((data)=>{
    //      const Userdetails=[];
    //      for(const key in data){
    //       Userdetails.push({data[key]});
    //      }
         
    //   }
    // ));
  }

  getUser(){
    return this.hc.get(this.users+this.userdata.uid);
    // .subscribe((data)=>{
    //   this.userdata=data;
    //   // this.Userdetails=this.userdata;
    //   console.log("getUser called");
    //   console.log(this.userdata);
    // });
  }

  getexpenses(){
    return this.hc.get(this.expenses);
  }

}