var bird;
var pipes = [];
var spacing;
var pipe1, pipe2;

function setup() {
  createCanvas(640, 360);

  bird = new Bird(150, 200);

  pipe1 = new Pipes(640, 300, 30, 200, -5, "green")
  pipe2 = new Pipes(640, 0, 30, 150, -5, "green")

  pipes.push(pipe1)
  pipes.push(pipe2)



}


function draw() {
  background(225);


  if (frameCount % 60 == 0) {
    // console.log(framecount);
    let newPipeBot = new Pipes(640, 300, 30, 200, -4, "green");
    let newPipeTop = new Pipes(640, 0, 30, 150, -4, "green");
    pipes.push(newPipeBot)
    pipes.push(newPipeTop)
    console.log(pipes.length)
  }

  pipes.forEach(pipe => {
    pipe.drawPipes()

    if (pipes.isColliding()) {
      this.color = "red";
    }
    else {
      this.color = "green"
    }
  });



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
    this.velocity = 0;
    this.acceleration = 0.9;
    this.gravity = 0.22;
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


  isColliding() {
    //
    if (bird.x + bird.w.this.x && bird.x < this.x + this.w) {

      if (bird.y + bird.h > this.y && bird.y < this.y + this.h) {
        return true;
      }
    }
    return false;
  }
}

