package com.api.model;

import java.util.Date;

import javax.persistence.Column;
import javax.persistence.Entity;
import javax.persistence.GeneratedValue;
import javax.persistence.GenerationType;
import javax.persistence.Id;
import javax.persistence.ManyToOne;
import javax.persistence.OneToMany;
import javax.persistence.OneToOne;
import javax.persistence.Table;
import javax.persistence.Transient;

import com.fasterxml.jackson.annotation.JsonFormat;

@Entity
@Table(name = "AssetsAllocation")

public class AssetsAllocation {

	@Id
	@GeneratedValue(strategy = GenerationType.AUTO)
	private int assetsAllocationId;

	@Column(name = "assetId")
	private int assetId;

	@Column(name = "userId")
	private int userId;

	@Column(name = "requestedDate")
	private String requestedDate;

 	@Column(name = "dueDate")
	private String dueDate;

	@Column(name = "allocatedDate")
	private String allocatedDate;

	@Column(name = "assetName")
	private String assetName;

	@Column(name = "assetCategory")
	private String assetCategory;

	@Column(name = "assetDescription")
	private String assetDescription;
	
	@Column(name = "status")
	private String status="PENDING";

	
	
	@Transient
	private String expiryStatus;
	
	
		
	
	

	public String getExpiryStatus() {
		return expiryStatus;
	}

	public void setExpiryStatus(String expiryStatus) {
		this.expiryStatus = expiryStatus;
	}

	public String getAssetDescription() {
		return assetDescription;
	}

	public void setAssetDescription(String assetDescription) {
		this.assetDescription = assetDescription;
	}

	public int getAssetsAllocationId() {
		return assetsAllocationId;
	}

	public void setAssetsAllocationId(int assetsAllocationId) {
		this.assetsAllocationId = assetsAllocationId;
	}

	public int getAssetId() {
		return assetId;
	}

	public void setAssetId(int assetId) {
		this.assetId = assetId;
	}

	public int getUserId() {
		return userId;
	}

	public void setUserId(int userId) {
		this.userId = userId;
	}

	public String getRequestedDate() {
		return requestedDate;
	}

	public void setRequestedDate(String requestedDate) {
		this.requestedDate = requestedDate;
	}

	public String getDueDate() {
		return dueDate;
	}

	public void setDueDate(String dueDate) {
		this.dueDate = dueDate;
	}

	public String getAllocatedDate() {
		return allocatedDate;
	}

	public void setAllocatedDate(String allocatedDate) {
		this.allocatedDate = allocatedDate;
	}

	public String getAssetName() {
		return assetName;
	}

	public void setAssetName(String assetName) {
		this.assetName = assetName;
	}

	public String getAssetCategory() {
		return assetCategory;
	}

	public void setAssetCategory(String assetCategory) {
		this.assetCategory = assetCategory;
	}

	public String getStatus() {
		return status;
	}

	public void setStatus(String status) {
		this.status = status;
	}

	@Override
	public String toString() {
		return "AssetsAllocation [assetsAllocationId=" + assetsAllocationId + ", assetId=" + assetId + ", userId="
				+ userId + ", requestedDate=" + requestedDate + ", dueDate=" + dueDate + ", allocatedDate="
				+ allocatedDate + ", assetName=" + assetName + ", assetCategory=" + assetCategory + ", status=" + status
				+ "]";
	}

	
	
}