package com.api.model;

import java.io.Serializable;
import java.util.Date;

import javax.persistence.Column;
import javax.persistence.Entity;
import javax.persistence.GeneratedValue;
import javax.persistence.GenerationType;
import javax.persistence.Id;
import javax.persistence.ManyToOne;
import javax.persistence.OneToOne;
import javax.persistence.Table;
import javax.persistence.Transient;

import org.hibernate.validator.constraints.Email;
import org.hibernate.validator.constraints.NotEmpty;

import com.fasterxml.jackson.annotation.JsonFormat;

@Entity
@Table(name = "Users")

public class User {
	@Id
	@GeneratedValue(strategy = GenerationType.AUTO)
	private int userId;

	@Column(name = "name")
	private String name;

	@Column(name = "code")
	private String code;

	@Column(name = "mobile")
	private long mobile;

	@Column(name = "role")
	private String role;

	@Column(name = "email")
	private String email;

	@Column(name = "password")
	private String password;
	
	@Column(name = "department")
	private String department;

	@Column(name = "dateOfRegistration")
	private String dateOfRegistration;
	
	

	public String getDepartment() {
		return department;
	}

	public void setDepartment(String department) {
		this.department = department;
	}

	public int getUserId() {
		return userId;
	}

	public void setUserId(int userId) {
		this.userId = userId;
	}

	public String getName() {
		return name;
	}

	public void setName(String name) {
		this.name = name;
	}

	public String getCode() {
		return code;
	}

	public void setCode(String code) {
		this.code = code;
	}

	public long getMobile() {
		return mobile;
	}

	public void setMobile(long mobile) {
		this.mobile = mobile;
	}

	public String getRole() {
		return role;
	}

	public void setRole(String role) {
		this.role = role;
	}

	public String getEmail() {
		return email;
	}

	public void setEmail(String email) {
		this.email = email;
	}

	public String getPassword() {
		return password;
	}

	public void setPassword(String password) {
		this.password = password;
	}

	public String getDateOfRegistration() {
		return dateOfRegistration;
	}

	public void setDateOfRegistration(String dateOfRegistration) {
		this.dateOfRegistration = dateOfRegistration;
	}

	@Override
	public String toString() {
		return "User [userId=" + userId + ", name=" + name + ", code=" + code + ", mobile=" + mobile + ", role=" + role
				+ ", email=" + email + ", password=" + password + ", dateOfRegistration=" + dateOfRegistration + "]";
	}

}