const canvas = document.getElementById('canvas1');
const ctx = canvas.getContext('2d');
canvas.width = 600;
canvas.height = 400;

const button = document.getElementById('button');

let spacePress = false;
let angle = 0;
let hue = 0;
let frame = 0;
let score = 0;
let gameSpeed = 2;
let scoreColor = 'red';

const gameOver = new Image();
gameOver.src = './images/gameOver.png'




function animate(){
    ctx.clearRect(0, 0, canvas.width, canvas.height);
    // ctx.fillRect(10, canvas.height - 60, 50, 50);
    handleObstacles(); 
    char.update();
    char.draw();
    ctx.fillStyle = scoreColor;
    ctx.font = '40px Georgia';
    ctx.strokeText(score, canvas.width - 50, 40);
    ctx.fillText(score, canvas.width -50, 40);
    angle += 0.1;
    hue += 1;
    frame += 1;
    handleParticles(); 
    collision();
    if (collision()) return;
    requestAnimationFrame(animate);
};

animate();

window.addEventListener('keydown', function(e){
 if (e.code === 'Space') spacePress = true;
});

window.addEventListener('keyup', function(e){
    if (e.code === 'Space') spacePress = false;
   });

window.addEventListener('mousedown', function(){
    spacePress = true;
   });

   window.addEventListener('mouseup', function(){
    spacePress = false;
   });

   window.addEventListener('touchstart', function(){
    spacePress = true;
   });

   window.addEventListener('touchend', function(){
    spacePress = false;
   });

button.addEventListener('click', () => {
    window.location.reload()
})



   function collision(){
    for (let i = 0; i < obstaclesArray.length; i += 1) {
        if(char.x < obstaclesArray[i].x + obstaclesArray[i].width 
            && char.x + char.width > obstaclesArray[i].x
            && ((char.y < 0 + obstaclesArray[i].top && char.y + char.height > 0)
            || (char.y > canvas.height - obstaclesArray[i].bottom
                && char.y + char.height < canvas.height))) {
                    
            ctx.clearRect(0, 0, canvas.width, canvas.height);
            ctx.drawImage(gameOver, 100,  120, 400, 100);
            ctx.fillStyle = 'white';
            ctx.font = '20px Georgia';
            ctx.strokeText(`Sua pontuação foi: ${score}`, 200, 250);
            ctx.fillText(`Sua pontuação foi: ${score}`, 200, 250);
            return true;
        }
    }
   }