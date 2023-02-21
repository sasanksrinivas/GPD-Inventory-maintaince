package com.api.service;

import java.util.HashMap;
import java.util.List;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;
import org.springframework.transaction.annotation.Transactional;

import com.api.dao.AssetsDAO;
import com.api.dao.CustomerDAO;
import com.api.model.Assets;

@Service
@Transactional
public class AssetsServiceImpl implements AssetsService {

	@Autowired
	private AssetsDAO assetsDAO;

	@Override
	public List<Assets> getAllAssets() {
		// TODO Auto-generated method stub
		return assetsDAO.getAllAssets();
	}

	@Override
	public void addAssets(Assets assets) {
		// TODO Auto-generated method stub'
		assetsDAO.addAssets(assets);

	}

	@Override
	public Assets getAssets(int assetsId) {
		// TODO Auto-generated method stub
		return assetsDAO.getAssets(assetsId);
	}

	@Override
	public Assets updateAssets(Assets assets) {
		// TODO Auto-generated method stub
		return assetsDAO.updateAssets(assets);
	}

	@Override
	public void deleteAssets(Integer assetsId) {
		// TODO Auto-generated method stub
		assetsDAO.deleteAssets(assetsId);

	}

}
