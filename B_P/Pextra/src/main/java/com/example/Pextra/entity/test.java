package com.example.Pextra.entity;

import java.sql.Date;

import jakarta.persistence.*;

@Entity
public class test {
	
	@Id
	@GeneratedValue(strategy=GenerationType.IDENTITY)
	int num;
	Date thedhi;
	
	
	public int getNo() {
		return num;
	}
	public void setNo(int no) {
		this.num = no;
	}
	public Date getThedhi() {
		return thedhi;
	}
	public void setThedhi(Date thedhi) {
		this.thedhi = thedhi;
	}
	
	
}
