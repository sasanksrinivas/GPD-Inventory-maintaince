<!DOCTYPE html>

<html lang="en" dir="ltr">
<%@ taglib uri="http://java.sun.com/jsp/jstl/core" prefix="c"%>
<%@ taglib uri="http://www.springframework.org/tags" prefix="spring"%>
<%@ taglib uri="http://www.springframework.org/tags/form" prefix="form"%>
<%@ taglib prefix="fmt" uri="http://java.sun.com/jsp/jstl/fmt"%>
<%@ taglib uri="http://www.springframework.org/security/tags"
	prefix="security"%>
<%@ taglib uri="http://java.sun.com/jsp/jstl/functions" prefix="fn"%>


<head>
<meta charset="utf-8">
<link rel="icon" href="images/VeggieFridge.ico" type="image/x-icon">
<title>VeggieFridge AdminDashBoard</title>
<meta name="viewport" content="width=device-width, initial-scale=1.0">
<spring:url var="css" value="/resources/css"></spring:url>
<link href="${css}/adminform.css" rel="stylesheet">

<script
	src="https://ajax.googleapis.com/ajax/libs/jquery/3.5.1/jquery.min.js"></script>

<script src="https://code.jquery.com/jquery-3.2.1.slim.min.js"
	integrity="sha384-KJ3o2DKtIkvYIK3UENzmM7KCkRr/rE9/Qpg6aAZGJwFDMVNA/GpGFF93hXpG5KkN"
	crossorigin="anonymous"></script>

<script
	src="https://cdnjs.cloudflare.com/ajax/libs/popper.js/1.12.9/umd/popper.min.js"
	integrity="sha384-ApNbgh9B+Y1QKtv3Rn7W3mgPxhU9K/ScQsAP7hUibX39j7fakFPskvXusvfa0b4Q"
	crossorigin="anonymous"></script>
	
	<!-- Import lib -->
<script
	src="https://cdnjs.cloudflare.com/ajax/libs/Chart.js/2.9.3/Chart.min.js"></script>

<link rel="stylesheet" type="text/css"
	href="https://cdnjs.cloudflare.com/ajax/libs/Chart.js/2.9.3/Chart.min.css">

<link rel="stylesheet" type="text/css"
	href="fontawesome-free/css/all.min.css">

<link
	href="https://fonts.googleapis.com/css2?family=Roboto&display=swap"
	rel="stylesheet">

<script src='https://kit.fontawesome.com/a076d05399.js'
	crossorigin='anonymous'></script>

<script src="https://code.jquery.com/jquery-3.4.1.min.js"></script>

<script
	src="https://cdnjs.cloudflare.com/ajax/libs/crypto-js/3.1.2/rollups/aes.js"></script>
<script src="https://code.jquery.com/jquery-1.12.4.min.js"></script>
<script src="https://code.jquery.com/jquery-1.7.1.min.js"></script>
<script src="https://code.jquery.com/jquery-1.4.1.min.js"></script>
<script src="https://ajax.googleapis.com/ajax/libs/jquery/3.5.1/jquery.min.js"></script>
<style type="text/css">


#spinner:not([hidden]) {
  position: fixed;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  display: flex;
  justify-content: center;
  align-items: center;
  z-index:1;
  overflow: auto; /* Enable scroll if needed */
  background-color: rgb(0, 0, 0); /* Fallback color */
  background-color: rgba(0, 0, 0, 0.4); /* Black w/ opacity */
}

#spinner::after {
  content: "";
  width: 80px;
  height: 80px;
  border: 2px solid #f3f3f3;
  border-top: 3px solid green;
  border-radius: 100%;
  will-change: transform;
  animation: spin 1s infinite linear
}

@keyframes spin {
  from {
    transform: rotate(0deg);
  }
  to {
    transform: rotate(360deg);
  }
}

#sucMsg{
  color: #270;
  background-color: #DFF2BF;
  margin-top:50px;
  text-align:center;
  margin: 10px 0;
  padding:10px;
  border-radius: 3px 3px 3px 3px;
  display:none;
}
@media ( max-width : 700px) {
	.dataHeading {
		margin-top: 100px;
	}
}

</style>

</head>

<body>

	<div class="container">
		
		<div class="text">Enter Money In Wallet</div>
               
            <form id="getCustInfoForm"> 
			<div class="form-row" style="margin-top:30px;">
				<div class="input-data">
					<input type="text" id="customerId" required>
					<div class="underline"></div>
					<label for="" style="color: green;">Search For Customer</label> 
				</div>
				
				<div class="input-data" style="margin-top:20px;">
					<button class="button" id="customer" name="customerid">By Customer ID</button>
					<button class="button" id="customer" name="email">By Email</button>
					<button class="button" id="order" name="orderId">By Order Id</button>
				</div>
			</div>
		    </form> 
	    
 <div class="dataHeading">Customer Info</div>
		
 <div  id="sucMsg">
 </div>
 <div hidden id="spinner"></div>
		
		<form  id="myForm">
		<input type="hidden" id="custId" required>
  
			<div class="form-row">
				<div class="input-data">
					<input type="text" id="firstName" required>
					<div class="underline"></div>
					<label for="">First Name</label>
				</div>
				<div class="input-data">
					<input type="text" id="lastName"  required>
					<div class="underline"></div>
					<label for="">Last Name</label>
				</div>
			</div>

			<div class="form-row">
				<div class="input-data">
					<input type="text" id="email"  required>
					<div class="underline"></div>
					<label for="">Email Address</label>
				</div>
				<div class="input-data">
					<input type="text" id="mobileNo"  required>
					<div class="underline"></div>
					<label for="">Mobile Number</label>
				</div>
			</div>

			 <div class="form-row">
				<!-- <div class="input-data">
					<input type="text" id="city" required>
					<div class="underline"></div>
					<label for="">City</label>
				</div> -->
				<div class="input-data">
					<input type="text" id="Adrs"  required>
					<div class="underline"></div>
					<label for="">Address</label>
				</div>
			</div>


			<div class="dataHeading" style="margin-bottom:30px;">Wallet Info</div>
			
			<input type="hidden" name="walletId" id="walletId" required readonly="readonly">
			<input type="hidden"  id="Code" value="${walletPassCode}"  required readonly="readonly">
			<input type="hidden"  id="maxAmount" value="${walletMaxAmount}"  required readonly="readonly">
			<input type="hidden"  id="adminId" value="${customerId}">
			
			<div class="form-row">
				
				<div class="input-data">
					 <input type="text"  id="walletAmount"  required readonly="readonly">
					 <div class="underline"></div>
					 <label for="" style="margin-bottom:30px;">Wallet Money</label>
					<span id="walletAmountError"></span>
				</div>
				
				<div class="input-data">
					<input type="text" name="walletAmount" id="enterAmount" value="0">
					<div class="underline"></div>
					<label for="">Enter Amount</label>
					<span id="enterAmountError"></span>
				</div>
				
			</div>
			
			<div class="form-row">
				
				<div class="input-data">
					<input type="text" name="passCode" id="passCode">
					<div class="underline"></div>
					<label for="">Enter PassCode</label>
					<span style="color:red;">${error}</span>
					<span id="passCodeError"></span>
				</div>
				
				<div class="input-data">
					<input type="text" name="comment" id="comment">
					<div class="underline"></div>
					<label for="">Enter Comment</label>
					<%-- <span style="color:red;">${error}</span>
					<span id="passCodeError"></span> --%>
				</div>
			</div>
			 <br/>
			<div style='float: center;'>
			<input type="submit" value="Add Money" class="bottombutton" id="formSubmit">
			<input type="reset" value="Reset" class="bottombutton">
			<input type="button" value="Back" onclick="history.back()" class="bottombutton">
			</div>
					
				</form>
				</div>
			
	  
	   <script type="text/javascript">
	   $("document").ready(function () {	   
		    $(".button").click(function () {

		    	  const spinner = document.getElementById("spinner");

		    	    var rupee = "&#x20B9;";
	    	        var Id = $("#customerId").val();
			        var colName = this.name;
					var tabName = this.id;
					var rupee="&#x20B9;";
					/* alert(Id);
					alert(colName);
					alert(tabName); */
					
		        $('#getCustInfoForm').submit(function (e) {
		            e.preventDefault();
		            
		            if (Id == '') {
						$("#customerIdError").html("Enter <b>Enter Input</b>");
						$("#customerIdError").css("color", "red");
						$("#customerIdError").show();
					}
					
					else{
						 spinner.removeAttribute('hidden');
						  fetch('https://www.mocky.io/v2/5185415ba171ea3a00704eed?mocky-delay=5000ms')
						    .then(response => response.json())
						    .then(data => {
						      spinner.setAttribute('hidden', '');
						      console.log(data)
						    });
						    
						$.ajax({
							type :"GET",
							contentType : "application/json",
							url : "${pageContext.request.contextPath}/adminDash/getCustomerForAddChangeOrderAmount?id="
								 +Id+"&columnName="+colName+"&tableName="+tabName,
							dataType : 'json',
							success : function(data){

								/* alert(data); */
							   $("#custId").val(data["customer"]["customerid"]); 
							    $("#firstName").val(data["customer"]["firstName"]);
								$("#lastName").val(data["customer"]["lastName"]);
								$("#email").val(data["customer"]["email"]);
								$("#mobileNo").val(data["customer"]["mobile"]);
								$("#Adrs").val(data["customer"]["address"]);
								$("#walletId").val(data["wallet"]["walletId"]);
								$("#walletAmount").val(data["wallet"]["totalAmountBalance"]); 
							},
							});
						$("#customerIdError").hide();
						}
		        });
		    }); 
		}); 
	   </script>
	   

	<!-- ............Script Code.......... -->
	<script>
		$(document).ready(
				function() {

  	                $("#enterAmountError").hide();
					$("#passCodeError").hide();
					$("#walletAmountError").hide();

					var enterAmountError = false;
					var passCodeError = false;
					var walletAmountError = false;

					$("#enterAmount").keyup(function() {
						validate_enterAmount();
					});

					$("#passCode").keyup(function() {
						validate_passCode();
					});

					$("#walletAmount").keyup(function() {
						validate_walletAmount();
					});
				
					//enterAmount
					function validate_enterAmount() {
						var val = $("#enterAmount").val();
						//only upper/lower case chars atleast 3 char and at max 8 chars
						var exp = /^([1-9][0-9]{0,2}|1000)$/;

						if (val == '') {
							$("#enterAmountError").html("Enter <b>Amount</b>");
							$("#enterAmount").css("color", "red");
							$("#enterAmount").show();
							enterAmountError = false;
						} 
						else if (!exp.test(val)) {
							$("#enterAmountError").html("Enter <b>Valid Amount</b>");
							$("#enterAmountError").css("color", "red");
							$("#enterAmountError").show();
							enterAmountError = false;
						} 

						else {
							$("#enterAmountError").hide();
							enterAmountError = true;
						}
						return enterAmountError;
					}

					//passCode
					function validate_passCode() {
						var val = $("#passCode").val();
						//only upper/lower case chars atleast 3 char and at max 8 chars
						var exp = $("#Code").val();

						if (val == '') {
							$("#passCodeError").html("Enter <b>PassCode</b>");
							$("#passCodeError").css("color", "red");
							$("#passCodeError").show();
							passCodeError = false;
						} 
						else if (exp!=val) {
							$("#passCodeError").html("Enter <b>Valid PassCode</b>");
							$("#passCodeError").css("color", "red");
							$("#passCodeError").show();
							passCodeError = false;
						} 
						else {
							$("#passCodeError").hide();
							passCodeError = true;
						}
						return passCodeError;
					}


					//walletAmount
					function validate_walletAmount() {
						var val = $("#walletAmount").val();
						//only upper/lower case chars atleast 3 char and at max 8 chars
						var exp = $("#maxAmount").val();

						 if (val>exp) {
							$("#walletAmountError").html("Max <b> Amount "+exp+" Only</b>");
							$("#walletAmountError").css("color", "red");
							$("#walletAmountError").show();
							walletAmountError = false;
						} 
						else {
							$("#walletAmountError").hide();
							walletAmountError = true;
						}
						return walletAmountError;
					}

					
					//---------ON SUBMIT--------------//
					$("#myForm").submit(
							function(e) {
								 e.preventDefault();

								validate_enterAmount();
								validate_passCode();
								validate_walletAmount();

								 const spinner = document.getElementById("spinner");
								 var walletId = $("#walletId").val();
								 var enterAmount = $("#enterAmount").val();
								 var passCode = $("#passCode").val();
								 var customerName = $("#firstName").val();
								 var adminId = $("#adminId").val();
								 var comment = $("#comment").val();
								 var customerId = $("#custId").val();

								if (enterAmountError && passCodeError && walletAmountError){
									
									spinner.removeAttribute('hidden');
									  fetch('https://www.mocky.io/v2/5185415ba171ea3a00704eed?mocky-delay=5000ms')
									    .then(response => response.json())
									    .then(data => {
									      spinner.setAttribute('hidden', '');
									      console.log(data)
									    });
								
									
									  $.ajax({
											type :"GET",
											contentType : "application/json",
											url : "${pageContext.request.contextPath}/adminDash/updateCustomerWallet?walletId="
												 +walletId+"&amount="+enterAmount+"&adminId="+adminId+"&comment="+comment+"&customerId="+customerId,
											dataType : 'json',
											success : function(response){
												  $("#walletAmount").val(response["walletAmount"]);
												  $("#enterAmount,#passCode").trigger("reset");
												  $("#enterAmount,#passCode,#comment").val('');
										          // $("#sucMsg").show();
										          //$("#sucMsg").html("Rs "+enterAmount+" Has Been Added InTo "+customerName+"'s Wallet SuccessFully").show();
                                                  alert("SuccessFully!! Rs "+enterAmount+" Has Been Added InTo "+customerName+"'s Wallet.");
													},
											
											});
									return true;
									/* setTimeout(function() {
										 $('#sucMsg').fadeOut();
										}, 10000 ); */
								}
								
								else{
									return false;
								}
								
								

							});//form submit function
					

				});// documnet.ready function 
	           </script>
	           
			
</body>
</html>