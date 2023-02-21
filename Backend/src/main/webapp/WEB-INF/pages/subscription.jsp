<html>
<body>

	<form:form method="get">
		<c:forEach var="subscriptionMap" items="${allTodaysDeliveryData}">

			<tr>
				<td></td>


				<td><input type="checkbox" class="select-item checkbox"
					name="subscriptionId" value="${subscriptionMap['subscriptionId']}">${subscriptionMap['subscriptionId']}</td>


				<c:choose>

					<c:when test="${subscriptionMap['deliveryId'] == null}">
						<td><input type="input" name="deliveryId" value="0"></td>
					</c:when>

					<c:otherwise>
						<td><input type="input" name="deliveryId"
							value="${subscriptionMap['deliveryId']}"></td>
					</c:otherwise>

				</c:choose>




				<td style="text-align: left;">${subscriptionMap['customer.firstName']}
					${subscriptionMap['customer.lastName']}</td>
				<td>${subscriptionMap['deliveryAddress']}</td>
				<td>${subscriptionMap['milkType']}</td>
				<td>${subscriptionMap['milkQuantity']}</td>

				<td align="center"><select id="dropdown[]" name="delBoyName">

						<c:choose>
							<c:when test="${subscriptionMap['deliveryId'] != null}">
								<option value="${subscriptionMap['deliveryBoyName']}">${subscriptionMap['deliveryBoyName']}</option>
							</c:when>
							<c:otherwise>
								<option value="0">Select</option>
							</c:otherwise>
						</c:choose>

						<option value="Aham Khan">Aham Khan</option>
						<option value="Vijay Das">Vijay Das</option>
						<option value="Mohan Mehta">Mohan Mehta</option>
						<option value="Ravi Gurjar">Ravi Gurjar</option>


				</select></td>

				<td align="center"><select name="delStatus">
						<c:choose>
							<c:when test="${subscriptionMap['deliveryId'] != null}">
								<option value="${subscriptionMap['deliveryStatus']}">${subscriptionMap['deliveryStatus']}</option>
							</c:when>
							<c:otherwise>
								<option value="0">Select</option>
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

	<!-- end import script -->
</body>
</html>