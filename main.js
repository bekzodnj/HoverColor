

//Get the button
var div = document.getElementById("box");

//array of colors
var colors = new Array("#F06292", "#E91E63", "#9C27B0", "#673AB7", "#3F51B5", "#2196F3", "#cd34fc");

div.addEventListener("mouseover", changeColor);

//changing color on hover
function changeColor(){
	var num = Math.floor(Math.random()*colors.length);
	div.style.background= colors[num];
}


