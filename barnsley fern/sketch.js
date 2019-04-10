var currentX = 0;
var currentY = 0;

function setup() {
    createCanvas(450, 610);
    background(255);
}

function draw() {
    generate();
}

function generate() {
    translate(width/2, height);
    //stroke(0, 200, 0, 150);
    //point(60*currentX, -currentY*60);
    noStroke();
    fill(0, 150);
    ellipse(60*currentX, -currentY*60, 2, 2);
    
    var nextX;
    var nextY;
    var chosen = random(100);
    if(chosen < 1) {
        nextX = 0;
        nextY = 0.16*currentY;
    } else if(chosen < 86) {
        nextX = 0.85*currentX + 0.04*currentY;
        nextY = -0.04*currentX + 0.85*currentY + 1.6;
    } else if(chosen < 93) {
        nextX = 0.2*currentX - 0.26*currentY;
        nextY = 0.23*currentX + 0.22*currentY + 1.6;
    } else {
        nextX = -0.15*currentX + 0.28*currentY;
        nextY = 0.26*currentX + 0.24*currentY + 0.44;    
    }

    console.log(nextX, nextY);
    
    currentX = nextX;
    currentY = nextY;
}