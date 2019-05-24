var url = location.href;
$(document).ready(function() {
	if(url.match("login=empty")) {
		$("#errMsg").html("You did not fill in all fields!!");
	}
	if(url.match("login=wrong")) {
		$("#wrongMsg").html("Your username or password is wrong!!")
	}
});