// Use this function to initialize the algorithm
var submit = function(){

	// Making a usable image to manipulate from the user's link
	var userString = document.getElementById("userString").value;
	var userLink = document.getElementById("userImage").value;
	var userImage = new Image();
	userImage.src = userLink;
	var canvas = document.getElementById("finalImage");
	var ctx = canvas.getContext("2d");
	userImage.crossOrigin="anonymous";
	
	userImage.onload = function(){
		canvas.width = userImage.width;
		canvas.height = userImage.height;
		ctx.drawImage(userImage, 0, 0, userImage.width, userImage.height, 0, 0 , canvas.width, canvas.height);
		var imgData = ctx.getImageData(0, 0, userImage.width, userImage.height);
		red = imgData.data[0];
		green = imgData.data[1];
		blue = imgData.data[2];
		alpha = imgData.data[3];
		alert(red + " " + green + " " + blue + " " + alpha);
	}

	// Converting the user's string to binary
	var stringLength = userString.length;
	var letters = [];
	for(var i = 0; i<stringLength; i++){
		letters.push(userString.charCodeAt(i).toString(2));
	}
	alert(letters);

}
