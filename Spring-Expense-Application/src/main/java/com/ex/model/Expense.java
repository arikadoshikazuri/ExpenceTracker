package com.ex.model;

import javax.persistence.Entity;
import javax.persistence.GeneratedValue;
import javax.persistence.GenerationType;
import javax.persistence.Id;
import javax.persistence.Table;

@Entity
@Table(name = "employees")
public class 	Expense {
	@Id
	@GeneratedValue(strategy=GenerationType.AUTO)
	
	private long id;	
	private String name;
	private int price;

	private String payment_type;
	private String remarks;
	
	
	public Expense() {
		super();
		// TODO Auto-generated constructor stub
	}
	public Expense( String name, int price,  String payment_type, String remarks) {
		super();		
		this.name = name;
		this.price = price;

		this.payment_type = payment_type;
		this.remarks = remarks;
		
	}
	
	
	public long getId() {
		return id;
	}
	public void setId(long id) {
		this.id = id;
	}
	public String getName() {
		return name;
	}
	public void setName(String name) {
		this.name = name;
	}
	public int getPrice() {
		return price;
	}
	public void setPrice(int price) {
		this.price = price;
	}


	public void setPayment_type(String payment_type) {
		this.payment_type = payment_type;
	}
	public String getRemarks() {
		return remarks;
	}

	public String getPayment_type() {
		return payment_type;
	}

	public void setRemarks(String remarks) {
		this.remarks = remarks;
	}
	@Override
	public String toString() {
		return "Book [id=" + id + ", name=" + name + ", price=" + price  + ", payment_type="
				+ payment_type + ", remarks=" + remarks +"]";
	}
	
	

}
