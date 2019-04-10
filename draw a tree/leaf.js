function Leaf(x, y) {
    this.pos = createVector(x+random(-5,5), y+random(-5,5));
    this.width = 3;
    this.height = 7;
    this.reached = false;

    this.show = function() {
        fill(0, 200, 0);
        noStroke(); 
        ellipse(this.pos.x, this.pos.y, this.width, this.height);
    }
}