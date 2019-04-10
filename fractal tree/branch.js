function Branch(begin, end, weight) {
    this.begin = begin;
    this.end = end;
    this.weight = weight;
    this.finished = false;


    /*this.jitter = function () {

    }*/

    this.show = function() {
        strokeWeight(weight);
        stroke(255);
        line(this.begin.x, this.begin.y, this.end.x, this.end.y);
    }

    this.branch = function(right) {
        var angle = PI/7;
        if(!right) {
            angle = angle*(-1);
        }
        var direction = p5.Vector.sub(this.end, this.begin);
        direction.rotate(angle);
        direction.mult(0.7);
        var newEnd = p5.Vector.add(this.end, direction);

        var newBranch = new Branch(this.end, newEnd, weight*0.7);
        return newBranch;
    }
}