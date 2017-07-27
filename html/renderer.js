var buttonpress = 1;
function button() {
	console.log("pressed")
	if (buttonpress==1) {
		buttonpress = 0;
		
		console.log(" play");
		
		$('#vid').get(0).play();
		
		
	} else {
		$('#vid').get(0).pause();
		
		console.log(" pause");
		
		buttonpress = 1;
	}
	

}