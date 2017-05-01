// Use this function to initialize the algorithm
var encrypt = function(){

	// Making a usable image to manipulate from the user's link
	var userString = document.getElementById("userString").value;
	var userLink = document.getElementById("userImage").value;
	var userImage = new Image();
	userImage.crossOrigin = "anonymous";
	userImage.src = userLink;
	var canvas = document.getElementById("finalImage");
	var ctx = canvas.getContext("2d");

	var key = [];

		// Converting the user's string to binary
	var stringLength = userString.length;
	var letters = [];
	for(var i = 0; i<stringLength; i++){
		letters.push(parseInt(userString.charCodeAt(i).toString(2)));
	}
	console.log(letters);
	
	userImage.onload = function(){
		canvas.width = userImage.width;
		canvas.height = userImage.height;
		ctx.drawImage(userImage, 0, 0, userImage.width, userImage.height, 0, 0 , canvas.width, canvas.height);
		userImage.crossOrigin = 'anonymous';
		
		for(x = 0; x <= userImage.width; x++){
			for(y = 0; y <= userImage.height; y++){

				var imageData = ctx.getImageData( x, y, 1, 1);
				var data = imageData.data;

				if (Math.random() > .5){

					data[3] = 254; 
					ctx.putImageData( imageData, x, y)

				}
				else{
				}

			}

		}

	

	//Creates key for decrytion based on random pixels that have the right data integers

		//Iterate through each of the terms of the array
		for(let z of letters){
			//Iterate through each of the bits of the term
			for(bitCount = 0; bitCount <= 7; bitCount++){

				//Generates value to pick a random pixel
				var randomX = Math.floor(Math.random() * userImage.width);
				var randomY = Math.floor(Math.random() * userImage.height);

				//Isolates a bit in a term of the letters array
				var bit = z.substring(bitCount, bitCount + 1);

				//If the data bit of a random pixel is == to the bit one one of the letters in the string, add it to the pixel to the key
				if(bit == 255 - ctx.getImageData(randomX, randomY, 1, 1).data[3]){

					//Pushes right answers to final key array
					key.push(randomX + "-" + randomY);					
				}
			}
		}

		document.getElementById("finalKey").value = "Key: " + key;

	}

}

var decrypt = function(){

	//Intialize the image
	var userLink = document.getElementById("toDe").value;
	var userImage = new Image();
	userImage.crossOrigin = "anonymous";
	userImage.src = userLink;
	var canvas = document.getElementById("canvas");
	var ctx = canvas.getContext("2d");

	userImage.onload = function(){

		canvas.width = userImage.width;
		canvas.height = userImage.height;
		ctx.drawImage(userImage, 0, 0, userImage.width, userImage.height, 0, 0 , canvas.width, canvas.height);

		var userKey = document.getElementById("userKey").value;
		var userKey = userKey.split(",");
		var userFinalString = [];
		var userFinalBin = [];

		for(let n of userKey){

			var splitKeyVal = n.split("-");
			var xCord = parseInt(splitKeyVal[0]);
			var yCord = parseInt(splitKeyVal[1]);
			var data = ctx.getImageData( xCord, yCord, 1, 1).data[3];
			var pixelBin = 255 - data;
			userFinalBin.push(pixelBin);

		}

		

	}


}
