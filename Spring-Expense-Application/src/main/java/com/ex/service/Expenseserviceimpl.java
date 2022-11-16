package com.ex.service;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import com.ex.repository.ExpenseRepository;
import com.ex.model.Expense;


@Service
public class Expenseserviceimpl implements Expenseservice {
 
	@Autowired
	ExpenseRepository expenserepository;
	
	@Override
	public Expense findById(long id) {
		// TODO Auto-generated method stub
		return expenserepository.findById(id).get();
	}

	@Override
	public List<Expense> getAllexpense() {
		// TODO Auto-generated method stub
		return expenserepository.findAll();
	}

	@Override
	public Expense addexpense(Expense expense) {
		// TODO Auto-generated method stub
		return expenserepository.save(expense);
	}

	@Override
	public void deleteExpenseById(long id) {
		// TODO Auto-generated method stub
		expenserepository.deleteById(id);
	}

	@Override
	public Expense updateExpenseById(Expense expense, long id) {
		// TODO Auto-generated method stub
		Expense toUpdate = expenserepository.findById(id).get();
		toUpdate.setName(expense.getName());
		toUpdate.setPrice(expense.getPrice());

		toUpdate.setRemarks(expense.getRemarks());
		toUpdate.setPayment_type(expense.getPayment_type());
		return expenserepository.save(toUpdate);
	}
	
	
}
