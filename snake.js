



var canvas = ducoument.getElementById("canvas")

var snake = new Snake();

var apple = new Apple(); 

var canvasContext = canvas.getContext('2d');

window.onload = ()=>{
    gameLoop();
}

function gameLoop(){
    setInterval(snow, 1000/15) 
}

function show(){
    update();
    draw();
}