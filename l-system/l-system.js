var axiom = "X";
var sentence = axiom;
var len = 100;
var weight = 3;
var angle;

var rules = [];
rules[0] = {
    a: "X",
    b: "F+[[X]-X]-F[-FX]+X"
}

rules[1] = {
    a: "F",
    b: "FF"
}


function mousePressed() {
    console.log('mousePressed');
    len *= 0.5;
    weight *= 0.7;
    
    var nextSentence = "";
    for(var i = 0; i < sentence.length; ++i) {
        var current = sentence.charAt(i);
        var found = false;
        for(var j = 0; j < rules.length; ++j) {
            if(current == rules[j].a) {
                found = true;
                nextSentence += rules[j].b;
                break;
            }
        }
        if(!found) {
            nextSentence += current;
        }
    }
    sentence = nextSentence;
    turtle();
}

function turtle() {
    translate(width/2, height);
    strokeWeight(weight);
    stroke(255);
    for(var i = 0; i < sentence.length; ++i) {
        var current = sentence.charAt(i);

        if(current == "F") {
            line(0, 0, 0 , -len);
            translate(0, -len);
        } else if(current == "+") {
            rotate(angle);
        } else if(current == "-") {
            rotate(-angle);
        } else if(current == "[") {
            push();
        } else if(current == "]") {
            pop();
        }
    }
}

function setup() {
    createCanvas(400,400);
    angle = radians(25);
    background(51);
    turtle();
    
}