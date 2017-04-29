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
		
		for(x = 0; x <= userImage.width; x++){
			for(y = 0; y <= userImage.height; y++){

				if (Math.random() > .5){
					var randomBin = 1;
				}
				else{
					var randomBin = 0;
				}

				var color = ctx.getImageData(x, y, userImage.width, userImage.height).data;
				var pixelData = {
					red: color[0],
					green: color[1],
					blue: color[2],
					alpha: color[3],
					data: randomBin
				};

			}

		}
	}

	// Converting the user's string to binary
	// Converting the user's string to binary
	var stringLength = userString.length;
	var letters = [];
	for(var i = 0; i<stringLength; i++){
		letters.push(parseInt(userString.charCodeAt(i).toString(2)));
	}
	console.log(letters);

}
