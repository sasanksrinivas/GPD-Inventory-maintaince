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
public class AssetsDAOImpl implements AssetsDAO {

	@Autowired
	private SessionFactory sessionFactory;

	private static final Logger logger = Logger.getLogger(AssetsDAOImpl.class);


	@Override
	public List<Assets> getAllAssets() {
		// TODO Auto-generated method stub
		return sessionFactory.getCurrentSession().createQuery("from Assets").list();
	}

	@Override
	public void addAssets(Assets assets) {
		// TODO Auto-generated method stub
		Session session = sessionFactory.openSession();
		Transaction tx = session.beginTransaction();

		session.save(assets);
		tx.commit();
		session.close();

	}

	@Override
	public Assets getAssets(int assetsId) {
		// TODO Auto-generated method stub
		return (Assets) sessionFactory.getCurrentSession().get(Assets.class, assetsId);

 	}

	@Override
	public Assets updateAssets(Assets assets) {
		// TODO Auto-generated method stub
		sessionFactory.getCurrentSession().update(assets);
		return assets;

	}

	@Override
	public void deleteAssets(Integer assetsId) {
		Assets assets = (Assets) sessionFactory.getCurrentSession().load(Assets.class, assetsId);
		this.sessionFactory.getCurrentSession().delete(assets);

	}

}
