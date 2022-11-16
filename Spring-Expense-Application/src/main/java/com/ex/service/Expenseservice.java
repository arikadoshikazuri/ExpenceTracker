package com.ex.service;

import java.util.List;


import com.ex.model.Expense;

public interface Expenseservice {
	
	public Expense findById(long id);

	public List<Expense> getAllexpense();

	public Expense addexpense(Expense expense);

	public void deleteExpenseById(long id);

	public Expense updateExpenseById(Expense expense, long id);	

}

