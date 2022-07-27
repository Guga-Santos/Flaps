class Char {
    constructor(){
        this.x = 150;
        this.y = 200;
        this.vy = 0;
        this.width = 20;
        this.height = 20;
        this.weight = 1;
        this.frameWidth = 46;
        this.frameHeight = 30;
        this.frameIndex = 0;
        this.scale = 1.2;
        this.color = 'red'
        this.counter = 0;
    }

    

    update(){
        let curve = Math.sin(angle) * 10
        if (this.y > canvas.height - (this.height * 2) + curve) {
            this.y = canvas.height - (this.height * 2) + curve;
            this.vy = 0
        } else {
            this.vy += this.weight;
            this.vy *= 0.9;
            this.y += this.vy;

        }
        if (this.y < 0 + this.height) {
            this.y = 0 + this.height;
            this.vy = - 1;
        }
        if (spacePress  &&  this.y > this.height) this.flap();

       this.counter += 1

       if(this.counter > 3) {
        this.frameIndex += 1
        this.counter = 0;
       }

       if(this.frameIndex > 6) {
        this.frameIndex = 0
       }

        
    }
    draw(){
        // ctx.fillStyle = this.color;
        // ctx.fillRect(this.x, this.y, this.width, this.height);

        const bat = new Image();
        bat.src = './images/FlyingBat.png'

        const bird = new Image();
        bird.src = './images/FlyingBird.png'

        ctx.drawImage(
            bat, //imagem
            this.frameIndex * this.frameWidth, // X
            0, // Y
            this.frameWidth, // Comprimento do frame recortado da imagem
            this.frameHeight, // Altura do frame recortado da imagem
            this.x, // posição X
            this.y, // posição Y
            this.frameWidth * this.scale, //Tamanho desejado da imagem
            this.frameHeight * this.scale // Altura desejada da imagem
        );


    }
    flap(){
        this.vy -= 2;
    }
}

const char = new Char();