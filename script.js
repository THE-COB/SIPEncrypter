// Use this function to initialize the algorithm
var submit = function(){
	//Pulling User Input from HTML page
	var userString = document.getElementById("userString").value
	var userLink = document.getElementById("userImage").value
	var userImage = new Image();
	userImage.src = userLink;


}





var string = prompt("Type in your string");
var stringLength = string.length;
var letters = [];
for(var i = 0; i<stringLength; i++){
	letters.push(string.charCodeAt(i))
}
letters = letters.join("%");

alert(letters);



