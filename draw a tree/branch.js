function Branch(parent, pos, dir, weight) {
    this.pos = pos;
    this.parent = parent;
    this.dir = dir;
    this.origDir = this.dir.copy();
    this.count = 0;
    this.len = 2;
    this.weight = weight;

    this.reset = function() {
        this.dir = this.origDir.copy();
        this.count = 0; 
    }

    this.next = function() {
        var nextDir = p5.Vector.mult(this.dir, this.len);
        var nextPos = p5.Vector.add(this.pos, nextDir);
        var nextBranch = new Branch(this, nextPos, this.dir.copy(), this.weight*0.985);
        return nextBranch;
    }

    this.show = function() {
        if(parent != null) {
            strokeWeight(this.weight);
            stroke(255);
            line(this.pos.x, this.pos.y, this.parent.pos.x, this.parent.pos.y);
        }
    }
} 