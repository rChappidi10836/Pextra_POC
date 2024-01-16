package com.example.Pextra.repository;

import org.springframework.data.repository.CrudRepository;

import com.example.Pextra.entity.expenses;

public interface ExpensesRepository extends CrudRepository<expenses,Integer> {

}
