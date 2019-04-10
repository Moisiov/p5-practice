var angle = 0;
var tree = [];
var leaves = [];
var startWeight = 10;

var count = 0;
var limit = 7;

function setup() {
    createCanvas(400, 400)

    var a = createVector(width/2, height);
    var b = createVector(width/2, height-100);
    var root = new Branch(a, b, startWeight);

    tree[0] = root;
}

function mousePressed() {
    if(count < limit) {
        for(var i = tree.length - 1; i >= 0; --i) {
            if(!tree[i].finished) {
                tree.push(tree[i].branch(true));
                tree.push(tree[i].branch(false));
            }
            tree[i].finished = true;
        }
    }
    count++;

    if(count === limit) {
        for(var i = 0; i < tree.length; ++i) {
            if(!tree[i].finished) {
                var leaf = tree[i].end.copy();
                leaves.push(leaf);
            }
        }
    }
}

function draw() {
    background(51);
    for(var i = 0; i < tree.length; ++i) {
        tree[i].show();
        //tree[i].jitter();
    }

    for(var i = 0; i < leaves.length; ++i) {
        fill(255, 0, 100, 100);
        noStroke();
        ellipse(leaves[i].x, leaves[i].y, 8, 8);
    }
}