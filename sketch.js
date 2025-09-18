let ballNum;
let x;
let y;
let vx;

function setup() {
    createCanvas(400, 400);
    ballNum = 25;
    x = [];
    for (let i = 0; i < ballNum; i++) {
        x.push((width / (ballNum + 1)) * (i + 1));
    }
    y = 0;
    vx = 8;
}

function draw() {
    background(0, 0, 0, 20);

    y = y + vx;
    if (y > height) {
        y = 0;
    }

    fill(random(128, 255), random(128, 255), 255);
    for (let i = 0; i < x.length; i++) {
        circle(x[i], y, random(0, 10));
    }
}
