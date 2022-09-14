var bird;
var pipes = [];
var spacing;

function setup() {
  createCanvas(600, 400);

  bird = new Bird(150, 200);

  pipe1 = new Pipes(640, 300, 30, 200, -5, "green")
  pipe2 = new Pipes(640, 0, 30, 150, -5, "green")

  pipes.push(pipe1)
  pipes.push(pipe2)


  
}


function draw() {
  background(225);

  if (frameCount % 60 == 0) {
    console.log(framecount);
    let newPipeBot = new Pipes(640, 300, 30, 200, -5, "green");
    let newPipeTop = new Pipes(640, 0, 30, 150, -5, "green");
    
  }

  bird.drawBird();

}


function keyPressed() {
  if (keyCode == 32) {
    bird.vy -= 5;
  }
}

class Bird {
  constructor(x, y) {
    this.x = x;
    this.y = y;
    this.vy = 0;
    this.gravity = 0.26;
  }

  drawBird() {
    fill("red");
    circle(this.x, this.y, 30)

    this.vy += this.gravity;

    this.y += this.vy;

    if (this.y > 380) {
      this.vy = 0;
      this.y = 380;
    }

    if (this.y < 0) {
      this.vy = 0;
      this.y = 0;
    }
  }
}

class Pipes {
  constructor(x, y, w, h, vx, color)
   this.x = x;
   this.y = y;
   this.w = w;
   this.h = h;
   this.vx = vx;
   this.color = color;
  }

  drawPipes() {
    fill(this.color)
    rect(this.x, this.y, this.w, this.h)
    this.x = this.x + this.vx;
  }
