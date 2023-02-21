package com.api.service;

import java.util.HashMap;
import java.util.List;

import com.api.model.User;

public interface CustomerService {
	
	public List<User> getAllCustomers();
	
	public void addCustomer(User customer);
	
	public User getCustomer(int customerid);
	
	public User updateCustomer(User customer);
	
	public void deleteCustomer(Integer customerId);
	
	public User getCustomerByEmail(String email);

	public User getCustomerByCode(String referCode);
	
	public User getCustomerByMobile(long mobile);

	public User loginCustomer(String email, String password);
	
	public User isCustomerExists(String email);

	public User isCustomerExistsMobile(String mobile);

	public User isReferCodeExist(String code);

	public int getLastedId(String table, String idColName);

	public HashMap<String, Object> getCustomer(String tableName, String columnName, String value);

}

