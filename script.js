var bird;
var pipe;

function setup() {
  createCanvas(600, 400);

  bird = new Bird(150, 200);

}


function draw() {
  background(225);
   
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

class Pipe()