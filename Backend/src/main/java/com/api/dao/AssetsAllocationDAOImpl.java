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
import com.api.model.AssetsAllocation;
import com.api.model.User;

@Repository
public class AssetsAllocationDAOImpl implements AssetsAllocationDao {

	@Autowired
	private SessionFactory sessionFactory;

	private static final Logger logger = Logger.getLogger(AssetsAllocationDAOImpl.class);

	@Override
	public List<AssetsAllocation> getAllAssetsAllocations() {
		// TODO Auto-generated method stub
		return sessionFactory.getCurrentSession().createQuery("from AssetsAllocation ORDER BY assetsAllocationId DESC").list();
	}

	@Override
	public void addAssetsAllocation(AssetsAllocation assets) {
		// TODO Auto-generated method stub
		Session session = sessionFactory.openSession();
		Transaction tx = session.beginTransaction();

		session.save(assets);
		tx.commit();
		session.close();

	}

	@Override
	public AssetsAllocation getAssetsAllocations(int assetsId) {
		// TODO Auto-generated method stub
		return (AssetsAllocation) sessionFactory.getCurrentSession().get(AssetsAllocation.class, assetsId);
	}

	@Override
	public AssetsAllocation updateAssetsAllocations(AssetsAllocation assets) {
		// TODO Auto-generated method stub
		sessionFactory.getCurrentSession().update(assets);
		return assets;
	}

	@Override
	public void deleteAssetsAllocations(Integer assetsAllocationsId) {
		AssetsAllocation assets = (AssetsAllocation) sessionFactory.getCurrentSession().load(AssetsAllocation.class,
				assetsAllocationsId);
		this.sessionFactory.getCurrentSession().delete(assets);
	}

}
