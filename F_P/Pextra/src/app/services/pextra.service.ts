import { Injectable } from "@angular/core";
import { test, users } from "../pextra/pextra.data.module";
import { HttpClient, HttpHeaders } from "@angular/common/http"
import { map } from "rxjs/operators";

@Injectable({
    providedIn: 'root'
})

export class pextraservice{
  
   
  constructor(private httpclient:HttpClient){}
 
  Userdetails={ 
    uid: 0,
    mobile: '',
    name: '',
    uname: "",
    pwd: '',
    salary: 0
  };

  testadd="http://localhost:8000/record_expense"
  registeruser="http://localhost:8000/register"
  userauth="http://localhost:8000/user-auth"
  expenses="http://localhost:8000/expenses"

  printUserdetails(){
    console.log("Service userdetails");
    console.log(this.Userdetails);
  }


  adate(selectedDate: test) {
    // console.log("thedi ="+selectedDate.thedhi);
    return this.httpclient.post(this.testadd,selectedDate);
  }

  reguser(user: users) { //console.log(user);
      return this.httpclient.post(this.registeruser,user);
  }

  authuser(username:string,password:string){
    const body={uname:username,pwd:password};
    // console.log("body = "+body);
    return this.httpclient.post(this.userauth,body);
    // .pipe(
    //   map((data)=>{
    //      const Userdetails=[];
    //      for(const key in data){
    //       Userdetails.push({data[key]});
    //      }
         
    //   }
    // ));
  }

  getexpenses(){
    return this.httpclient.get(this.expenses);
  }

}