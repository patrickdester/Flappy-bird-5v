class Bird {
  constructor(x, y) {
    this.x = x;
    this.y = y;
    this.w = 30;
    this.h = 30;
    this.vy = 0;
    this.velocity = 1.3;
    this.acceleration = 2;
    this.gravity = 0.3;
  }

  drawBird() {
    fill("red");
    circle(this.x, this.y, 30)

    this.vy += this.gravity;

    this.y += this.vy;

    if (this.y > 340) {
      this.vy = 0;
      this.y = 340;
    }

    if (this.y < 0) {
      this.vy = 0;
      this.y = 0;
    }
  }
}

class Pipes {
  constructor(x, y, w, h, vx, color) {
    this.x = x;
    this.y = y;
    this.w = w;
    this.h = h;
    this.vx = vx;
    this.color = color;
  }

  drawPipes() {
    fill(this.color)
    this.x = this.x + this.vx;
    rect(this.x, this.y, this.w, this.h)
  }

  checkCollision() {

    if (bird.x + bird.w > this.x && bird.x < this.x + this.w) {
      if (bird.y + bird.h > this.y && bird.y < this.y + this.h) {
         gameState = 2
      }
    }   
  }
}


var bird;
var pipes = [];
var spacing;
var pipe1, pipe2;
var gameState = 0; // 0 = menu, 1 = game, 2 = gameover
var x = 0

function setup() {
  createCanvas(640, 360);

  bird = new Bird(150, 200);  
}


function draw() {
  background(225);

  text("gameState" + gameState, 25,25);

  if (gameState == 0)  {
    Menu();
  }

  if (gameState == 1)  {
    game();
  }

  if (gameState == 2) {
    gameOver();
  }
  
  if (frameCount % 60 == 0) {
    // console.log(framecount);
    let gapHeight = 150;
    let randHeight = random(height - gapHeight);
    
    
    let newPipeTop = new Pipes(640, 0, 30, randHeight, -4, "green");    
    let newPipeBot = new Pipes(640, randHeight + gapHeight, 30, 200, -4, "green");
    
    pipes.push(newPipeBot)
    pipes.push(newPipeTop)
    //console.log(pipes.length)

  }

  pipes.forEach(pipe => {
    pipe.drawPipes();
    pipe.checkCollision();
  });
  bird.drawBird();
}



function keyPressed() {
  if (keyCode == 32) {
    bird.vy -= 5;
  }
  if (keyCode == 49) {
    gameState = 0;
  }

  if (keyCode == 50) {
    gameState = 1;
  }

  if (keyCode == 51) {
    gameState = 2;
  }
}

function Menu() {
  background("#ababab");
  text("MENU", 25, 45);
  text("1. MENU", 25, 65);
  text("2. START GAME", 25, 85)
  text("3. GAME OVER",25 , 105 )
}




function gameOver() {
  
  
  background("green");
  text("GAME OVER", 25, 45);
  x = 0;
}
