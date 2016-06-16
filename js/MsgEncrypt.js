function ClearMsg(){
	$("#msg").val('');
	$("#encMsg").val('');
}


function EncryptMsg(){
	var msg = $("#msg").val();
	var encMsg = ""
	var encKey = parseInt($("#encKey").val(),10);
	var encMsgBox = $("#encMsg");
	
	for(msgIndex = 0; msgIndex < msg.length; msgIndex++){
		encMsg += String.fromCharCode(msg.charCodeAt(msgIndex) + encKey);
		console.log(String.fromCharCode(msg.charCodeAt(msgIndex)) +" to "+ String.fromCharCode(msg.charCodeAt(msgIndex) + encKey));
	}
	
	$("#encMsg").val(encMsg);
}


function DencryptMsg(){
	var keyHit = '';
	var encMsg = $("#encMsg").val();
	var msg = ""
	var encKey = parseInt($("#encKey").val(),10);
	var msgBox = $("#msg");
	
	for(encMsgIndex = 0; encMsgIndex < encMsg.length; encMsgIndex++){
		
		msg += String.fromCharCode(encMsg.charCodeAt(encMsgIndex) - encKey);
		console.log(String.fromCharCode(encMsg.charCodeAt(encMsgIndex)) +" to "+ String.fromCharCode(encMsg.charCodeAt(encMsgIndex) - encKey));
	}
	
	msgBox.val(msg);
}
