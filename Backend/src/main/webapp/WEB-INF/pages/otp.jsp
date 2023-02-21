<!doctype html>
<html>
<head>
<meta charset="utf-8">
<title>Number verification with OTP</title>
<style>
.container {
	width: 302px;
	height: 175px;
	position: absolute;
	left: 0px;
	right: 0px;
	top: 0px;
	bottom: 0px;
	margin: auto;
}

#number, #verificationcode {
	width: calc(100% - 24px);
	padding: 10px;
	font-size: 20px;
	margin-bottom: 5px;
	outline: none;
}

#recaptcha-container {
	margin-bottom: 5px;
}

#send, #verify {
	width: 100%;
	height: 40px;
	outline: none;
}

.p-conf, .n-conf {
	width: calc(100% - 22px);
	border: 2px solid green;
	border-radius: 4px;
	padding: 8px 10px;
	margin: 4px 0px;
	background-color: rgba(0, 249, 12, 0.5);
	display: none;
}

.n-conf {
	border-color: red;
	background-color: rgba(255, 0, 4, 0.5);
}
</style>
</head>

<body onload="javascript:phoneAuth()">
	<div class="container">
		<div id="sender">
			<input type="text" id="number" placeholder="+91 is must">
			<div id="recaptcha-container"></div>
			<input type="button" id="send" value="Send" onClick="phoneAuth()">
		</div>
		<div id="verifier" style="display: none">
			<input type="text" id="verificationcode" placeholder="OTP Code">
			<input type="button" id="verify" value="Verify"
				onClick="codeverify()">
			<div class="p-conf">Number Verified</div>
			<div class="n-conf">OTP ERROR</div>
		</div>
	</div>
	<!--	add firebase SDK-->
	<script src="https://www.gstatic.com/firebasejs/6.0.2/firebase.js"></script>

	<script type="text/javascript">
	
	</script>
	<script type="text/javascript">
	// function for send message
function phoneAuth(){

	const firebaseConfig = {
			apiKey: "AIzaSyBksnDPMN1nvmIG_s0HzhY9-wlIlw4w9Vc",
			authDomain: "fir-demo-ff892.firebaseapp.com",
			databaseURL: "https://fir-demo-ff892-default-rtdb.firebaseio.com",
			projectId: "fir-demo-ff892",
			storageBucket: "fir-demo-ff892.appspot.com",
			messagingSenderId: "305546420789",
			appId: "1:305546420789:web:5518672eb3409464de477c",
			measurementId: "G-KDJG4BSJ16"
			};
	
			firebase.initializeApp(firebaseConfig);
			window.recaptchaVerifier = new firebase.auth.RecaptchaVerifier(
				    "recaptcha-container", {
				        size: "invisible"
				    }
				);
		 recaptchaVerifier.render();

		var number = "+917972846137";
	alert('sending');
	firebase.auth().settings.appVerificationDisabledForTesting = true;

	firebase.auth().signInWithPhoneNumber(number, window.recaptchaVerifier).then(function(confirmationResult){
		window.confirmationResult = confirmationResult;
		coderesult = confirmationResult;
		document.getElementById('sender').style.display = 'none';
		document.getElementById('verifier').style.display = 'block';
		alert('send');

		
	}).catch(function(error){
		alert(error.message);
	});
	
   
}
	// function for code verify
function codeverify(){
	var code = document.getElementById('verificationcode').value;
	coderesult.confirm(code).then(function(){
		document.getElementsByClassName('p-conf')[0].style.display = 'block';
		document.getElementsByClassName('n-conf')[0].style.display = 'none';
	}).catch(function(){
		document.getElementsByClassName('p-conf')[0].style.display = 'none';
		document.getElementsByClassName('n-conf')[0].style.display = 'block';
	})
	
	
	
}
</script>
	</script>
	</body>
</html>
