var tree;
var max_dist = 150;
var min_dist = 8;
var clicked;

function handleClick() {
    if(!clicked) {
        clicked = true;
    } else {
        clicked = false;
    }
}

function handleClick2() {
    clicked = false;
    tree = new Tree();
}

/*function mousePressed() {
    if(mouseX < 400 && mouseY < 400) {
        tree.addLeaf();
    }
}*/

function setup() {
    createCanvas(400, 400);
    clicked = false;
    tree = new Tree();
    var button = createButton("Grow");
    button.mousePressed(handleClick);
    var button2 = createButton("Reset");
    button2.mousePressed(handleClick2);
}

function draw() {
    background(51);
    if(mouseIsPressed) {
        if(mouseX < 400 && mouseY < 400) {
            tree.addLeaf();
        }
    }
    tree.show();
    if(clicked) {
        tree.grow();
    }
}