package com.example.Pextra.repository;

import java.util.List;

import org.springframework.data.repository.CrudRepository;

import com.example.Pextra.entity.users;

public interface UsersRepository extends CrudRepository<users,Integer> {
	
	Iterable<users> findByUnameAndPwd(String uname, String pwd);
}
