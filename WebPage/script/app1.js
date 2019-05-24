//alert("width= "+window.innerWidth+" , height = "+window.innerHeight)
function slipAndSlide() { 
if(window.innerHeight > 657) {
      $("#img-sub").show(1250);
$('html, body').animate({
         scrollTop:913
     }, 1500);
} else {
   	$('html, body').animate({
   		scrollTop:553
   	}, 1500)
}
function scroll() {
	var scroll = $("html, body").scrollTop();
	if(scroll > 100) {
		$("input,#check1,#check2,#check3,#check4,label,textarea,#why,#text1,#text2,#text3,#text4").css({
			'animation':"fadein 3s"
		})
		$("#text1").css({
			'animation':'fadein 3s'
		})
	}
} 
}
setInterval(scroll)
var name = $("#name").val()
	var email = $("#email").val()
	var d = new Date()
	var sec = d.getSeconds()
	var min = d.getMinutes()
	var hour = d.getHours()
	var month = d.getMonth()
	var year = d.getFullYear()
	var day = d.getDay()
	var date = d.getDate()
function cookies() {
	localStorage.setItem("_lastName_",username)
	localStorage.setItem("_lastEmail_",email)
	localStorage.setItem("_lastDate",day+"-"+month+"-"+year+" "+hour+":"+min+":"+sec)
}