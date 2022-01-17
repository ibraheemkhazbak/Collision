let c = [];
let domain;
function setup() {
    createCanvas(600, 600);
    c[0] = new Circle(100, 0, 200, -2);
    c[1] = new Circle(-80, 0, 100, 0);
  c[2] = new Circle(-200, 0, 30, 0);
    domain = new CircleDomain(c);
}

function draw() {
    background(0);
    translate(width / 2, height / 2);

    domain.show();
    domain.attemptCollision();
    domain.update();



}


