var buttonpress = 1;
var i = 0;
var interval;
$('#vid').hide();
myFunction();
//$('#odstavec').get(0).style.position = "absolute";
//$('#odstavec').get(0).style.bottom = "20%";

function button() {
	console.log("pressed")
	if (buttonpress==1) {
		buttonpress = 0;
		console.log(" play");
		$('#vid').show();
		$('#image').hide();
		clearInterval(interval);
		i = 0;
		document.getElementById("image").style.left = -i + "px";
		//$('#image').get(0).style.position = "initial";
		$('#vid').get(0).play();
		
	} else {
		buttonpress = 1;
		console.log(" pause");
		$('#vid').get(0).pause();
		$('#vid').hide();
		$('#image').show();
		myFunction();
		
	}
}
$('#vid').get(0).onended = function() {
	buttonpress = 1;
	console.log(" ended");
	$('#vid').hide();
	$('#image').show();
	myFunction();
}


function move() {
	//$('#image').animate({left: `${-i}px`})

  	document.getElementById("image").style.left = -i + "px";
  	i++
}
function myFunction() { 
    var time = 10; 
  		    
    document.getElementById("image").style.position = "relative";
  	interval = setInterval(move, time);	
    
   	
}
