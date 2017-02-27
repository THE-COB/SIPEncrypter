var string = prompt("Type in your string");
var stringLength = string.length;
var letters = [];
for(var i = 0; i<stringLength; i++){
	letters.push(string.charCodeAt(i))
}
letters = letters.join("%");

alert(letters);



