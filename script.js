var css = document.querySelector("h3");
var color1 = document.querySelector(".color1");
var color2 = document.querySelector(".color2");
var body = document.getElementById("gradient");
var button = document.querySelector(".random");

function setGradient(){
	body.style.background = "linear-gradient(to right,"
	+color1.value
	+", "
	+color2.value
	+")";

	css.textContent = body.style.background + ";";
}

//random color
function randomColor(){
	var newColor = '#' + (Math.random() * 0xFFFFFF << 0).toString(16);
    return newColor;
}

//get random color
function getRandomColor(){
	color1.value = randomColor();
	color2.value = randomColor();
	// setGradient();
	body.style.background = "linear-gradient(to right,"
	+color1.value
	+", "
	+color2.value
	+")";

	css.textContent = body.style.background + ";";
}

//listen to the "input" action
color1.addEventListener("input", setGradient);

color2.addEventListener("input", setGradient);
setGradient();

//get random color after clikc button
button.addEventListener("click", getRandomColor);

