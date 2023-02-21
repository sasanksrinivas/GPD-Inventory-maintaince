package com.api.service;

import java.util.HashMap;
import java.util.List;

import com.api.model.Assets;

public interface AssetsService {
	
	public List<Assets> getAllAssets();
	
	public void addAssets(Assets assets);
	
	public Assets getAssets(int assetsId);
	
	public Assets updateAssets(Assets assets);
	
	public void deleteAssets(Integer assetsId);
	
}

