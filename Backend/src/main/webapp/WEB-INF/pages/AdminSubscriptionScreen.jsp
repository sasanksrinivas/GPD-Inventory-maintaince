
<%@ page language="java" contentType="text/html; charset=ISO-8859-1"
	pageEncoding="ISO-8859-1"%>

<%@ taglib prefix="form" uri="http://www.springframework.org/tags/form"%>
<%@ taglib uri="http://www.springframework.org/tags" prefix="spring"%>
<%@ taglib uri="http://java.sun.com/jsp/jstl/core" prefix="c"%>

<!DOCTYPE html>
<html>
<head>

<title>Veggie Fridge</title>
<!-- <meta name="viewport" content="width=device-width, height=device-height, initial-scale=1.0, user-scalable=0, minimum-scale=1.0, maximum-scale=1.0"> -->
<link rel="icon" href="images/VeggieFridge.ico" type="image/x-icon">

<script src='https://kit.fontawesome.com/a076d05399.js'></script>
<script
	src="http://ajax.googleapis.com/ajax/libs/jquery/3.5.1/jquery.min.js"></script>
<script src="https://code.jquery.com/jquery-1.12.4.min.js"></script>
<script src="https://code.jquery.com/jquery-1.4.4.min.js"></script>

<style>
@import
	url('https://fonts.googleapis.com/css2?family=Montserrat:wght@200;400;600&display=swap')
	;

body {
	counter-reset: my-sec-counter;
	font-family: 'Montserrat', sans-serif;
	font-size: 12px;
}

:root { -
	-primary-color: #4834d4; -
	-success-color: #6ab04c; -
	-warning-color: #f0932b; -
	-danger-color: #eb4d4b; -
	-light-color: #212529; -
	-light-second-color: #727475; -
	-light-background: #ffffff; -
	-light-second-background: #f1f1f1; -
	-dark-color: #909090; -
	-dark-second-color: #f5f6fa; -
	-dark-background: #23242D; -
	-dark-second-background: #181818;
}

.light { -
	-main-bg-color: var(- -light-background); -
	-second-bg-color: var(- -light-second-background); -
	-main-color: var(- -light-color); -
	-second-color: var(- -light-second-color);
}

.dark { -
	-main-bg-color: var(- -dark-background); -
	-second-bg-color: var(- -dark-second-background); -
	-main-color: var(- -dark-color); -
	-second-color: var(- -dark-second-color);
}

.light .logo-dark, .light .light-icon {
	display: none;
}

.dark .logo-light, .dark .dark-icon {
	display: none;
}

.bg-primary {
	background: var(- -primary-color);
}

.bg-success {
	background: var(- -success-color);
}

.bg-warning {
	background: var(- -warning-color);
}

.bg-danger {
	background: var(- -danger-color);
}

* {
	box-sizing: border-box;
}

body {
	font-family: 'Roboto', sans-serif;
	background: var(- -main-bg-color);
	color: var(- -main-color);
	margin: 0;
}

.navbar {
	display: flex;
	flex-direction: row;
	background: white;
	color: var(- -main-color);
	position: fixed;
	top: 0;
	right: 0;
	left: 0;
	z-index: 101;
	box-shadow: rgba(0, 0, 0, 0.12) 0px 1px 4px 1px;
}

.navbar-nav {
	list-style: none;
	display: flex;
	flex-direction: row;
	padding-left: 0;
	margin-bottom: 0;
	margin-top: 0;
}

.nav-link {
	float: left;
	text-align: center;
	padding: 21px 10px;
	text-decoration: none;
	font-size: 17px;
	color: var(- -second-color);
	position: relative;
}

.nav-link:hover {
	cursor: pointer;
}

.navbar-nav i {
	font-size: 1.4rem;
}

.nav-right {
	margin-left: auto;
}

.navbar-search {
	position: relative;
	margin: auto;
	width: 50%;
}

.navbar-search input {
	background: #f1f1f1;
	border: none;
	padding: 12px 50px 12px 50px;
	width: 100%;
	outline: none;
	color: var(- -main-color);
	border-radius: 20px;
}

.navbar-search i {
	position: absolute;
	top: 50%;
	right: 20px;
	transform: translateY(-50%);
	color: var(- -second-color);
	cursor: pointer;
}

.logo {
	height: 60px;
	padding: 10px;
}

.avt img {
	width: 39px;
	height: 39px;
	border-radius: 50%;
}

.avt {
	padding: 11px
}

.navbar-badge {
	font-size: .6rem;
	padding: 2px 4px;
	font-weight: 300;
	position: absolute;
	right: 5px;
	top: 9px;
	color: #fff;
	background: var(- -danger-color);
	border-radius: 5px;
}

.dropdown {
	position: relative;
}

.dropdown:hover {
	cursor: pointer;
}

.dropdown-menu {
	list-style: none;
	display: none;
	flex-direction: column;
	position: absolute;
	right: 20%;
	top: 90%;
	background: var(- -main-bg-color);
	max-width: 300px;
	box-shadow: 0px 8px 16px 0px rgba(0, 0, 0, 0.2);
	z-index: 1;
	padding: unset;
	border-radius: 10px;
	border: 0.125px solid var(- -second-bg-color);
}

.dropdown-expand {
	display: flex;
}

.notification-menu {
	min-width: 380px;
}

.dropdown-menu-content {
	max-height: 500px;
	overflow-y: auto;
}

.dropdown-menu-item {
	width: 100%;
}

.dropdown-menu-link {
	display: flex;
	flex-direction: row;
	align-items: center;
	text-decoration: none;
	color: var(- -main-color);
}

.dropdown-menu-link div {
	min-width: 82px;
	height: 50px;
	position: relative;
}

.dropdown-menu-link i {
	font-size: 1.25rem;
	color: var(- -second-color);
	position: absolute;
	left: 50%;
	top: 50%;
	transform: translate(-50%, -50%);
}

.dropdown-menu-link span {
	font-size: 15px;
	width: 298px;
	white-space: nowrap;
	overflow: hidden;
	text-overflow: ellipsis;
}

.dropdown-menu-link span>span {
	font-size: 10px;
}

.dropdown-menu-link:hover {
	cursor: pointer;
	background: var(- -second-bg-color);
}

.dropdown-menu-header {
	padding: 20px;
	text-align: center;
	border-bottom: 1px solid var(- -second-bg-color);
}

.dropdown-menu-footer {
	padding: 20px;
	text-align: center;
	border-top: 1px solid var(- -second-bg-color);
}

.overlay-scrollbar::-webkit-scrollbar {
	width: 9px;
	height: 9px;
}

.scrollbar-hover::-webkit-scrollbar {
	display: none;
}

.scrollbar-hover:hover::-webkit-scrollbar {
	display: block;
}

.overlay-scrollbar::-webkit-scrollbar-thumb {
	background-color: rgba(0, 0, 0, 0.4);
	border-radius: 10rem;
	border: 1px solid var(- -main-bg-color);
}

.overlay-scrollbar::-webkit-scrollbar-track-piece:start {
	background: transparent;
}

.overlay-scrollbar::-webkit-scrollbar-track-piece:end {
	background: transparent;
}

.mainPage {
	padding: 10px;
	margin-left: 82px;
	padding-top: 75px;
	background:;
	transition: margin-left .5s;
}

.sidebar {
	width: 82px;
	height: 100vh;
	position: fixed;
	margin-top: 65px;
	background: white;
	box-shadow: rgba(0, 0, 0, 0.12) 0px 1px 4px 1px;
	overflow: hidden;
	z-index: 100;
	transition: width .5s;
}

.sidebar:hover {
	width: 250px;
}

.sidebar:hover .mainPage {
	margin-left: 250px;
}

.sidebar-nav {
	list-style: none;
	padding: 0;
	margin: 0;
	display: flex;
	flex-direction: column;
	align-items: center;
	height: 100vh;
}

.sidebar-nav-item {
	width: 100%;
}

.sidebar-nav-link {
	display: flex;
	align-items: center;
	color: var(- -main-color);
	text-decoration: none;
}

.sidebar-nav-link i {
	font-size: 1.5rem;
	color: var(- -second-color);
	position: absolute;
	left: 50%;
	top: 50%;
	transform: translate(-50%, -50%);
}

.sidebar-nav-link div {
	min-width: 82px;
	height: 50px;
	position: relative;
}

.sidebar-nav-link:hover {
	background: #f1f1f1;
}

.sidebar-nav-link.active {
	background: #f1f1f1;
	color: #eb4d4b;
}

.sidebar-nav-link.active div {
	border-left: 5px solid #eb4d4b;
}

.sidebar-nav-link.active i {
	color: #eb4d4b;
	margin-left: -5px;
}

.sidebar-expand .sidebar {
	width: 250px;
}

.sidebar-expand .mainPage {
	margin-left: 250px;
}

.row {
	display: flex;
	flex-wrap: wrap;
	flex-direction: row;
}

.row:after, .row:before {
	box-sizing: border-box;
}

[class*="col-"] {
	padding: 10px;
}

.sidebar .closebtn {
	position: absolute;
	top: 0;
	right: 25px;
	font-size: 36px;
	margin-left: 50px;
	color: black;
}

/* Extra small devices <= 600px */
@media only screen and (max-width: 600px) {
	.sidebar {
		width: 0;
	}
	.mainPage {
		margin-left: 0;
	}
	.sidebar-expand .mainPage {
		margin-left: 0;
	}
	.nav-right .nav-item {
		display: none;
	}
	.nav-right .mode, .nav-right .avt-wrapper {
		display: list-item;;
	}
	.navbar-search {
		display: none;
	}
	.dropdown-menu {
		max-width: 300px;
	}
	[class*="col-"] {
		width: 100%
	}
}

/* Small devices >= 600px */
@media only screen and (min-width: 600px) {
	.col-sm-1 {
		width: 8.33%;
	}
	.col-sm-2 {
		width: 16.66%;
	}
	.col-sm-3 {
		width: 25%;
	}
	.col-sm-4 {
		width: 33.33%;
	}
	.col-sm-5 {
		width: 41.66%;
	}
	.col-sm-6 {
		width: 50%;
	}
	.col-sm-7 {
		width: 58.33%;
	}
	.col-sm-8 {
		width: 66.66%;
	}
	.col-sm-9 {
		width: 75%;
	}
	.col-sm-10 {
		width: 83.33%;
	}
	.col-sm-11 {
		width: 91.66%;
	}
	.col-sm-12 {
		width: 100%;
	}
}

/* Medium devices >= 768px */
@media only screen and (min-width: 768px) {
	.col-m-1 {
		width: 8.33%;
	}
	.col-m-2 {
		width: 16.66%;
	}
	.col-m-3 {
		width: 25%;
	}
	.col-m-4 {
		width: 33.33%;
	}
	.col-m-5 {
		width: 41.66%;
	}
	.col-m-6 {
		width: 50%;
	}
	.col-m-7 {
		width: 58.33%;
	}
	.col-m-8 {
		width: 66.66%;
	}
	.col-m-9 {
		width: 75%;
	}
	.col-m-10 {
		width: 83.33%;
	}
	.col-m-11 {
		width: 91.66%;
	}
	.col-m-12 {
		width: 100%;
	}
}

/* laptops/desktops >= 992px */
@media only screen and (min-width: 992px) {
	.col-1 {
		width: 8.33%;
	}
	.col-2 {
		width: 16.66%;
	}
	.col-3 {
		width: 25%;
	}
	.col-4 {
		width: 33.33%;
	}
	.col-5 {
		width: 41.66%;
	}
	.col-6 {
		width: 50%;
	}
	.col-7 {
		width: 58.33%;
	}
	.col-8 {
		width: 66.66%;
	}
	.col-9 {
		width: 75%;
	}
	.col-10 {
		width: 83.33%;
	}
	.col-11 {
		width: 91.66%;
	}
	.col-12 {
		width: 100%;
	}
}

/* large laptops and desktops >= 1200px */
@media only screen and (min-width: 1200px) {
	.col-xl-1 {
		width: 8.33%;
	}
	.col-xl-2 {
		width: 16.66%;
	}
	.col-xl-3 {
		width: 25%;
	}
	.col-xl-4 {
		width: 33.33%;
	}
	.col-xl-5 {
		width: 41.66%;
	}
	.col-xl-6 {
		width: 50%;
	}
	.col-xl-7 {
		width: 58.33%;
	}
	.col-xl-8 {
		width: 66.66%;
	}
	.col-xl-9 {
		width: 75%;
	}
	.col-xl-10 {
		width: 83.33%;
	}
	.col-xl-11 {
		width: 91.66%;
	}
	.col-xl-12 {
		width: 100%;
	}
}

.counter {
	padding: 16px;
	text-align: center;
	color: #fff;
	border-radius: 10px;
	box-shadow: 0 4px 8px 0 rgba(0, 0, 0, 0.2);
}

.couner i {
	font-size: 50px;
}

.card {
	background: var(- -main-bg-color);
	color: var(- -main-color);
	border-radius: 10px;
	margin-bottom: 10px;
	box-shadow: 0 4px 8px 0 rgba(0, 0, 0, 0.2);
}

.card-header {
	padding: 15px 30px;
	border-bottom: 1px solid var(- -second-bg-color);
	position: relative;
}

.card-header i {
	color: var(- -main-color);
	position: absolute;
	right: 30px;
	top: 50%;
	transform: translateY(-50%);
}

.card-header i:hover {
	cursor: pointer;
}

.card-header h3 {
	margin: 0;
}

.card-content {
	padding: 20px;
	overflow-x: auto;
}

/* table Css */
.parent {
	cursor: pointer
}

#DataTable {
	position: relative;
	padding: 10px;
	box-sizing: border-box;
}

table {
	width: 100%;
	border-collapse: collapse;
}

th {
	/*  background:#4CAF50; */
	background: #333;
	color: white;
	font-weight: bold;
	cursor: cell;
}

td, th {
	padding: 15px 5px;
	border: 1px solid #ccc;
	text-align: center;
	box-sizing: border-box;
}

tr:nth-of-type(odd) {
	background: #eee;
}

@media only screen and (max-width: 760px) , ( min-device-width : 768px)
	and (max-device-width: 1024px) {
	table {
		margin-top: 106px;
	}
	/* Force table to not be like tables anymore */
	table, thead, tbody, th, td, tr {
		display: block;
	}

	/* Hide table headers (but not display: none;, for accessibility) */
	thead tr {
		position: absolute;
		top: -9999px;
		left: -9999px;
	}
	tr {
		margin: 0 0 1rem 0;
		overflow: auto;
		border-bottom: 1px solid #ccc;
	}
	tbody tr:before {
		counter-increment: my-sec-counter;
		content: "";
		background-color: #333;
		display: block;
		height: 1px;
	}
	tr:nth-child(odd) {
		background: #ccc;
	}
	td {
		/* Behave  like a "row" */
		border: none;
		border-bottom: 1px solid #eee;
		margin-right: 0%;
		display: block;
		border-right: 1px solid #ccc;
		border-left: 1px solid #ccc;
		box-sizing: border-box;
	}
	td:before {
		/* Top/left values mimic padding */
		font-weight: bold;
		width: 50%;
		float: left;
		box-sizing: border-box;
		padding-left: 5px;
	}

	/*
		Label the data
    You could also use a data-* attribute and content for this. That way "bloats" the HTML, this way means you need to keep HTML and CSS in sync. Lea Verou has a clever way to handle with text-shadow.
		*/
	td:nth-of-type(1):before {
		content: "";
	}
	td:nth-of-type(2):before {
		content: "Socity Name";
	}
	td:nth-of-type(3):before {
		content: "DeliveryBoy Name";
	}
	td:nth-of-type(4):before {
		content: "Delievery Status";
	}
	.box ul.pagination {
		position: relative !important;
		bottom: auto !important;
		right: auto !important;
		display: block !important;
		width: 100%;
	}
	.box {
		text-align: center;
		position: fixed;
		width: 100%;
		background-color: #fff;
		top: 0px;
		left: 0px;
		padding: 15px;
		box-sizing: border-box;
		border-bottom: 1px solid #ccc;
	}
	.box ul.pagination {
		display: block;
		margin: 0px;
	}
	.box .dvrecords {
		display: block;
		margin-bottom: 10px;
	}
	.pagination>li {
		display: inline-block;
	}
}

.top-filters {
	font-size: 0px;
	height: 10px;
	width: 10px;
}

.search-field {
	text-align: right;
	margin-bottom: 5px;
}

.dd-number-of-recoeds {
	font-size: 12px;
}

.search-field, .dd-number-of-recoeds {
	display: inline-block;
	width: 50%;
}

.box ul.pagination {
	position: absolute;
	bottom: -45px;
	right: 15px;
}

.box .dvrecords {
	padding: 5px 0;
}

.box .dvrecords .records {
	margin-right: 5px;
}
/* calendar */
[type="date"] {
	background: #fff
		url(https://cdn1.iconfinder.com/data/icons/cc_mono_icon_set/blacks/16x16/calendar_2.png)
		97% 50% no-repeat;
}

[type="date"]::-webkit-inner-spin-button {
	display: none;
}

[type="date"]::-webkit-calendar-picker-indicator {
	opacity: 0;
}

#formoption {
	box-shadow: inset 0 3px 6px rgba(0, 0, 0, 0.1);
	border: 1px solid #c4c4c4;
	border-radius: 5px;
	background-color: #fff;
	padding: 3px 5px;
	box-shadow: inset 0 3px 6px rgba(0, 0, 0, 0.1);
	width: 190px;
}

/* Style the buttons */
.btn {
	border: none;
	outline: none;
	padding: 12px 16px;
	background-color: #f1f1f1;
	cursor: pointer;
}

.btn:hover {
	background-color: #ddd;
}

.btn.active {
	background-color: #666;
	color: white;
}

#myBtnContainer {
	float: right;
	margin-bottom: 10px;
	margin-right: 10px;
}

.dateFilter {
	margin-bottom: -30px;
	float: left;
	margin-left: 10px;
}

.pagination {
	display: inline-block;
}

.pagination a {
	color: black;
	float: left;
	padding: 8px 16px;
	text-decoration: none;
}
</style>

</head>

<body class="overlay-scrollbar">

	<!-- navbar -->
	<div class="navbar">

		<!-- nav left -->
		<ul class="navbar-nav">
			<li class="nav-item"><a class="nav-link"> <i
					class="fas fa-bars" onclick="openNav()"></i>
			</a></li>

			<li class="nav-item"><a href="abc.htm"><spring:url
						value="/images" var="images" /><img src="${images}/vf-leaf.png"
					width="50" height="50" alt="" /> </a> <a href="abc.htm"><spring:url
						value="/images" var="images" /> <img src="${images}/logo2.jpg"
					width="180" height="45" alt="" /> </a></li>
		</ul>
		<!-- end nav left -->

		<!-- form -->
		<form class="navbar-search">
			<input type="text" name="Search" class="navbar-search-input"
				placeholder="What you looking for..."> <i
				class="fas fa-search"></i>
		</form>
		<!-- end form -->
		<!-- nav right -->
		<ul class="navbar-nav nav-right">

			<li class="nav-item mode"><a class="nav-link" href="#"
				onclick="switchTheme()"> <i class="fas fa-moon dark-icon"></i> <!-- <i class="fas fa-sun light-icon"></i> -->
			</a></li>

			<li class="nav-item dropdown"><a class="nav-link"> <i
					class="fas fa-bell dropdown-toggle" data-toggle="notification-menu"></i>
					<span class="navbar-badge">15</span>
			</a>
				<ul id="notification-menu" class="dropdown-menu notification-menu">
					<div class="dropdown-menu-header">
						<span> Notifications </span>
					</div>
					<div
						class="dropdown-menu-content overlay-scrollbar scrollbar-hover">
						<li class="dropdown-menu-item"><a href="#"
							class="dropdown-menu-link">
								<div>
									<i class="fas fa-gift"></i>
								</div> <span> Lorem ipsum dolor sit amet, consectetuer
									adipiscing elit. <br> <span> 15/07/2020 </span>
							</span>
						</a></li>
						<li class="dropdown-menu-item"><a href="#"
							class="dropdown-menu-link">
								<div>
									<i class="fas fa-tasks"></i>
								</div> <span> Lorem ipsum dolor sit amet, consectetuer
									adipiscing elit. <br> <span> 15/07/2020 </span>
							</span>
						</a></li>
						<li class="dropdown-menu-item"><a href="#"
							class="dropdown-menu-link">
								<div>
									<i class="fas fa-gift"></i>
								</div> <span> Lorem ipsum dolor sit amet, consectetuer
									adipiscing elit. <br> <span> 15/07/2020 </span>
							</span>
						</a></li>
						<li class="dropdown-menu-item"><a href="#"
							class="dropdown-menu-link">
								<div>
									<i class="fas fa-tasks"></i>
								</div> <span> Lorem ipsum dolor sit amet, consectetuer
									adipiscing elit. <br> <span> 15/07/2020 </span>
							</span>
						</a></li>
						<li class="dropdown-menu-item"><a href="#"
							class="dropdown-menu-link">
								<div>
									<i class="fas fa-gift"></i>
								</div> <span> Lorem ipsum dolor sit amet, consectetuer
									adipiscing elit. <br> <span> 15/07/2020 </span>
							</span>
						</a></li>
						<li class="dropdown-menu-item"><a href="#"
							class="dropdown-menu-link">
								<div>
									<i class="fas fa-tasks"></i>
								</div> <span> Lorem ipsum dolor sit amet, consectetuer
									adipiscing elit. <br> <span> 15/07/2020 </span>
							</span>
						</a></li>
						<li class="dropdown-menu-item"><a href="#"
							class="dropdown-menu-link">
								<div>
									<i class="fas fa-gift"></i>
								</div> <span> Lorem ipsum dolor sit amet, consectetuer
									adipiscing elit. <br> <span> 15/07/2020 </span>
							</span>
						</a></li>
						<li class="dropdown-menu-item"><a href="#"
							class="dropdown-menu-link">
								<div>
									<i class="fas fa-tasks"></i>
								</div> <span> Lorem ipsum dolor sit amet, consectetuer
									adipiscing elit. <br> <span> 15/07/2020 </span>
							</span>
						</a></li>
						<li class="dropdown-menu-item"><a href="#"
							class="dropdown-menu-link">
								<div>
									<i class="fas fa-gift"></i>
								</div> <span> Lorem ipsum dolor sit amet, consectetuer
									adipiscing elit. <br> <span> 15/07/2020 </span>
							</span>
						</a></li>
						<li class="dropdown-menu-item"><a href="#"
							class="dropdown-menu-link">
								<div>
									<i class="fas fa-tasks"></i>
								</div> <span> Lorem ipsum dolor sit amet, consectetuer
									adipiscing elit. <br> <span> 15/07/2020 </span>
							</span>
						</a></li>
						<li class="dropdown-menu-item"><a href="#"
							class="dropdown-menu-link">
								<div>
									<i class="fas fa-gift"></i>
								</div> <span> Lorem ipsum dolor sit amet, consectetuer
									adipiscing elit. <br> <span> 15/07/2020 </span>
							</span>
						</a></li>
						<li class="dropdown-menu-item"><a href="#"
							class="dropdown-menu-link">
								<div>
									<i class="fas fa-tasks"></i>
								</div> <span> Lorem ipsum dolor sit amet, consectetuer
									adipiscing elit. <br> <span> 15/07/2020 </span>
							</span>
						</a></li>
					</div>
					<div class="dropdown-menu-footer">
						<span> View all notifications </span>
					</div>
				</ul></li>
			<li class="nav-item avt-wrapper">

				<div class="avt dropdown">
					<spring:url value="/images" var="images" />
					<img src="${images}/profile.jpg" width="60" height="60" alt=""
						alt="User image" class="dropdown-toggle" data-toggle="user-menu" />

					<!-- <img src="assets/tuat.jpg" alt="User image" class="dropdown-toggle" data-toggle="user-menu"> -->
					<ul id="user-menu" class="dropdown-menu">
						<li class="dropdown-menu-item"><a class="dropdown-menu-link">
								<div>
									<i class="fas fa-user-tie"></i>
								</div> <span>Profile</span>
						</a></li>
						<li class="dropdown-menu-item"><a href="#"
							class="dropdown-menu-link">
								<div>
									<i class="fas fa-cog"></i>
								</div> <span>Settings</span>
						</a></li>
						<li class="dropdown-menu-item"><a href="#"
							class="dropdown-menu-link">
								<div>
									<i class="far fa-credit-card"></i>
								</div> <span>Payments</span>
						</a></li>
						<li class="dropdown-menu-item"><a href="#"
							class="dropdown-menu-link">
								<div>
									<i class="fas fa-spinner"></i>
								</div> <span>Projects</span>
						</a></li>
						<li class="dropdown-menu-item"><a href="#"
							class="dropdown-menu-link">
								<div>
									<i class="fas fa-sign-out-alt"></i>
								</div> <span>Logout</span>
						</a></li>
					</ul>
				</div>
			</li>
		</ul>
		<!-- end nav right -->
	</div>
	<!-- end navbar -->

	<!-- sidebar -->
	<div class="sidebar" id="mySidebar">
		<a href="javascript:void(0)" class="closebtn" onclick="closeNav()">×</a>
		<ul class="sidebar-nav">
			<li class="sidebar-nav-item"><a href="#"
				class="sidebar-nav-link">
					<div>
						<i class="fas fa-tachometer-alt"></i>
					</div> <span> Dashboard </span>
			</a></li>
			<li class="sidebar-nav-item"><a href="#"
				class="sidebar-nav-link active">
					<div>
						<i class="fab fa-accusoft"></i>
					</div> <span>Orders</span>
			</a></li>
			<li class="sidebar-nav-item"><a href="#"
				class="sidebar-nav-link">
					<div>
						<i class="fas fa-tasks"></i>
					</div> <span>VF Milk Subscription</span>
			</a></li>
			<li class="sidebar-nav-item"><a href="#"
				class="sidebar-nav-link">
					<div>
						<i class="fas fa-spinner"></i>
					</div> <span>Payment Option</span>
			</a></li>
			<li class="sidebar-nav-item"><a href="#"
				class="sidebar-nav-link">
					<div>
						<i class="fas fa-check-circle"></i>
					</div> <span>Delivery</span>
			</a></li>
			<li class="sidebar-nav-item"><a href="#"
				class="sidebar-nav-link">
					<div>
						<i class="fas fa-bug"></i>
					</div> <span>Morbi</span>
			</a></li>
			<li class="sidebar-nav-item"><a href="#"
				class="sidebar-nav-link">
					<div>
						<i class="fas fa-chart-line"></i>
					</div> <span>Praesent</span>
			</a></li>
			<li class="sidebar-nav-item"><a href="#"
				class="sidebar-nav-link">
					<div>
						<i class="fas fa-book-open"></i>
					</div> <span>Pellentesque</span>
			</a></li>
			<li class="sidebar-nav-item"><a href="#"
				class="sidebar-nav-link">
					<div>
						<i class="fas fa-adjust"></i>
					</div> <span>Morbi</span>
			</a></li>
			<li class="sidebar-nav-item"><a href="#"
				class="sidebar-nav-link">
					<div>
						<i class="fab fa-algolia"></i>
					</div> <span>Praesent</span>
			</a></li>
			<li class="sidebar-nav-item"><a href="#"
				class="sidebar-nav-link">
					<div>
						<i class="fas fa-audio-description"></i>
					</div> <span>Setting</span>
			</a></li>
		</ul>
	</div>
	<!-- end sidebar -->

	<!-- main content -->
	<div class="mainPage" id="main">

		<div class="row">
			<div class="col-3 col-m-6 col-sm-6">
				<div class="counter bg-primary">
					<p>
						<i class="fas fa-tasks"></i>
					</p>
					<h3>100+</h3>
					<p>Pending</p>
				</div>
			</div>
			<div class="col-3 col-m-6 col-sm-6">
				<div class="counter bg-warning">
					<p>
						<i class="fas fa-spinner"></i>
					</p>
					<h3>100+</h3>
					<p>In progress</p>
				</div>
			</div>
			<div class="col-3 col-m-6 col-sm-6">
				<div class="counter bg-success">
					<p>
						<i class="fas fa-check-circle"></i>
					</p>
					<h3>100+</h3>
					<p>Completed</p>
				</div>
			</div>
			<div class="col-3 col-m-6 col-sm-6">
				<div class="counter bg-danger">
					<p>
						<i class="fas fa-bug"></i>
					</p>
					<h3>100+</h3>
					<p>Issues</p>
				</div>
			</div>
		</div>

		<!-- Date Filter -->
		<form>
			<input type="date" name="fromDate" required id="formoption">

			<select name="cars" id="formoption">
				<option value="">Milk Catogary</option>
				<option value="Cow Milk">Cow Milk</option>
				<option value="Buffalo Milk">Buffalo Milk</option>
			</select>


			<button type="submit"
				style="border: 1px solid #c4c4c4; border-radius: 5px; background-color: #fff; padding: 5px 5px; box-shadow: inset 0 3px 6px rgba(0, 0, 0, 0.1); width: 70px; margin-left: 10px;">Filter</button>

			<select name="cars" id="formoption"
				style="float: right; margin-right: 10px;">
				<option value="">Deleivery BoyName</option>
				<option value="Vijay Das">Vijay Das</option>
				<option value="Mohan Mehta">Mohan Mehta</option>
				<option value="Ravi Gurjar">Ravi Gurjar</option>
			</select>
		</form>
		<!-- Date Filter Close -->

		<!-- Table -->
		<div id="DataTable">

			<!--<div id="table_box_bootstrap"></div> -->
			<form:form method="get">
				<table class="detail">

					<thead>
						<tr>
							<th></th>
							<th colspan="7">Socity Name</th>
							<th>Delievery Boy Name</th>
							<th>Delivery Status</th>
							<th>Comment</th>
						</tr>
					</thead>
					<tbody class="scroll-pane">


						<!--  1 Parent Row -->
						<tr class="parent">

							<td align="center"><button type="button" id="plus"
									style="border: 2px solid lightgrey; background-color: #fff; font-size: 22px; height: 1.5em; width: 1.5em; border-radius: 999px; position: relative; color: green;">+</button>

								<button type="button" id="minus"
									style="border: 2px solid lightgrey; background-color: #fff; font-size: 22px; height: 1.5em; width: 1.5em; border-radius: 999px; position: relative; color: red">-</button>
								<input type="checkbox" class="select-all checkbox"
								name="select-all"></td>
							<td colspan="7">Mahindra Bloomdale</td>

							<td align="center"><select id="dropdown[]">
									<option value="">Select</option>
									<option value="Aham Khan">Aham Khan</option>
									<option value="Vijay Das">Vijay Das</option>
									<option value="Mohan Mehta">Mohan Mehta</option>
									<option value="Ravi Gurjar">Ravi Gurjar</option>

							</select></td>
							<td align="center"><select>

									<option value="">Select</option>
									<option value="Pending">Pending</option>
									<option value="In Progress">In Progress</option>
									<option value="Delivered">Delivered</option>
							</select></td>

							<td><select>
									<option value="Test">Test</option>
									<option value="Test">Test</option>
									<option value="Test">Test</option>
									<option contenteditable value="other">Others</option>
							</select></td>

						</tr>

						<!--Child Row Header-->
						<tr>
							<td style="background-color: grey; color: white;"></td>
							<td style="background-color: grey; color: white;"></td>
							<!-- <td style="background-color: grey; color: white;"></td> -->
							<td style="background-color: grey; color: white;">CustomerName</td>
							<td style="background-color: grey; color: white;">Customer
								Address</td>
							<td style="background-color: grey; color: white;">Milk Type</td>
							<td style="background-color: grey; color: white;">Quantity</td>
							<td style="background-color: grey; color: white;">Date</td>
							<td style="background-color: grey; color: white;">Estimate
								Delivery Time</td>
							<td align="center" style="background-color: grey; color: white;">Deleivery
								BoyName</td>
							<td align="center" style="background-color: grey; color: white;">Delievery
								Status</td>
							<td align="center" style="background-color: grey; color: white;">Comment</td>
						</tr>

						<c:forEach var="subscriptionMap" items="${allTodaysDeliveryData}">

							<tr>
								<td></td>


								<c:choose>
									<c:when test="${subscriptionMap['deliveryId']==''}">
										<td>Subscription ID</td>
										<td><input type="checkbox" class="select-item checkbox"
											name="subscriptionId"
											value="${subscriptionMap['subscriptionId']}">${subscriptionMap['subscriptionId']}</td>

									</c:when>
									<c:otherwise>

										<td>Delivery ID</td>
										<td><input type="checkbox" class="select-item checkbox"
											name="deliveryId" value="${subscriptionMap['deliveryId']}">${subscriptionMap['subscriptionId']}</td>

									</c:otherwise>
								</c:choose>


								<%--  <td>
								 <input type="checkbox" class="select-item checkbox"
									name="subscriptionId"
									value="${subscriptionMap['subscriptionId']}"></td> --%>


								<%-- <c:choose>
									<c:when test="${subscriptionMap['deliveryId'] != ''}">
										<td><input type="input" name="deliveryId"
											value="${subscriptionMap['deliveryId']}" style="display:none;"></td>
									</c:when>
									<c:otherwise>
										<td><input type="input" name="deliveryId" value="0"  style="display:none;"></td>
									</c:otherwise>
								</c:choose>  --%>



								<%--<td>${subscription.customer.firstName} ${subscription.customer.lastName}</td>
					<td><input type="text" name ="deliveryAddress" value="${subscription.deliveryAddress}"></td>
					<td><input type="text" name ="milkType" value="${subscription.milkType}"></td>
					<td><input type="text" name ="milkQuantity" value="${subscription.milkQuantity}"></td>
					<td><input type="text" name ="nextDeliveryDate" value="${subscription.nextDeliveryDate}"></td>
					<td><input type="text" name ="estimateDeliveryTime" value="${subscription.estimateDeliveryTime}"></td>
					<td><input type="text" name ="productPrice" value="${subscription.productPrice}"></td> --%>
								<td style="text-align: left;">${subscriptionMap['customer.firstName']}
									${subscriptionMap['customer.lastName']}</td>
								<td>${subscriptionMap['deliveryAddress']}</td>
								<td>${subscriptionMap['milkType']}</td>
								<td>${subscriptionMap['milkQuantity']}</td>
								<td><fmt:formatDate
										value="${subscriptionMap['nextDeliveryDate']}"
										pattern="${dateformatter}" />
									                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                       
								<td>${subscriptionMap['estimateDeliveryTime']}</td>

								<td align="center">
									<!-- <select name="dropdown[]"> --> <select id="dropdown[]"
									name="delBoyName">


										<c:choose>
											<c:when test="${subscriptionMap['deliveryId'] != ''}">
												<option value="${subscriptionMap['deliveryBoyName']}">${subscriptionMap['deliveryBoyName']}</option>
											</c:when>
											<c:otherwise>
												<option value="">Select</option>
											</c:otherwise>
										</c:choose>

										<option value="Aham Khan">Aham Khan</option>
										<option value="Vijay Das">Vijay Das</option>
										<option value="Mohan Mehta">Mohan Mehta</option>
										<option value="Ravi Gurjar">Ravi Gurjar</option>


								</select>
								</td>

								<td align="center"><select name="delStatus">
										<c:choose>
											<c:when test="${subscriptionMap['deliveryId'] != ''}">
												<option value="${subscriptionMap['deliveryStatus']}">${subscriptionMap['deliveryStatus']}</option>
											</c:when>
											<c:otherwise>
												<option value="">Select</option>
											</c:otherwise>
										</c:choose>
										<option value="Pending">Pending</option>
										<option value="In Progress">In Progress</option>
										<option value="Delivered">Delivered</option>
								</select></td>

								<td><select name="comment">

										<option value="Test">Test</option>
										<option value="Test">Test</option>
										<option value="Test">Test</option>
										<option class="editable" value="other" contenteditable>Others</option>
								</select></td>
							</tr>
						</c:forEach>
					</tbody>
				</table>

				<button
					style="font-size: 15px; background-color: #555555; color: white; padding: 15px 30px; margin-top: 10px;"
					formaction="${pageContext.request.contextPath}/subscription/updateSubOrder">
					Update <i class="fa fa-edit"></i>
				</button>

			</form:form>

		</div>
	</div>

	<!-- end main content -->

	<!-- import script -->
	<script
		src="https://cdnjs.cloudflare.com/ajax/libs/Chart.js/2.9.3/Chart.min.js"></script>

	<script>
		function openNav() {
			document.getElementById("mySidebar").style.width = "250px";
			document.getElementById("main").style.marginLeft = "250px";
		}

		function closeNav() {
			document.getElementById("mySidebar").style.width = "80px";
			document.getElementById("main").style.marginLeft = "80px";
		}
	</script>

	<script>
		function openUserMenu() {
			document.getElementById("user-menu").style.display = 'block';
		}

		function closeUserMenu() {
			document.getElementById("user-menu").style.display = 'none';
		}
	</script>

	<script>
		$(document).ready(function() {
			$('table.detail').each(function() {
				var $table = $(this);
				/*  $table.find('.parent').click(function() {
				     $(this).nextUntil('.parent').toggle(); // must use jQuery 1.4 for nextUntil() method
				 }); */
				var $childRows = $table.find('tbody tr').not('.parent').hide();
				$table.find('#minus').click(function() {
					$('#plus').show();
					$('#minus').hide();
					$childRows.hide();
				});
				$table.find('#plus').click(function() {
					$('#plus').hide();
					$('#minus').show();
					$childRows.show();
				});
			});
		});
	</script>


	<script>
		$(function() {
			//button select all or cancel
			$("#select-all").click(function() {
				var all = $("input.select-all")[0];
				all.checked = !all.checked
				var checked = all.checked;
				$("input.select-item").each(function(index, item) {
					item.checked = checked;
				});
			});
			//column checkbox select all or cancel
			$("input.select-all").click(function() {
				var checked = this.checked;
				$("input.select-item").each(function(index, item) {
					item.checked = checked;
				});
			});
			//check selected items
			$("input.select-item").click(function() {
				var checked = this.checked;
				var all = $("input.select-all")[0];
				var total = $("input.select-item").length;
				var len = $("input.select-item:checked:checked").length;
				all.checked = len === total;
			});

		});
	</script>

	<script>
		window.onload = function() {
			document.getElementById("minus").style.display = 'none';
		};
	</script>

	<script type="text/javascript">
		var selects = document.querySelectorAll('select[id="dropdown[]"]');

		selects[0].addEventListener('change', function() {
			for (var i = 0; i < selects.length; i++) {
				selects[i].value = selects[0].value;
			}
		});
	</script>

	<!-- end import script -->
</body>
</html>