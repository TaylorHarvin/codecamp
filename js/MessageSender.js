function GetClassMessages(){
	$.post("serverside/GrabMessage.php", {}, function(res){
		// How to access HTML element with JQuery and set it's value
		$("#allMsg").val(res);
	});
}