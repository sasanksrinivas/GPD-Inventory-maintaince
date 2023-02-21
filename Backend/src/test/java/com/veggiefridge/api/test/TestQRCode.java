package com.veggiefridge.api.test;

import static org.junit.jupiter.api.Assertions.*;

import java.sql.SQLException;

import org.junit.jupiter.api.AfterAll;
import org.junit.jupiter.api.AfterEach;
import org.junit.jupiter.api.BeforeAll;
import org.junit.jupiter.api.BeforeEach;
import org.junit.jupiter.api.Test;

import com.api.model.QrCode;
import com.api.service.QRCodeServiceImpl;

class TestQRCode {
	
	private static QRCodeServiceImpl service= null;
	
	@BeforeAll
	static void setUpBeforeClass() throws Exception {
	}

	/**
	 * @throws java.lang.Exception
	 */
	@AfterAll
	static void tearDownAfterClass() throws Exception {
	}

	/**
	 * @throws java.lang.Exception
	 */
	@BeforeEach
	void setUp() throws Exception {
		 service = new QRCodeServiceImpl();
	}

	/**
	 * @throws java.lang.Exception
	 */
	@AfterEach
	void tearDown() throws Exception {
	}
	
	@Test
	final void testInsertCustomer() throws SQLException {
	}

	@Test
	final void testGetCustomerqr() throws SQLException {
		QrCode customerqr = service.getCustomerqr("3");
		System.out.println(customerqr.toString()); 
	}

	@Test
	final static void testGenerate_qr(String image_name,String qrCodeData) throws SQLException {
	   service.generate_qr(image_name, qrCodeData);
//	   System.out.println(customerqr.toString()); 

	}

}
