<%@ page language="java" contentType="text/html; charset=ISO-8859-1"
	pageEncoding="ISO-8859-1" isELIgnored="false"%>

<%@ taglib uri="http://java.sun.com/jsp/jstl/core" prefix="c"%>
<%@ taglib uri="http://www.springframework.org/tags" prefix="spring"%>
<%@ taglib prefix="form" uri="http://www.springframework.org/tags/form"%>

<!DOCTYPE html>
<html>
<head>

<link rel="icon" href="images/VeggieFridge.ico" type="image/x-icon">
<meta name="viewport" content="width=device-width, initial-scale=1">
<script src="https://code.jquery.com/jquery-3.2.1.slim.min.js"
	integrity="sha384-KJ3o2DKtIkvYIK3UENzmM7KCkRr/rE9/Qpg6aAZGJwFDMVNA/GpGFF93hXpG5KkN"
	crossorigin="anonymous"></script>
<script
	src="https://cdnjs.cloudflare.com/ajax/libs/popper.js/1.12.9/umd/popper.min.js"
	integrity="sha384-ApNbgh9B+Y1QKtv3Rn7W3mgPxhU9K/ScQsAP7hUibX39j7fakFPskvXusvfa0b4Q"
	crossorigin="anonymous"></script>

<style>
@import
	url('https://fonts.googleapis.com/css2?family=Montserrat:wght@200;400;600&display=swap')
	;

* {
	list-style: none;
	font-family: 'Montserrat', sans-serif;
	margin: 0;
	padding: 0;
	box-sizing: border-box;
}

.errormsg {
	text-align: center;
	padding: 15px;
	margin-bottom: 20px;
	border: 1px solid red;
	border-radius: 4px;
	color: red; /* #31708f */
	/* background-color:#4CAF50; */ /* #d9edf7 */
	border-color: red;
	max-width: 450px;;
	margin: 0 auto;
}

.msg {
	text-align: center;
	padding: 15px;
	margin-bottom: 20px;
	border: 1px solid #4CAF50;
	border-radius: 4px;
	color: green; /* #31708f */
	/* background-color:#4CAF50; */ /* #d9edf7 */
	border-color: #4CAF50;
	max-width: 450px;;
	margin: 0 auto;
}

/* Full-width input fields */
input[type=text], input[type=password] {
	width: 100%;
	padding: 12px 20px;
	margin: 10px 0;
	display: inline-block;
	/*  border: 1px solid #ccc; */
	box-sizing: border-box;
	border: 2px solid #f0f0f0;
}

/* Full-width input fields */
input[type=email] {
	width: 100%;
	padding: 12px 20px;
	margin: 8px 0;
	display: inline-block;
	/* border: 1px solid #ccc; */
	box-sizing: border-box;
	border: 2px solid #f0f0f0;
}

/* Set a style for all buttons */
button {
	background-color: #4CAF50;
	color: white;
	padding: 14px 20px;
	margin: 8px 0;
	border: none;
	cursor: pointer;
	width: 100%;
	border-radius: 50px;
}

button:hover {
	opacity: 0.8;
}

/* Extra styles for the cancel button */
.cancelbtn {
	width: auto;
	padding: 10px 18px;
	background-color: #4CAF50;
	border-radius: 50px;
}

/* Center the image and position the close button */
.imgcontainer {
	text-align: center;
	margin: 24px 0 12px 0;
	position: relative;
}

.container {
	padding: 16px;
}

span.psw {
	float: right;
	padding-top: 16px;
}

/* The Modal (background) */
.modal {
	display: block; /* Hidden by default */
	position: relative; /* Stay in place */
	left: 50;
	top: 50;
}

/* Modal Content/Box */
.modal-content {
	background-color: #fefefe;
	border: 1px solid #ddd;
	width: 80%; /* Could be more or less, depending on screen size */
	border-radius: 5px;
	box-shadow: 0 2px 5px rgba(0, 0, 0, 0.3);
	padding: 20px 30px;
	max-width: 450px;;
	margin: 0 auto;
}

/* Add Zoom Animation */
.animate {
	-webkit-animation: animatezoom 0.6s;
	animation: animatezoom 0.6s
}

/* Change styles for span and cancel button on extra small screens */
@media screen and (max-width: 300px) {
	span.psw {
		display: block;
		float: none;
	}
	.cancelbtn {
		width: 100%;
	}
}
</style>
</head>

<body>


	<div class="modal">

		<c:if test="${not empty msg}">
			<div class="msg">${msg}</div>
		</c:if>

		<c:if test="${not empty SPRING_SECURITY_LAST_EXCEPTION}">
			<div class="errormsg">${error_msg}</div>
		</c:if>

		<table
			style="max-width: 450px;; margin: 0 auto; margin-top: 10px; margin-bottom: 10px;">
			<th><a href="abc.htm"> <spring:url value="/images"
						var="images" /> <img src="${images}/vf-leaf.png" width="60"
					height="60" alt="" />
			</a></th>
			<th><a href="abc.htm"> <spring:url value="/images"
						var="images" /> <img src="${images}/logo2.jpg" width="200"
					height="50" alt="" />
			</a></th>
		</table>

		<form class="modal-content animate"
			action="${pageContext.request.contextPath }/login"
			modelAttribute="customer" id="myStudentForm" method="post">

			<h4 style="margin-left: 5%;">Log In</h4>
			<div class="container">

				<div class="form-control">
					<input type="email" placeholder="Enter Email" name="email"
						id="email"> <span id="emailError"></span>
				</div>

				<div class="form-control">
					<input type="password" placeholder="Enter Password" name="password"
						id="txtNewPassword"> <span id="passwordError"></span>
				</div>

				<button type="submit">Login</button>
				<input type="hidden" name="${_csrf.parameterName}"
					value="${_csrf.token}" /> <label> <input type="checkbox"
					name="remember"> Remember me
				</label>
			</div>

			<div class="container" style="background-color: #f1f1f1">
				<button type="button" class="cancelbtn" onclick="history.back()">Cancel</button>
				<span class="psw"><a
					href="${pageContext.request.contextPath }/forgot/forgotPassword"
					style="text-decoration: none;">Forgot Password?</a></span>
			</div>

			<div style="margin-left: 7%; margin-top: 3%;">
				<span>New to VeggieFridge?<a
					href="${pageContext.request.contextPath }/signup"
					style="text-decoration: none;"> Create an account</a></span>
			</div>

		</form>

		<div style="text-align: center; margin-top: 20px; font-size: 15px;">
			<a href="#" style="text-decoration: none;"> Conditions of Use </a> |
			<a href="#" style="text-decoration: none;"> Privacy Policy </a> | <a
				href="#" style="text-decoration: none;"> Help </a>
			<p style="margin-top: 10px;">© 2020-2021, VeggieFridge.com, Inc.
				or its affiliates</p>
		</div>


	</div>

	<!-- ............Script Code.......... -->

	<script>
		$(document).ready(function() {

			$("#emailError").hide();
			$("#passwordError").hide();

			var emailError = false;
			var passwordError = false;

			$("#email").keyup(function() {
				validate_email();
			});

			$("#txtNewPassword").change(function() {
				validate_txtNewPassword();
			});

			//Email Validation
			function validate_email() {
				var val = $("#email").val();
				var exp = /^[A-Za-z0-9\.\-]+\@[a-z]+\.[a-z\.]{2,10}$/;
				if (val == '') {
					$("#emailError").html("Enter <b>EMail ID</b>");
					$("#emailError").css("color", "red");
					$("#emailError").show();
					emailError = false;
				} else {
					$("#emailError").hide();
					emailError = true;
				}
				return emailError;
			}

			/* ...............Passowrd........... */

			//password Validation
			function validate_txtNewPassword() {
				var val = $("#txtNewPassword").val();
				//var exp = /^[A-Za-z0-9\.\-]+\@[a-z]+\.[a-z\.]{2,10}$/;
				if (val == '') {
					$("#passwordError").html("Enter <b>Password</b>");
					$("#passwordError").css("color", "red");
					$("#passwordError").show();
					passwordError = false;
				} else {
					$("#passwordError").hide();
					passwordError = true;
				}
				return passwordError;
			}

			//---------ON SUBMIT--------------//
			$("#myStudentForm").submit(function() {

				validate_email();
				validate_txtNewPassword();

				if (emailError && passwordError)
					return true;
				else
					return false;
			});

		});
	</script>

</body>
</html>

