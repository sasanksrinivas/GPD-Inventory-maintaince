<%@ taglib prefix="form" uri="http://www.springframework.org/tags/form"%>
<html>
<head>
<style>
.error {
	color: #ff0000;
}

.errorblock {
	color: #000;
	background-color: #ffEEEE;
	border: 3px solid #ff0000;
	padding: 8px;
	margin: 16px;
}
</style>
</head>

<body>
	<h2>Spring's form password example</h2>

	<form:form method="POST" action="/vf-api/customer/changePassword">
		<table>
			<tr>
				<td>Password :</td>
				<td><input id="password" name="newPassword" type="password"
					value="" /></td>
			</tr>
			<tr>
				<td>Confirm Password :</td>
				<td><input id="matchPassword" type="password" value="" /></td>
			</tr>
			<tr>
				<td colspan="3"><input type="submit" /></td>
			</tr>
		</table>
		
		
		<input id="data" name="data" type="text" value={{data}} />
		<input id="id" name="id" type="text" value={{id}} />
		
	</form:form>

</body>
</html>