 
 class Snake{
    constructor(x, y, size){
        this.x = x
        this.y = y
        this.size = size
        this.tail = [{x:this.x, y:this.y}]
        this.rotateX = 0
        this.rotateY = 1
    }

    move(){
            var newReact;
            if(this.rotateX == 1){
                newReact = {
                        x: this.tail[this.tail.length -1].x + this.size,
                        y: this.tail[this.tail.length -1].y
                }
            }else if(this.rotateX == -1){
                newReact = {
                        x: this.tail[this.tail.length -1].x - this.size,
                        y: this.tail[this.tail.length -1].y
                }
            }else if(this.rotateY ==1){
                newReact = {
                        x: this.tail[this.tail.length -1].x,
                        y: this.tail[this.tail.length -1].y + this.size
                }
            }else if(this.rotateY == -1){
                newReact = {
                        x: this.tail[this.tail.length -1].x,
                        y: this.tail[this.tail.length -1].y - this.size
                }
            }
        }   
    }



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