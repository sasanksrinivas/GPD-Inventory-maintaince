package com.api.dao;

import java.util.Date;
import java.util.HashMap;
import java.util.List;
import org.hibernate.Criteria;
import org.hibernate.Query;
import org.hibernate.Session;
import org.hibernate.SessionFactory;
import org.hibernate.Transaction;
import org.hibernate.criterion.Restrictions;
import org.hibernate.loader.custom.Return;
import org.jboss.logging.Logger;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Repository;

import com.api.controller.CustomerController;
import com.api.model.Assets;
import com.api.model.User;

@Repository
public class CustomerDAOImpl implements CustomerDAO {

	@Autowired
	private SessionFactory sessionFactory;

	private static final Logger logger = Logger.getLogger(CustomerDAOImpl.class);


	// get all customers
	@Override
	@SuppressWarnings("unchecked")
	public List<User> getAllCustomers() {
		return sessionFactory.getCurrentSession().createQuery("from User").list();
	}

//	add customer
	@Override
	public void addCustomer(User customer) {
		Session session = sessionFactory.openSession();
		Transaction tx = session.beginTransaction();
		if (customer != null) {
			try {

				session.save(customer);
				tx.commit();
				session.close();
			} catch (Exception e) {
				tx.rollback();
				session.close();
				e.printStackTrace();
			}
		}

		// sessionFactory.getCurrentSession().saveOrUpdate(customer);
	}

//	get customer
	@Override
	public User getCustomer(int customerid) {
		return (User) sessionFactory.getCurrentSession().get(User.class, customerid);
	}

//	get customer By mobile
	@Override
	public User getCustomerByMobile(long mobile) {
		User customer = new User();
		Session session = sessionFactory.openSession();
		Transaction tx = session.beginTransaction();
		String hql = "from com.api.model.User as customer where customer.mobile=?";
		try {
			Query query = session.createQuery(hql);
			query.setParameter(0, mobile);
			customer = (User) query.uniqueResult();
			tx.commit();
			session.close();
		} catch (Exception e) {
			tx.rollback();
			session.close();
			e.printStackTrace();
		}
		return customer;
	}

//	get customer By email
	@Override
	public User getCustomerByEmail(String email) {
		User customer = new User();
		Session session = sessionFactory.openSession();
		Transaction tx = session.beginTransaction();
		String hql = "from com.api.model.User as customer where customer.email=?";
		try {
			Query query = session.createQuery(hql);
			query.setParameter(0, email);
			customer = (User) query.uniqueResult();
			tx.commit();
			session.close();
		} catch (Exception e) {
			tx.rollback();
			session.close();
			e.printStackTrace();
		}
		return customer;
	}

//	update customer
	@Override
	public User updateCustomer(User customer) {
		sessionFactory.getCurrentSession().update(customer);
		return customer;
	}

//	delete customer
	@Override
	public void deleteCustomer(Integer customerId) {
		User customer = (User) sessionFactory.getCurrentSession().load(User.class, customerId);
		if (null != customer) {
			this.sessionFactory.getCurrentSession().delete(customer);
		}

	}

	@Override
	public User loginCustomer(String code, String password) {
		String query = "FROM User WHERE code =:code and password =:password";
		return (User) sessionFactory.getCurrentSession().createQuery(query).setParameter("code", code)
				.setParameter("password", password).uniqueResult();
//		return(Customer) sessionFactory.getCurrentSession().createQuery(query).setParameter("email", email)
//				.setParameter("password", password).uniqueResult();

	}

	@Override
	public User isCustomerExists(String email) {
		return (User) sessionFactory.getCurrentSession().createQuery("FROM User WHERE email =:email")
				.setParameter("email", email).uniqueResult();
	}

	@Override
	public User isCustomerExistsMobile(String mobile) {
		String query = "FROM User WHERE mobile =:mobile";
		return (User) sessionFactory.getCurrentSession().createQuery(query)
				.setParameter("mobile", Long.parseLong(mobile)).uniqueResult();
	}

	@Override
	public int getLastedId(String table, String idColName) {
		return (int) sessionFactory.getCurrentSession().createSQLQuery("SELECT MAX(" + idColName + ") FROM " + table)
				.list().get(0);
	}

	@Override
	public User isReferCodeExist(String code) {
		return (User) sessionFactory.getCurrentSession().createQuery("FROM User WHERE code =:referCode")
				.setParameter("referCode", code).uniqueResult();
	}


	@Override
	public HashMap<String, Object> getCustomer(String tableName, String columnName, String value) {

		User customer = new User();
		Assets wallet = new Assets();
		HashMap<String, Object> result = new HashMap<String, Object>();

		Object value1;
		if (columnName.toLowerCase().contains("id")) {
			value1 = Integer.parseInt(value);
		} else {
			value1 = value;
		}



		if (tableName.toLowerCase().contains("customer")) {
			String query = "FROM User WHERE " + columnName + " =:" + columnName;
			customer = (User) sessionFactory.getCurrentSession().createQuery(query).setParameter(columnName, value1)
					.uniqueResult();
			wallet = (Assets) sessionFactory.getCurrentSession().createQuery("from Wallet where customer = :customer")
					.setParameter("customer", customer).uniqueResult();
			result.put("customer", customer);
			result.put("wallet", wallet);

			return result;
		} else {
			result.put("customer", customer);
			result.put("wallet", wallet);
			return result;
		}

	}

	@Override
	public User getCustomerByCode(String referCode) {
		// TODO Auto-generated method stub
		return null;
	}

}
