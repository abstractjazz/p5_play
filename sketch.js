let x, y;


// direction = 0;

function setup() {

  createCanvas(windowWidth, windowHeight);
 
}

function draw() {
  background('#59d0ff');
  x=windowWidth/2
  y=windowHeight/2
  for (let i=0; i < 1400; i+=9) {
    for (let i=0; i < 1400; i+=9) {
      stroke('#348258')
    strokeWeight(i/1500)
    noFill()
    ellipse(i, i, i+=10, mouseY)
    x+=1
    }
    stroke('#348258')
    strokeWeight(1)
    noFill()
    ellipse(i, i + 200,i+=10, mouseX)
    x+=1
  }
 } 


function windowResized () {
  resizeCanvas(windowWidth, windowHeight)
}



