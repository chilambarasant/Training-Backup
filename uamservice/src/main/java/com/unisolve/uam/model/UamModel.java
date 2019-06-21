package com.unisolve.uam.model;

import java.util.Date;

import javax.persistence.Column;
import javax.persistence.Entity;
import javax.persistence.GeneratedValue;
import javax.persistence.GenerationType;
import javax.persistence.Id;
import javax.persistence.Table;
import javax.validation.constraints.NotNull;

import io.swagger.annotations.ApiModelProperty;

/**
 * @author sumilon.mondal
 *
 */
@Entity
@Table(name = "users")
public class UamModel {
	
	@Id
	@ApiModelProperty(notes = "User Id")
	@NotNull(message = "User Id cannot be empty")
	@Column(name = "user_id")
	private String userId;	

	@ApiModelProperty(notes = "User name")
	@Column(name = "user_name")
	private String userName;
	
	
	@ApiModelProperty(notes = "mobile no")
	@Column(name = "mobile_no")
	private String mobileNo;
	
	@ApiModelProperty(notes = "User type")
	@Column(name = "user_type")
	private String userType;
	
	@ApiModelProperty(notes = "Mail Id")
	@Column(name = "mail_id")
	private String mailId;
	
	public String getUserId() {
		return userId;
	}

	public void setUserId(String userId) {
		this.userId = userId;
	}

	public String getUserName() {
		return userName;
	}

	public void setUserName(String userName) {
		this.userName = userName;
	}

	public String getMobileNo() {
		return mobileNo;
	}

	public void setMobileNo(String mobileNo) {
		this.mobileNo = mobileNo;
	}

	public String getUserType() {
		return userType;
	}

	public void setUserType(String userType) {
		this.userType = userType;
	}

	public String getMailId() {
		return mailId;
	}

	public void setMailId(String mailId) {
		this.mailId = mailId;
	}
}
