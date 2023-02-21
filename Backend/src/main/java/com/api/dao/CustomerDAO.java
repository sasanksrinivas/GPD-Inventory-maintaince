package com.api.dao;
import java.util.HashMap;
import java.util.List;

import com.api.model.User;

public interface CustomerDAO {

    public List<User> getAllCustomers();

	public void addCustomer(User customer);
	
	public User updateCustomer(User customer);
	
	public User getCustomer(int customerid);
	
	public void deleteCustomer(Integer customerId);
	
	public User loginCustomer(String email, String password);
	
	public User isCustomerExists(String email);

	public User getCustomerByCode(String referCode);

	public User getCustomerByEmail(String email);
	
	public User getCustomerByMobile(long mobile);

	public User isCustomerExistsMobile(String mobile);

	public int getLastedId(String table, String idColName);

	public User isReferCodeExist(String code);

	public HashMap<String, Object> getCustomer(String tableName, String columnName, String value);
	
}
