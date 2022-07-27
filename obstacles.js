const obstaclesArray = [];

class Obstacle {
    constructor() {
        this.top = (Math.random() * canvas.height/3) + 40;
        this.bottom = (Math.random() * canvas.height/3) + 40;
        this.x = canvas.width;
        this.width = 60;
        this.color = 'hsla(' + hue +', 80%, 50%, 0.6)';
        this.counter = false;
    }
    draw(){
        ctx.fillStyle = this.color;
        ctx.fillRect(this.x, 0, this.width, this.top);
        ctx.fillRect(this.x, canvas.height - this.bottom, this.width, this.bottom);
    }
    update(){
        this.x -= gameSpeed;
        if(!this.counted && this.x < char.x) {
            score += 1;
            this.counted = true;
        }
        this.draw();
    }
}

function handleObstacles(){
    if (frame % 20 === 0) {
        obstaclesArray.unshift(new Obstacle);
    }
    for( let i = 0; i < obstaclesArray.length; i += 1) {
        obstaclesArray[i].update();
    }
    if(obstaclesArray.length > 120) {
        obstaclesArray.pop(obstaclesArray[0])
    }
}