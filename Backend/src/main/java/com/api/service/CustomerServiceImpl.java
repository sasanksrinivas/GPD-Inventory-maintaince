package com.api.service;

import java.util.HashMap;
import java.util.List;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;
import org.springframework.transaction.annotation.Transactional;

import com.api.dao.CustomerDAO;
import com.api.model.User;

@Service
@Transactional
public class CustomerServiceImpl implements CustomerService {

	@Autowired
	private CustomerDAO customerDAO;
    
	//getAllCustomer
	@Override
	@Transactional
	public List<User> getAllCustomers() {
		return customerDAO.getAllCustomers();
	}

	//addCustomer
	@Override
	@Transactional
	public void addCustomer(User customer) {
		customerDAO.addCustomer(customer);
	}

	//getCustomer
	@Override
	public User getCustomer(int customerid) {
		return customerDAO.getCustomer(customerid);
	}

	//getCustomer
	@Override
	public User getCustomerByEmail(String email) {
		return customerDAO.getCustomerByEmail(email);
	}
	
	//getCustomer
	@Override
	public User getCustomerByMobile(long mobile) {
		return customerDAO.getCustomerByMobile(mobile);
	}
	
	
	/*
	 * public void setCustomerDAO(CustomerDAO customerDAO) { this.customerDAO =
	 * customerDAO; }
	 */
     
	//updateCustomer
	@Override
	public User updateCustomer(User customer) {
		 return customerDAO.updateCustomer(customer);
	}

	// DeleteCustomer
	@Override
	@Transactional
	public void deleteCustomer(Integer customerId) {
//		return customerDAO.getCustomer(customerId);
//		 customerDAO.getCustomer(customerId);
		 customerDAO.deleteCustomer(customerId);
	}
	
	
	@Override
	public User loginCustomer(String email, String password) {
		User customer =  customerDAO.loginCustomer(email,password);
		System.out.println(customer.toString());
		return customer;
	}

	
	@Override
	public User isCustomerExists(String email) {
		User customer =  customerDAO.isCustomerExists(email);
		return customer;
	}

	@Override
	public User isCustomerExistsMobile(String mobile) {
		// TODO Auto-generated method stub
		return customerDAO.isCustomerExistsMobile(mobile);
	}

	@Override
	public int getLastedId(String table, String idColName) {
		// TODO Auto-generated method stub
		return customerDAO.getLastedId(table, idColName);
	}

	@Override
	public User isReferCodeExist(String code) {
		// TODO Auto-generated method stub
		return customerDAO.isReferCodeExist(code);
	}

	@Override
	public HashMap<String, Object> getCustomer(String tableName, String columnName, String value) {
		// TODO Auto-generated method stub
		return customerDAO.getCustomer(tableName, columnName, value);
	}

	@Override
	public User getCustomerByCode(String referCode) {
		// TODO Auto-generated method stub
		return customerDAO.getCustomerByCode(referCode);
	}

}
