// Use this function to initialize the algorithm
var submit = function(){

	// Making a usable image to manipulate from the user's link
	var userString = document.getElementById("userString").value;
	var userLink = document.getElementById("userImage").value;
	var userImage = new Image();
	userImage.crossOrigin = "anonymous";
	userImage.src = userLink;
	var canvas = document.getElementById("finalImage");
	var ctx = canvas.getContext("2d");
	
	userImage.onload = function(){
		canvas.width = userImage.width;
		canvas.height = userImage.height;
		ctx.drawImage(userImage, 0, 0, userImage.width, userImage.height, 0, 0 , canvas.width, canvas.height);
		userImage.crossOrigin = 'anonymous';
		localStorage.setItem( "savedImageData", canvas.toDataURL("userImage/jpg") );
		
		for(x = 0; x <= userImage.width; x++){
			for(y = 0; y <= userImage.height; y++){

				if (Math.random() > .5){
					var randomBin = 1;
				}
				else{
					var randomBin = 0;
				}
				console.log(randomBin);
				var imageData = [];
				imageData.push(ctx.getImageData(x, y, userImage.width, userImage.height));
				imageData.crossOrigin = 'anonymous';
				var pixelData = [];
				pixelData.push(imageData.data);
				console.log(pixelData);
				pixelData.push(randomBin);
				red = pixelData[0];
				green = pixelData[1];
				blue = pixelData[2];
				alpha = pixelData[3];
				random = pixelData[4];
				console.log(red + " " + green + " " + blue + " " + alpha + " " + random);
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
