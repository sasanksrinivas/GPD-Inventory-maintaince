package com.api.controller;

import java.io.File;
import java.io.IOException;
import java.util.ArrayList;
import java.util.Arrays;
import java.util.Date;
import java.util.HashMap;
import java.util.LinkedHashMap;
import java.util.List;
import java.util.Map;
import javax.servlet.http.HttpServletRequest;
import org.jboss.logging.Logger;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpEntity;
import org.springframework.http.HttpHeaders;
import org.springframework.http.MediaType;
import org.springframework.stereotype.Controller;
import org.springframework.ui.Model;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.ResponseBody;
import org.springframework.web.servlet.ModelAndView;

import com.api.model.User;
import com.api.service.CustomerService;

@Controller
public class AppUrlController {

	private static final Logger logger = Logger.getLogger(AppUrlController.class);

	public AppUrlController() {
		System.out.println("TestingController ( )");
	}

	String reqParms;

	@ResponseBody
	@RequestMapping(value = "/")
	public Map orderReturnUrl(HttpServletRequest request) throws InterruptedException {

		long executionTime = System.currentTimeMillis();
		reqParms = "";
		request.getParameterMap().forEach((k, v) -> reqParms = reqParms + k + " = " + v[0].toString() + ", ");
		Map<String, String> response = new LinkedHashMap<>();

		try {

			response.put("result", "true");
			response.put("error", "false");

		}

		catch (Exception e) {

			response.put("result", "false");
			response.put("error", e.toString());

			logger.error("/webUrls API Called Request data [" + reqParms + "] ["
					+ String.valueOf(System.currentTimeMillis() - executionTime) + " millis] Server Error Line No. : "
					+ e.getStackTrace()[0].toString() + " Error : " + e.toString());

		}
		return response;
	}

}


