package com.api.utils;

import java.security.SecureRandom;
import java.text.DecimalFormat;
import java.text.ParseException;
import java.text.SimpleDateFormat;
import java.time.ZoneId;
import java.time.ZonedDateTime;
import java.time.format.DateTimeFormatter;
import java.util.ArrayList;
import java.util.Calendar;
import java.util.Date;
import java.util.LinkedHashMap;
import java.util.List;
import java.util.Map;
import java.util.Random;


public class Util {

	public static DecimalFormat df = new DecimalFormat();

	public static String createRandomCode(int codeLength) {
		char[] chars = "abcdefghijklmnopqrstuvwxyz1234567890".toCharArray();
		StringBuilder sb = new StringBuilder();
		Random random = new SecureRandom();
		for (int i = 0; i < codeLength; i++) {
			char c = chars[random.nextInt(chars.length)];
			sb.append(c);
		}
		return sb.toString();
	}

	public static Date nextDateOfPerticularDay(Date date, int Day) {

		Calendar c1 = Calendar.getInstance();
		c1.setTime(date);
		while (true) {
			c1.add(Calendar.DATE, 1);
			if (c1.get(Calendar.DAY_OF_WEEK) == Day) {
				break;
			}
		}
		return c1.getTime();
	}

	public static String convertDateToStringVfFormat(Date date) {
		return new SimpleDateFormat(WebConstant.SIMPLE_DATE_FORMAT).format(date);
	}

	public static Date convertStringToDateVfFormat(String date) throws ParseException {
		return new SimpleDateFormat(WebConstant.SIMPLE_DATE_FORMAT).parse(date);
	}

	public static Date incDecDate(Date date, int noOfDays) {
		Calendar cal = Calendar.getInstance();
		cal.setTime(date);
		cal.add(Calendar.DAY_OF_MONTH, noOfDays);
		return cal.getTime();
	}

	public static float roundFloat(float in) {
		return ((int) ((in * 100f) + 0.5f)) / 100f;
	}

	public static Float convertTwoDigitNumber(Object data) {

		if (data.getClass().getSimpleName().equalsIgnoreCase("String")) {
			return Float.parseFloat(String.format("%.2f", Float.parseFloat(data.toString())));

		} else {
			return Float.parseFloat(String.format("%.2f", data));
		}
	}

	public static java.sql.Date getCurrentIndianDate() throws ParseException {
		return new java.sql.Date(new SimpleDateFormat("yyyy-MM-dd HH:mm:ss").parse(DateTimeFormatter
				.ofPattern("yyyy-MM-dd HH:mm:ss z").format(ZonedDateTime.now(ZoneId.of("Asia/Kolkata")))).getTime());
	}

	public static boolean checkDeliveryTimings(String startTime, String endTime) {

		String pattern = "hh:mm aa";
		SimpleDateFormat sdf = new SimpleDateFormat(pattern);

		try {

			Date currentTime = sdf.parse(sdf.format(new Date()));
			Date workingStartTime = sdf.parse(startTime);
			Date workingEndTime = sdf.parse(endTime);

			if (currentTime.before(workingEndTime) && currentTime.after(workingStartTime)) {
				return true;
			} else {
				return false;
			}
		} catch (ParseException e) {
			e.printStackTrace();
		}
		return false;
	}

	public static float calculateFinalPriceAfterDiscount(float finalPrice, float discount) {
		return Float.parseFloat(String.format("%.2f", finalPrice - ((finalPrice * discount) / 100)));
	}

}
