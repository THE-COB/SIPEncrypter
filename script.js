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
		
		
		for(x = 0; x <= userImage.width; x++){
			for(y = 0; y <= userImage.height; y++){
				var imageData = ctx.getImageData(x, y, userImage.width, userImage.height);
				red = imageData.data[0];
				green = imageData.data[1];
				blue = imageData.data[2];
				alpha = imageData.data[3];
				console.log(red + " " + green + " " + blue + " " + alpha);
			}

		}
	}

	// Converting the user's string to binary
	var stringLength = userString.length;
	var letters = [];
	for(var i = 0; i<stringLength; i++){
		letters.push(userString.charCodeAt(i).toString(2));
	}
	alert(letters);

}
