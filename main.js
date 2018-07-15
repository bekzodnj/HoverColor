

//Get the button
var div = document.getElementById("box");


var colors = new Array("#F06292", "#E91E63", "#9C27B0", "#673AB7", "#3F51B5", "#2196F3", "#cd34fc");



div.addEventListener("mouseover", changeColor);


function changeColor(){
	var num = Math.floor(Math.random()*colors.length);
	div.style.background= colors[num];
}


