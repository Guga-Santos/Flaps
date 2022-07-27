const particlesArray = [];

class Particle {
    constructor() {
        this.x = char.x + 2,
        this.y = char.y + 20 ;
        this.size = Math.random() * 7 ;
        this.speedY = (Math.random() * 2    ) - 0.5;
        this.color = 'hsla(' + hue +', 80%, 50%, 0.2)';
    }
    update(){
        this.x -= gameSpeed;
        this.y += this.speedY;
    }
    draw(){
        ctx.fillStyle = this.color;
        ctx.beginPath();
        ctx.arc(this.x, this.y, this.size, 0, Math.PI * 2);
        ctx.fill();
    }
}

function handleParticles(){
    particlesArray.unshift(new Particle);
    for(i = 0; i < particlesArray.length; i += 1) {
        particlesArray[i].update();
        particlesArray[i].draw();
    }

    if(particlesArray.length > 200) {
        for(let i = 0; i < 80; i += 1) {
            particlesArray.pop(particlesArray[i]);
        }
    }
}