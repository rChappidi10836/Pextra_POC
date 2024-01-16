package com.example.Pextra.controllers;

import java.util.Optional;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.PutMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import com.example.Pextra.entity.expenses;
import com.example.Pextra.entity.test;
import com.example.Pextra.entity.users;
import com.example.Pextra.repository.ExpensesRepository;
import com.example.Pextra.repository.UsersRepository;
import com.example.Pextra.repository.testrepository;
import com.fasterxml.jackson.databind.ser.std.IterableSerializer;

@RestController
@RequestMapping("")
@CrossOrigin
public class Pextracontroller {
	
	@Autowired
	testrepository tr;
	
	@Autowired
	ExpensesRepository er;
	
	@Autowired
	UsersRepository ur;
	
	
	@GetMapping("/display")
	public String display() {
		return "success";
	}
	
	
//	@PostMapping("/record_expense")
//	public void Record_expense(@RequestBody test t) {
//		
////		System.out.println("thedhi = "+t.getThedhi());
//		tr.save(t);
//		recess();
//	}
//	
//	@GetMapping("/record_sucess")
//	public String recess() {
//		return "recorded expense successfully";
//	}
	
	
	
	@PostMapping("/register")
	public void Register_User(@RequestBody users u) {
		ur.save(u);
	}
	
	@GetMapping("/expenses")
	public Iterable<expenses> Get_Expenses(){
		Iterable<expenses> Expenses= er.findAll();
		return Expenses;
	}
	
	
	@PutMapping("/addexpense")
	public void Add_Expense(@RequestBody expenses e) {
		er.save(e);
	}
	
	@GetMapping("/users")
	public Iterable<users> Get_Users() {
		Iterable<users> Users=ur.findAll();
		return Users;
	}
	
	@GetMapping("/useid/{k}")
	public Optional<users> Get_User_by_id(@PathVariable("k") int k){
		Optional<users> user= ur.findById(k);
		return user;
	}
	
	@PostMapping("/user-auth")
	public Iterable<users> Check_User(@RequestBody users up) {
		Iterable<users> cu= ur.findByUnameAndPwd(up.getUname(), up.getPwd());
		return cu;
	}
	
	
	
}
