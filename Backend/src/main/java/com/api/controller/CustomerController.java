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

import com.api.model.User;
import com.api.service.CustomerService;
import com.api.utils.GetLogger;
import com.api.utils.SHA;
import com.api.utils.Util;

@Controller
@RequestMapping(value = "/user")
public class CustomerController {

	private static final Logger logger = GetLogger.setLogger(CustomerController.class);

	public CustomerController() {
		System.out.println("Customer Controller()");
	}

	///////////////////////////////////////////////////////////////
	/////////////////////////////////////////////// Customer API's

	@Autowired
	private CustomerService custservice;

	String reqParms = "";

	@ResponseBody
	@RequestMapping(value = "/newUser")
	public Map newCustomer(@RequestBody User user) {

		reqParms = "";
		reqParms = user.toString();
		Map<String, Object> response = new LinkedHashMap<>();

		try {

			user.setDateOfRegistration(Util.getCurrentIndianDate().toString());
			custservice.addCustomer(user);
			
//			if (user.getRole().equalsIgnoreCase("student")) {
//				user.setCode("S"+user.getUserId());
//			}
//			
//			if (user.getRole().equalsIgnoreCase("faculty")) {
//				user.setCode("F"+user.getUserId());
//			}
//			
//			custservice.updateCustomer(user);

			response.put("result", "true");
			response.put("error", "null");
			response.put("user", custservice.getCustomer(user.getUserId()));
		} catch (Exception e) {

			response.put("result", "false");
			response.put("error", e.toString());
			response.put("user", null);

		}

		return response;

	}

	
	@ResponseBody
	@RequestMapping(value = "/updateUser")
	public Map updateUser(@RequestBody User user) {

		reqParms = "";
		reqParms = user.toString();
		Map<String, Object> response = new LinkedHashMap<>();

		try {

			custservice.updateCustomer(user);

			response.put("result", "true");
			response.put("error", "null");
			response.put("user", custservice.getCustomer(user.getUserId()));
		} catch (Exception e) {

			response.put("result", "false");
			response.put("error", e.toString());
			response.put("user", null);

		}

		return response;

	}

	
	
	@ResponseBody
	@RequestMapping(value = "/login")
	public Map loginCustomer(HttpServletRequest request) {

		long executionTime = System.currentTimeMillis();

		Map<String, Object> response = new LinkedHashMap<>();

		try {

			String code = request.getParameter("code");
			String password = request.getParameter("password");

			System.out.println(
					"Code : " + code + "\n Pass : " + password + "\n Dec :" + request.getParameter("password"));
			User customerData = custservice.loginCustomer(code, password);

			if (customerData != null) {
				response.put("result", "true");
				response.put("error", "null");
				response.put("user", customerData);
			}

			else {
				response.put("result", "false");
				response.put("error", "null");
				response.put("user", null);
			}

		} catch (Exception e) {
			e.printStackTrace();
			response.put("result", "false");
			response.put("error", e.toString());
			response.put("user", null);
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
	@RequestMapping(value = "/listUsers")
	public List<User> listUsers(HttpServletRequest request) {

		long executionTime = System.currentTimeMillis();
		List<User> users = new ArrayList<User>();

		Map<String, Object> response = new LinkedHashMap<>();

		try {

			String category = request.getParameter("category");
			List<User> allUsers = custservice.getAllCustomers();

			for (User user : allUsers) {
				if (user.getRole().equalsIgnoreCase(category)) {
					users.add(user);
				}
			}

			response.put("result", "true");
			response.put("error", "null");
			response.put("users", users);

		} catch (Exception e) {
			e.printStackTrace();
			response.put("result", "false");
			response.put("error", e.toString());
			response.put("users", null);
		}

		executionTime = System.currentTimeMillis() - executionTime;

		if ("true".equals(response.get("result")) && "null".equals(response.get("error")))
			logger.info("All Users API Called API Request data " + request.toString() + " [" + executionTime
					+ " millis] Server response " + response.toString());
		else
			logger.warn("All Users API Called API Request data " + request.toString() + " [" + executionTime
					+ " millis] Server response " + response.toString());

		return users;

	}

}