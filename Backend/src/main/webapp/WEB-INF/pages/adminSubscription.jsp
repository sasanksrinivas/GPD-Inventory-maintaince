
<!-- main content -->
<div class="mainPage" id="main">

	<input type="date" name="filterinput" id="selectDate"
		style="margin-left: 10px;" required class="selectInput"> 
	<select
		name="filterinput" id="milkType" class="selectInput">
		<option value="">Milk Type</option>
		<option value="Cow Milk">Cow Milk</option>
		<option value="Buffalo Milk">Buffalo Milk</option>
	</select> <select name="filterinput" id="estimateDeliveryTime"
		class="selectInput">
		<option value="">Estimate Delivery Time</option>
		<option value="8 AM - 10 AM">8 AM - 10 AM</option>
		<option value="10 AM - 12 PM">10 AM - 12 PM</option>
	</select> <select name="filterinput" id="deliveryBoyName" class="selectInput">
		<option value="">DelBoyName</option>
		<option value="RAHAM KHAN">Raham Khan</option>
		<option value="Mohan Sharma">Mohan Khan</option>
	</select> <input type="submit" onclick="applyFilter()">

</div>

<script src="https://code.jquery.com/jquery-3.5.1.min.js"></script>
<script src="https://cdnjs.cloudflare.com/ajax/libs/crypto-js/3.1.2/rollups/aes.js"></script>
<script src="http://code.jquery.com/ui/1.11.0/jquery-ui.js"></script>
<script src="https://ajax.googleapis.com/ajax/libs/jquery/2.1.4/jquery.min.js"></script>

<script type="text/javascript">


$(document).ready(function() {
    var date = new Date();
    var today = new Date(date.getFullYear(), date.getMonth(), date.getDate());

    $('#selectDate').datepicker({
        format: 'dd-mm-yyyy',
        orientation: 'bottom'
    });

    $('#selectDate').datepicker('setDate', today);

});

    </script>


<script>

function applyFilter() {
    $('#selectDate').datepicker('setDate', new Date());

	
	alert(new Date().toISOString().slice(0, 19).replace('T', ' '));

	var data = "";
	if ($("#deliveryBoyName :selected").index()!=0){
		data = data + " and subscription.deliveryBoyName = '" + $("#deliveryBoyName :selected").text() + "'";
	 }

	 if ($("#estimateDeliveryTime :selected").index()!=0){
	 data = data + " and subscription.estimateDeliveryTime = '" + $("#estimateDeliveryTime :selected").text() + "'";
	 }

	 if ($("#milkType :selected").index()!=0){
	 data = data + " and subscription.milkType = '" + $("#milkType :selected").text() + "'";
	 }

	 var data = CryptoJS.AES.encrypt(data, ${key}).toString();
 
	$.ajax({
		type : 'POST',
		contentType : "application/json",
		url : "${pageContext.request.contextPath}/subscription/getSortedList?filterinput="
			   +data,
		dataType : 'json',
		success : function(
				response) {
			alert(response['result']);
		},

			error : function(error) {
				alert(error);
			}
		});

}

</script>


</body>
</html>