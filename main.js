var mouseEvent = "empty";
var lastpositionX, lastpositionY;

canvas = document.getElementById("myCanvas");
ctx = canvas.getContext("2d");

color = "black";
lineWidth = 3;
canvas.addEventListener("mousedown", mymousedown);
function mymousedown(e){
mouseEvent = "mousedown";
}

canvas.addEventListener("mouseMove", mymousemove);
function mymousemove(e){
currentpositionX = e.clientX - canvas.offsetLeft;
currentpositionY = e.clientY - canvas.offsetTop;
if(mouseEvent == "mousedown"){
ctx.beginPath();
ctx.strokeStyle = color;
ctx.lineWidth = lineWidth;
ctx.moveTo(lastpositionX, lastpositionY);

console.log("lastposition X and Y coordinates");
console.log("X = "+ lastpositionX + "Y = "+ lastpositionY);

ctx.lineTo(currentpositionX, currentpositionY);
console.log("currentposition X and Y coordinates");
console.log("X = "+ currentpositionX + "Y = "+ currentpositionY);
ctx.stroke();
}
lastpositionX = currentpositionX;
lastpositionY = currentpositionY;
}

canvas.addEventListener("mouseup", mymouseup);
function mymouseup(e){
mouseEvent = "mouseup";
}

canvas.addEventListener("mouseleave", mymouseleave);
function mymouseleave(e){
mouseEvent = "mouseleave";
}