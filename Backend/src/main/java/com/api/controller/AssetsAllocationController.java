package com.api.controller;

import java.io.IOException;
import java.net.URLDecoder;
import java.text.ParseException;
import java.text.SimpleDateFormat;
import java.time.ZoneId;
import java.time.ZonedDateTime;
import java.time.format.DateTimeFormatter;
import java.util.ArrayList;
import java.util.Date;
import java.util.HashMap;
import java.util.LinkedHashMap;
import java.util.List;
import java.util.Map;
import java.util.Properties;

import javax.mail.Session;
import javax.mail.Transport;
import javax.mail.internet.MimeMessage;
import javax.servlet.http.HttpServletRequest;
import javax.servlet.http.HttpSession;
import javax.validation.Valid;

import org.apache.log4j.Logger;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.core.io.InputStreamSource;
import org.springframework.mail.SimpleMailMessage;
import org.springframework.mail.javamail.JavaMailSender;
import org.springframework.mail.javamail.MimeMessageHelper;
import org.springframework.mail.javamail.MimeMessagePreparator;
import org.springframework.security.crypto.bcrypt.BCryptPasswordEncoder;
import org.springframework.stereotype.Controller;
import org.springframework.ui.ModelMap;
import org.springframework.validation.BindingResult;
import org.springframework.web.bind.annotation.ModelAttribute;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestMethod;
import org.springframework.web.bind.annotation.RequestParam;
import org.springframework.web.bind.annotation.ResponseBody;
import org.springframework.web.multipart.commons.CommonsMultipartFile;
import org.springframework.web.servlet.ModelAndView;

import com.api.model.Assets;
import com.api.model.AssetsAllocation;
import com.api.model.User;
import com.api.service.AssetsAllocationService;
import com.api.service.AssetsService;
import com.api.service.CustomerService;
import com.api.utils.GetLogger;
import com.api.utils.SHA;
import com.api.utils.Util;

@Controller
@RequestMapping(value = "/assetsAllocation")
public class AssetsAllocationController {

	private static final Logger logger = GetLogger.setLogger(AssetsAllocationController.class);

	public AssetsAllocationController() {
		System.out.println("AssetsAllocation Controller()");
	}

	///////////////////////////////////////////////////////////////
	/////////////////////////////////////////////// Assets API's

	@Autowired
	private AssetsAllocationService assetsService;

	@Autowired
	private AssetsService assetService;

	String reqParms = "";

	@ResponseBody
	@RequestMapping(value = "/addOrUpdate")
	public Map newAsset(@RequestBody AssetsAllocation assetsAllocation) {

		reqParms = "";
		reqParms = assetsAllocation.toString();
		Map<String, Object> response = new LinkedHashMap<>();
		boolean alreadyRequested = false;
		try {

			if (assetsAllocation.getAssetsAllocationId() != 0) {

				AssetsAllocation existingAssetsAllocation = assetsService
						.getAssetsAllocations(assetsAllocation.getAssetsAllocationId());
				Assets existingAsset = assetService.getAssets(existingAssetsAllocation.getAssetId());

				if (assetsAllocation.getStatus().toLowerCase().equals("approve")) {
					existingAsset.setAssetsOnRent(existingAsset.getAssetsOnRent() + 1);
					existingAsset.setAssetAvailaleUnits(existingAsset.getAssetAvailaleUnits() - 1);
					assetService.updateAssets(existingAsset);
				}
				
				if (assetsAllocation.getStatus().toUpperCase().equals("RETURN_APPROVED")) {
					existingAsset.setAssetsOnRent(existingAsset.getAssetsOnRent() -1);
					existingAsset.setAssetAvailaleUnits(existingAsset.getAssetAvailaleUnits() + 1);
					assetService.updateAssets(existingAsset);
				}
				

				existingAssetsAllocation.setAllocatedDate(new Date().toString());
				existingAssetsAllocation.setStatus(assetsAllocation.getStatus());
				assetsService.updateAssetsAllocations(existingAssetsAllocation);

			} else {

				Assets existingAsset = assetService.getAssets(assetsAllocation.getAssetId());

				List<AssetsAllocation> allocations = assetsService.getAllAssetsAllocations();
				
				for (AssetsAllocation assetsAllocation2 : allocations) {
					if (assetsAllocation2.getUserId() == assetsAllocation.getUserId()
							&& existingAsset.getAssetName().equalsIgnoreCase(assetsAllocation2.getAssetName())) {
						alreadyRequested = true;
					}
				}

				
				if (alreadyRequested) {
					response.put("result", "false");
					response.put("error", "Already Requested");
				} else {

					if (existingAsset.getAssetAvailaleUnits() == 0) {
						response.put("result", "false");
						response.put("error", "Stock Not Available");
					} else {
						assetsAllocation.setAssetCategory(existingAsset.getAssetCategory());
						assetsAllocation.setAssetName(existingAsset.getAssetName());
						assetsAllocation.setAssetDescription(existingAsset.getDescription());
						assetsService.addAssetsAllocation(assetsAllocation);

					}
				}
			}

			response.put("result", "true");
			response.put("error", "null");
			response.put("assetAllocation",
					assetsService.getAssetsAllocations(assetsAllocation.getAssetsAllocationId()));
			
			if (alreadyRequested) {
				response.put("result", "false");
				response.put("error", "Already Requested");
			} 
		} catch (Exception e) {

			e.printStackTrace();
			response.put("result", "false");
			response.put("error", e.toString());
			response.put("userId", null);

		}

		return response;

	}

	@ResponseBody
	@RequestMapping(value = "/getAssetAllocation")
	public Map getAsset(HttpServletRequest request) {

		long executionTime = System.currentTimeMillis();

		Map<String, Object> response = new LinkedHashMap<>();

		try {

			String id = request.getParameter("assetsAllocationId");

			AssetsAllocation asset = assetsService.getAssetsAllocations(Integer.parseInt(id));

			response.put("result", "true");
			response.put("error", "null");
			response.put("assetAllocation", asset);

		} catch (Exception e) {
			e.printStackTrace();
			response.put("result", "false");
			response.put("error", e.toString());
			response.put("assetAllocation", null);
		}

		executionTime = System.currentTimeMillis() - executionTime;

		if ("true".equals(response.get("result")) && "null".equals(response.get("error")))
			logger.info("Get Allocation  API Called API Request data " + request.toString() + " [" + executionTime
					+ " millis] Server response " + response.toString());
		else
			logger.warn("Get Allocation  API Called API Request data " + request.toString() + " [" + executionTime
					+ " millis] Server response " + response.toString());

		return response;

	}

	

	public static java.sql.Date getCurrentIndianDate() throws ParseException {
		return new java.sql.Date(new SimpleDateFormat("yyyy-MM-dd HH:mm:ss").parse(DateTimeFormatter
				.ofPattern("yyyy-MM-dd HH:mm:ss z").format(ZonedDateTime.now(ZoneId.of("Asia/Kolkata")))).getTime());
	}
	
	public static Date convertStringToDateVfFormat(String date) throws ParseException {
		return new SimpleDateFormat("yyyy-MM-dd").parse(date);
	}
	

	@ResponseBody
	@RequestMapping(value = "/listAssetsAllocation")
	public List<AssetsAllocation> listAssetsAllocation(HttpServletRequest request) throws ParseException {

		long executionTime = System.currentTimeMillis();
		List<AssetsAllocation> assets = new ArrayList<AssetsAllocation>();

		Map<String, Object> response = new LinkedHashMap<>();
		
		Date todaysDate = getCurrentIndianDate();
		

		try {

			String key = request.getParameter("key").toLowerCase();
			String value = request.getParameter("value").toLowerCase();

			List<AssetsAllocation> allAssets = assetsService.getAllAssetsAllocations();

			for (AssetsAllocation asset : allAssets) {
				
				try {
					
					Date dueDate = convertStringToDateVfFormat(asset.getDueDate());
					
					if (dueDate.equals(todaysDate)) {
						asset.setExpiryStatus("today");
					}else if (dueDate.after(todaysDate)) {
						asset.setExpiryStatus("yetToCome");
					}else if (dueDate.before(todaysDate)) {
						asset.setExpiryStatus("expired");						
					}
					
					
				}catch (Exception e) {
					e.printStackTrace();	
					asset.setExpiryStatus("error");						

				}

				if (key.toLowerCase().contains("assetid")) {
					if (String.valueOf(asset.getAssetId()).contains(value)) {
						assets.add(asset);
					}
				}
				if (key.toLowerCase().contains("userid")) {
					if (String.valueOf(asset.getUserId()).contains(value)) {
						assets.add(asset);
					}
				}
				if (key.toLowerCase().contains("category")) {
					if (asset.getAssetCategory().equalsIgnoreCase(value)) {
						assets.add(asset);
					}

				}
				if (key.toLowerCase().contains("status")) {
					if (asset.getStatus().equalsIgnoreCase(value)) {
						assets.add(asset);
					}

				}
				
				
			}

			response.put("result", "true");
			response.put("error", "null");
			response.put("assetAllocation", assets);

		} catch (Exception e) {
			e.printStackTrace();
			response.put("result", "false");
			response.put("error", e.toString());
			response.put("assetAllocation", null);
		}

		executionTime = System.currentTimeMillis() - executionTime;

		if ("true".equals(response.get("result")) && "null".equals(response.get("error")))
			logger.info("All AssetAllocation API Called API Request data " + request.toString() + " [" + executionTime
					+ " millis] Server response " + response.toString());
		else
			logger.warn("All AssetAllocation API Called API Request data " + request.toString() + " [" + executionTime
					+ " millis] Server response " + response.toString());

		return assets;

	}

	
	

	@ResponseBody
	@RequestMapping(value = "/listAssetsAllocationByStatus")
	public List<AssetsAllocation> listAssetsAllocationByStatus(HttpServletRequest request) throws ParseException {

		long executionTime = System.currentTimeMillis();
		List<AssetsAllocation> assets = new ArrayList<AssetsAllocation>();

		Map<String, Object> response = new LinkedHashMap<>();
		
		Date todaysDate = getCurrentIndianDate();
		

		try {

			String userid = request.getParameter("userid").toLowerCase();
			String status = request.getParameter("status").toLowerCase();

			List<AssetsAllocation> allAssets = assetsService.getAllAssetsAllocations();

			for (AssetsAllocation asset : allAssets) {
				
				try {
					
					Date dueDate = convertStringToDateVfFormat(asset.getDueDate());
					
					if (dueDate.equals(todaysDate)) {
						asset.setExpiryStatus("today");
					}else if (dueDate.after(todaysDate)) {
						asset.setExpiryStatus("yetToCome");
					}else if (dueDate.before(todaysDate)) {
						asset.setExpiryStatus("expired");						
					}
					
					
				}catch (Exception e) {
					e.printStackTrace();	
					asset.setExpiryStatus("error");						

				}

					if (String.valueOf(asset.getUserId()).contains(userid) && asset.getStatus().equalsIgnoreCase(status)) {
						assets.add(asset);
					}				
				
				
			}

			response.put("result", "true");
			response.put("error", "null");
			response.put("assetAllocation", assets);

		} catch (Exception e) {
			e.printStackTrace();
			response.put("result", "false");
			response.put("error", e.toString());
			response.put("assetAllocation", null);
		}

		executionTime = System.currentTimeMillis() - executionTime;

		if ("true".equals(response.get("result")) && "null".equals(response.get("error")))
			logger.info("All AssetAllocation API Called API Request data " + request.toString() + " [" + executionTime
					+ " millis] Server response " + response.toString());
		else
			logger.warn("All AssetAllocation API Called API Request data " + request.toString() + " [" + executionTime
					+ " millis] Server response " + response.toString());

		return assets;

	}

}