package com.ex.repository;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

import com.ex.model.Expense;


@Repository
public interface ExpenseRepository extends JpaRepository<Expense,Long>{

}
