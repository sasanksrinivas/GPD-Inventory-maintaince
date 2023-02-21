package com.api.service;

import java.util.HashMap;
import java.util.List;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;
import org.springframework.transaction.annotation.Transactional;

import com.api.dao.AssetsAllocationDao;
import com.api.dao.AssetsDAO;
import com.api.dao.CustomerDAO;
import com.api.model.Assets;
import com.api.model.AssetsAllocation;

@Service
@Transactional
public class AssetsAllocationServiceImpl implements AssetsAllocationService {

	@Autowired
	private AssetsAllocationDao allocationDao;
	


	@Override
	public List<AssetsAllocation> getAllAssetsAllocations() {
		// TODO Auto-generated method stub
		return allocationDao.getAllAssetsAllocations();
	}

	@Override
	public void addAssetsAllocation(AssetsAllocation assets) {
		// TODO Auto-generated method stub
		allocationDao.addAssetsAllocation(assets);
		
	}

	@Override
	public AssetsAllocation getAssetsAllocations(int assetsId) {
		// TODO Auto-generated method stub
		return allocationDao.getAssetsAllocations(assetsId);
	}

	@Override
	public AssetsAllocation updateAssetsAllocations(AssetsAllocation assets) {
		// TODO Auto-generated method stub
		return allocationDao.updateAssetsAllocations(assets);
	}

	@Override
	public void deleteAssetsAllocations(Integer assetsAllocationsId) {
		// TODO Auto-generated method stub
		allocationDao.deleteAssetsAllocations(assetsAllocationsId);
		
	}
	
	
	
	
	
	
	
	
	
	
	
	
	
	
	
	

}
