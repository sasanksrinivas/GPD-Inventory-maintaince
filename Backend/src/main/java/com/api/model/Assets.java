package com.api.model;

import java.io.Serializable;
import java.util.Date;

import javax.persistence.Column;
import javax.persistence.Entity;
import javax.persistence.GeneratedValue;
import javax.persistence.GenerationType;
import javax.persistence.Id;
import javax.persistence.JoinColumn;
import javax.persistence.OneToOne;
import javax.persistence.Table;

import com.fasterxml.jackson.annotation.JsonFormat;
import com.fasterxml.jackson.databind.annotation.JsonDeserialize;
import com.fasterxml.jackson.databind.annotation.JsonSerialize;
import com.fasterxml.jackson.databind.deser.std.DateDeserializers.DateDeserializer;

@Entity
@Table(name = "Assets")
public class Assets implements Serializable {

	@Id
	@GeneratedValue(strategy = GenerationType.AUTO)
	private int assetsId;

	@Column(name = "assetName")
	private String assetName;

	@Column(name = "assetAddedDate")
	private String assetAddedDate;

	@Column(name = "assetTotalUnits")
	private int assetTotalUnits;

	@Column(name = "assetAvailaleUnits")
	private int assetAvailaleUnits;
	
	@Column(name = "assetsOnRent")
	private int assetsOnRent;

	@Column(name = "assetCategory")
	private String assetCategory;

	@Column(name = "imgPath")
	private String imgPath;

	@Column(name = "description")
	private String description;
	
	@Column(name = "modelName")
	private String modelName;

	
	
	
	public String getModelName() {
		return modelName;
	}

	public void setModelName(String modelName) {
		this.modelName = modelName;
	}

	public int getAssetAvailaleUnits() {
		return assetAvailaleUnits;
	}

	public void setAssetAvailaleUnits(int assetAvailaleUnits) {
		this.assetAvailaleUnits = assetAvailaleUnits;
	}

	public String getDescription() {
		return description;
	}

	public void setDescription(String description) {
		this.description = description;
	}

	public String getImgPath() {
		return imgPath;
	}

	public void setImgPath(String imgPath) {
		this.imgPath = imgPath;
	}

	public int getAssetsId() {
		return assetsId;
	}

	public void setAssetsId(int assetsId) {
		this.assetsId = assetsId;
	}

	public String getAssetName() {
		return assetName;
	}

	public void setAssetName(String assetName) {
		this.assetName = assetName;
	}

	public String getAssetAddedDate() {
		return assetAddedDate;
	}

	public void setAssetAddedDate(String assetAddedDate) {
		this.assetAddedDate = assetAddedDate;
	}

	public int getAssetTotalUnits() {
		return assetTotalUnits;
	}

	public void setAssetTotalUnits(int assetTotalUnits) {
		this.assetTotalUnits = assetTotalUnits;
	}

	public int getAssetsOnRent() {
		return assetsOnRent;
	}

	public void setAssetsOnRent(int assetsOnRent) {
		this.assetsOnRent = assetsOnRent;
	}

	public String getAssetCategory() {
		return assetCategory;
	}

	public void setAssetCategory(String assetCategory) {
		this.assetCategory = assetCategory;
	}

	@Override
	public String toString() {
		return "Assets [assetsId=" + assetsId + ", assetName=" + assetName + ", assetAddedDate=" + assetAddedDate
				+ ", assetTotalUnits=" + assetTotalUnits + ", assetsOnRent=" + assetsOnRent + ", assetCategory="
				+ assetCategory + "]";
	}

}
