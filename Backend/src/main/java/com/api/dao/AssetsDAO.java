package com.api.dao;
import java.util.HashMap;
import java.util.List;

import com.api.model.Assets;

public interface AssetsDAO {

public List<Assets> getAllAssets();
	
	public void addAssets(Assets assets);
	
	public Assets getAssets(int assetsId);
	
	public Assets updateAssets(Assets assets);
	
	public void deleteAssets(Integer assetsId);
	
}
