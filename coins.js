const coinsArray = [];

class Coin {
    constructor() {
        this.x = canvas.width;
        this.y = canvas.height / 2;
        this.width = 20;
        this.height = 20;
        this.color = 'yellow';
        this.counter = false;
        this.random = (Math.random() * canvas.height * 2);
    }
    draw() {
        ctx.fillStyle = this.color;
        ctx.fillRect(this.x, this.y, this.width, this.height )
    }
    update() {
        this.x -= gameSpeed;
        this.draw();
        this.y = this.random;
    }
}

let coinsSpace = 90;

function handleCoins(){
    if (frameC % coinsSpace === 0) {
        coinsArray.unshift(new Coin);
    }

    for( let i = 0; i < coinsArray.length; i += 1) {
        coinsArray[i].update();

        if(char.x > coinsArray[i].x - (coinsArray[i].width + 20)
            && char.x < coinsArray[i].x + (coinsArray[i].width + 20)
            && char.y > coinsArray[i].y - (coinsArray[i].height + 20)
            && char.y < coinsArray[i].y + (coinsArray[i].height+ 20)) {
            coinsArray.pop(coinsArray[i])
            coinScore += 1
        }   
    }
    if(coinsArray.length > 3) {
        coinsArray.pop(coinsArray[0])
    }

}