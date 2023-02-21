package com.api.controller;

import java.io.IOException;
import java.net.URLDecoder;
import java.text.ParseException;
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
@RequestMapping(value = "/assets")
public class AssetsController {

	private static final Logger logger = GetLogger.setLogger(AssetsController.class);

	public AssetsController() {
		System.out.println("Assets Controller()");
	}

	///////////////////////////////////////////////////////////////
	/////////////////////////////////////////////// Assets API's

	@Autowired
	private AssetsService assetsService;

	@Autowired
	private AssetsAllocationService assetsAllocationService;

	@Autowired
	private CustomerService customerService;

	String reqParms = "";

	@ResponseBody
	@RequestMapping(value = "/addOrUpdate")
	public Map newAsset(@RequestBody Assets assets) {

		reqParms = "";
		reqParms = assets.toString();
		Map<String, Object> response = new LinkedHashMap<>();

		try {

			if (assets.getAssetsId() != 0) {
				assetsService.updateAssets(assets);
			} else {
				assets.setAssetAddedDate(Util.getCurrentIndianDate().toString());
				assets.setAssetAvailaleUnits(assets.getAssetTotalUnits());
				assets.setAssetsOnRent(0);
				assetsService.addAssets(assets);
			}

			response.put("result", "true");
			response.put("error", "null");
			response.put("asset", assetsService.getAssets(assets.getAssetsId()));

		} catch (Exception e) {

			response.put("result", "false");
			response.put("error", e.toString());
			response.put("asset", null);

		}

		return response;

	}

	@ResponseBody
	@RequestMapping(value = "/getAsset")
	public Map getAsset(HttpServletRequest request) {

		long executionTime = System.currentTimeMillis();

		Map<String, Object> response = new LinkedHashMap<>();

		try {

			String id = request.getParameter("assetsId");

			Assets asset = assetsService.getAssets(Integer.parseInt(id));

			response.put("result", "true");
			response.put("error", "null");
			response.put("asset", asset);

		} catch (Exception e) {
			e.printStackTrace();
			response.put("result", "false");
			response.put("error", e.toString());
			response.put("asset", null);
		}

		executionTime = System.currentTimeMillis() - executionTime;

		if ("true".equals(response.get("result")) && "null".equals(response.get("error")))
			logger.info("Login API Called API Request data " + request.toString() + " [" + executionTime
					+ " millis] Server response " + response.toString());
		else
			logger.warn("Login API Called API Request data " + request.toString() + " [" + executionTime
					+ " millis] Server response " + response.toString());

		return response;

	}

	@ResponseBody
	@RequestMapping(value = "/getAssetAllocatedHistory")
	public Map getAssetAllocatedHistory(HttpServletRequest request) {

		long executionTime = System.currentTimeMillis();

		Map<String, Object> response = new LinkedHashMap<>();

		try {

			String id = request.getParameter("assetsId");

			Assets asset = assetsService.getAssets(Integer.parseInt(id));

			List<AssetsAllocation> allocations = assetsAllocationService.getAllAssetsAllocations();
			List<Map<String, Object>> allMaps = new ArrayList<Map<String, Object>>();

			for (AssetsAllocation assetsAllocation : allocations) {

				if (assetsAllocation.getAssetId() == asset.getAssetsId()) {

					User user = customerService.getCustomer(assetsAllocation.getUserId());
					Map<String, Object> assestsMap = new LinkedHashMap<>();
					assestsMap.put("allocation", assetsAllocation);
					assestsMap.put("user", user);
					allMaps.add(assestsMap);
				}

			}

			response.put("result", "true");
			response.put("error", "null");
			response.put("asset", asset);
			response.put("allAllocations", allMaps);

		} catch (Exception e) {
			e.printStackTrace();
			response.put("result", "false");
			response.put("error", e.toString());
			response.put("asset", null);
			response.put("allAllocations", null);

		}

		executionTime = System.currentTimeMillis() - executionTime;

		if ("true".equals(response.get("result")) && "null".equals(response.get("error")))
			logger.info("Login API Called API Request data " + request.toString() + " [" + executionTime
					+ " millis] Server response " + response.toString());
		else
			logger.warn("Login API Called API Request data " + request.toString() + " [" + executionTime
					+ " millis] Server response " + response.toString());

		return response;

	}

	@ResponseBody
	@RequestMapping(value = "/allAssets")
	public List<Assets> allAssets(HttpServletRequest request) {

		long executionTime = System.currentTimeMillis();
		List<Assets> allAssets = new ArrayList<Assets>();

		Map<String, Object> response = new LinkedHashMap<>();

		try {

			allAssets = assetsService.getAllAssets();

			response.put("result", "true");
			response.put("error", "null");
			response.put("assets", allAssets);

		} catch (Exception e) {
			e.printStackTrace();
			response.put("result", "false");
			response.put("error", e.toString());
			response.put("assets", null);
		}

		executionTime = System.currentTimeMillis() - executionTime;

		if ("true".equals(response.get("result")) && "null".equals(response.get("error")))
			logger.info("All assets API Called API Request data " + request.toString() + " [" + executionTime
					+ " millis] Server response " + response.toString());
		else
			logger.warn("All assets API Called API Request data " + request.toString() + " [" + executionTime
					+ " millis] Server response " + response.toString());

		return allAssets;

	}

	@ResponseBody
	@RequestMapping(value = "/listAssets")

	public List<Assets> listUsers(HttpServletRequest request) {

		long executionTime = System.currentTimeMillis();
		List<Assets> assets = new ArrayList<Assets>();

		Map<String, Object> response = new LinkedHashMap<>();

		try {

			String key = request.getParameter("key").toLowerCase();
			String value = request.getParameter("value").toLowerCase();

			List<Assets> allAssets = assetsService.getAllAssets();

			for (Assets asset : allAssets) {

				if (key.toLowerCase().contains("name")) {
					if (asset.getAssetName().toLowerCase().contains(value)) {
						assets.add(asset);
					}
				}
				if (key.toLowerCase().contains("category")) {
					if (asset.getAssetCategory().toLowerCase().contains(value)) {
						assets.add(asset);
					}

				}
			}

			response.put("result", "true");
			response.put("error", "null");
			response.put("assets", assets);

		} catch (Exception e) {
			e.printStackTrace();
			response.put("result", "false");
			response.put("error", e.toString());
			response.put("assets", null);
		}

		executionTime = System.currentTimeMillis() - executionTime;

		if ("true".equals(response.get("result")) && "null".equals(response.get("error")))
			logger.info("All assets API Called API Request data " + request.toString() + " [" + executionTime
					+ " millis] Server response " + response.toString());
		else
			logger.warn("All assets API Called API Request data " + request.toString() + " [" + executionTime
					+ " millis] Server response " + response.toString());

		return assets;

	}

}