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
		ctx.drawImage(userImage, 0, 0);
		var imageData = ctx.getImageData(0, 0, canvas.width, canvas.height);
		var data = imageData.data;
		console.log(data);
	}

	// Converting the user's string to binary
	var stringLength = userString.length;
	var letters = [];
	for(var i = 0; i<stringLength; i++){
		letters.push(userString.charCodeAt(i).toString(2));
	}
	alert(letters);

	console.log(imageData);

}
