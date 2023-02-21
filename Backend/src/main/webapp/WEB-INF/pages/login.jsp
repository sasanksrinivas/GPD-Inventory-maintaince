<%@ page language="java" contentType="text/html; charset=ISO-8859-1"
	pageEncoding="ISO-8859-1"%>

<%@ taglib uri="http://java.sun.com/jsp/jstl/core" prefix="c"%>
<%@ taglib uri="http://www.springframework.org/tags" prefix="spring"%>
<%@ taglib uri="http://www.springframework.org/tags/form" prefix="form"%>
<%@ taglib prefix="fmt" uri="http://java.sun.com/jsp/jstl/fmt"%>
<%@ taglib uri="http://www.springframework.org/security/tags"
	prefix="security"%>
<%@ taglib uri="http://java.sun.com/jsp/jstl/functions" prefix="fn"%>

<!DOCTYPE html>
<html>

<head>
<meta charset="utf-8">
<meta name="viewport" content="width=device-width, initial-scale=1.0">
<title>VeggieFridge Sign In</title>
<link rel="icon" href="images/VeggieFridge.ico" type="image/x-icon">

<script src="https://code.jquery.com/jquery-3.2.1.slim.min.js"
	integrity="sha384-KJ3o2DKtIkvYIK3UENzmM7KCkRr/rE9/Qpg6aAZGJwFDMVNA/GpGFF93hXpG5KkN"
	crossorigin="anonymous"></script>
<script
	src="https://cdnjs.cloudflare.com/ajax/libs/popper.js/1.12.9/umd/popper.min.js"
	integrity="sha384-ApNbgh9B+Y1QKtv3Rn7W3mgPxhU9K/ScQsAP7hUibX39j7fakFPskvXusvfa0b4Q"
	crossorigin="anonymous"></script>

<!-- <title>Login Form | CodingLab</title> -->
<link rel="stylesheet" href="style.css">
<link rel="stylesheet"
	href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/5.15.2/css/all.min.css" />
<script src="https://ajax.googleapis.com/ajax/libs/jquery/3.5.1/jquery.min.js"></script>	

<style>
@import
	url('https://fonts.googleapis.com/css2?family=Poppins:wght@200;300;400;500;600;700&display=swap')
	;

* {
	margin: 0;
	padding: 0;
	box-sizing: border-box;
	font-family: 'Poppins', sans-serif;
}

body {
	font-family: 'Roboto', sans-serif;
	background: white;
	overflow: hidden;
}

::selection {
	background: rgba(26, 188, 156, 0.3);
}

.container {
	max-width: 440px;
	padding: 0 20px;
	margin: 70px auto;
}

.logo {
	display: flex;
	align-items: center;
	justify-content: center;
	margin-bottom: 20px;
}

.footer {
	display: flex;
	align-items: center;
	justify-content: center;
	margin-top: 20px;
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

.wrapper {
	width: 100%;
	background: #fff;
	border-radius: 5px;
	box-shadow: 0px 4px 10px 1px rgba(0, 0, 0, 0.1);
}

.wrapper .title {
	height: 90px;
	background: #4CAF50;
	border-radius: 5px 5px 0 0;
	color: #fff;
	font-size: 20px;
	font-weight: 500;
	display: flex;
	align-items: center;
	justify-content: center;
	border-radius: 5px 5px 0 0;
	color: #fff;
}

.wrapper form {
	padding: 30px 25px 25px 25px;
}

.wrapper form .row {
	height: 45px;
	margin-bottom: 15px;
	position: relative;
}

.wrapper form .row input {
	height: 100%;
	width: 100%;
	outline: none;
	padding-left: 60px;
	border-radius: 5px;
	border: 1px solid lightgrey;
	font-size: 16px;
	transition: all 0.3s ease;
}

form .row input:focus {
	border-color: #16a085;
	box-shadow: inset 0px 0px 2px 2px rgba(26, 188, 156, 0.25);
}

form .row input::placeholder {
	color: #999;
}

.wrapper form .row i {
	position: absolute;
	width: 47px;
	height: 100%;
	color: #fff;
	font-size: 18px;
	background: #4CAF50;
	border: 1px solid #16a085;
	border-radius: 5px 0 0 5px;
	display: flex;
	align-items: center;
	justify-content: center;
}

.wrapper form .pass {
	margin: -8px 0 20px 0;
}

.wrapper form .pass a {
	color: #16a085;
	font-size: 17px;
	text-decoration: none;
}

.wrapper form .pass a:hover {
	text-decoration: underline;
}

.wrapper form .button input {
	color: #fff;
	font-size: 20px;
	font-weight: 500;
	padding-left: 0px;
	background: #4CAF50;
	border: 1px solid #16a085;
	cursor: pointer;
}

form .button input:hover {
	background: green;
}

.wrapper form .signup-link {
	text-align: center;
	margin-top: 20px;
	font-size: 17px;
}

.wrapper form .signup-link a {
	color: #16a085;
	text-decoration: none;
}

form .signup-link a:hover {
	text-decoration: underline;
}
</style>
</head>
<body>
	<div class="container">

		<c:if test="${not empty msg}">
			<div class="msg">${msg}</div>
		</c:if>

		<c:if test="${not empty SPRING_SECURITY_LAST_EXCEPTION}">
			<div class="errormsg">${error_msg}</div>
		</c:if>

		<div class="logo">
			
			<a href="${pageContext.request.contextPath}/VeggieFridge"> 
			<spring:url value="/images" var="images" /> 
			<img src="${images}/vf-leaf.png" width="70" height="70" alt="" /></a>
				
			<a href="${pageContext.request.contextPath}/VeggieFridge"> 
			<spring:url	value="/images" var="images" /> 
			<img src="${images}/logo2.jpg" width="210" height="60" alt="" />
			</a>
			
		</div>

		<div class="wrapper">
			<div class="title">
				<span>Login Form</span>
			</div>
			<form action="${pageContext.request.contextPath }/login"
				modelAttribute="customer" id="myStudentForm" method="post">

				<div class="row">
					<i class="fas fa-user"></i><input type="email" placeholder="Email"
						name="email" id="email" required> <span id="emailError"></span>
				</div>

				<div class="row">
					<i class="fas fa-lock"></i> <input type="password"
						placeholder="Password" name="password" id="txtNewPassword"
						required> <span id="passwordError"></span>
				</div>

				<div class="pass">
					<a href="${pageContext.request.contextPath }/forgot/forgotPassword">Forgot
						password?</a>
				</div>
				<div class="row button">

					<input type="submit" value="Login"> <input type="hidden"
						name="${_csrf.parameterName}" value="${_csrf.token}" />
				</div>
				<div class="signup-link">
					Not a member? <a
						href="${pageContext.request.contextPath}/registerNow">Signup
						now</a>
				</div>
			</form>
		</div>

		<div class="footer">
			<p>© 2020-2022, VeggieFridge.com.</p>
		</div>
	</div>


	<!-- ............Script Code.......... -->

	<!-- <script>
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
 -->
 
 <script type="text/javascript">
 $( document ).ready(function() {
		setTimeout(function() {
			 $('.msg').fadeOut();
			}, 5000 );
			
			
	});
	
	$( document ).ready(function() {
		setTimeout(function() {
			 $('.errormsg').fadeOut();
			}, 5000 );
	});
 </script>

</body>
</html>