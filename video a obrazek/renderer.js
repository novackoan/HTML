var buttonpress = 1;
$('#vid').hide();
//$('#odstavec').get(0).style.position = "absolute";
//$('#odstavec').get(0).style.bottom = "20%";

function button() {
	console.log("pressed")
	if (buttonpress==1) {
		buttonpress = 0;
		console.log(" play");
		$('#vid').show();
		$('#image').hide();
		$('#vid').get(0).play();
		
	} else {
		buttonpress = 1;
		console.log(" pause");
		$('#vid').get(0).pause();
		$('#vid').hide();
		$('#image').show();
	}
}
$('#vid').get(0).onended = function() {
	buttonpress = 1;
	console.log(" ended");
	$('#vid').hide();
	$('#image').show();
}