function SaveNewMessage(){
	var msg = $("#currMsg").val();	// Message from HTML
	var fName = $("#fName").val(); // First name from HTML
	var lName = $("#lName").val(); // Last name from HTML
	var currDateTime = Date();
	
	if(msg.length > 0 && fName.length > 0 && lName.length >0){
		$.post("serverside/SaveNewMessage.php", {newMsg: msg, dateTime:currDateTime, fName:fName,lName:lName}, function(res){
			// Check if php sent any error messages -- Basic way
			if(res.length == 0){
				alert("Success!");
				$("#currMsg").val("");
				GetClassMessages();
			}
			else
				alert(res);
		});
	}
	else{
		alert("Your forgot to enter your first or last name or the message!");
	}
}