
var i = 1;

function move() {
	$('#image').animate({left: `${-i}px`})

  	 //document.getElementById("image").style.left = -i + "px";
  	i++
}
function myFunction() { 
    var time = 10; 
  		    
    document.getElementById("image").style.position = "relative";
  	setInterval(move, time);		
}
// if (i = 5000) {
// 	clearI
// }