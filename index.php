<html>
	<head>
		<!-- Javascript to interact with HTML NOTE: JQuery is a special Javascript tool that you can download-->
		<script src="js\jquery\jquery-2.1.4.js"></script>
		<script src="js\MessageGrabber.js"></script>
		<script src="js\MessageSender.js"></script>
		<script src="js\WordFilter.js"></script>
		<h2 align="center">Code Camp Messages/Notes</h2>
	</head>
	<body onload="GetClassMessages()">
		<div align="center">
			<div>
				Get all code:<a href="CodeCamp.zip" download>HERE</a>
				Message Encrypt/Decrypt:<a href="msgencrypt.html">HERE</a>
				Word Filter:<a href="wordblocker.html">HERE</a>
				
			</div>
			<div>
				Enter your name to go with IP Address: <?php echo $_SERVER['REMOTE_ADDR']."=>".getHostByName(getHostName());?><br>
				<input id="fName" placeholder="First Name" type="text" />
				<input id="lName" placeholder="Last Name" type="text" />
			</div>
			<div>
				<h4>Your New Message:</h4>
				<textarea id="currMsg" onkeyup="FilterWords_Simple(this.value)" style="width:70%; height: 18%;border: 2px solid black"></textarea><br>
				<button onclick="SaveNewMessage()">Add Message</button>
			</div>
			<div>
				<h4>All Class Messages</h4>
				<button onclick="GetClassMessages()">Refresh Class <br>Messages</button><br>
				<textarea id="allMsg" style="width:70%; height: 80%;border: 2px solid black; overflow:scroll"></textarea><br>
			</div>
		</div>
	</body>
</html>