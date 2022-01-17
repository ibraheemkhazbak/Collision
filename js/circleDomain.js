class CircleDomain {
    constructor(cirlces) {
        this.cirlces = cirlces;
    }
    attemptCollision() {
this.attemptCollsionWithOtherCircles();
        this.attemptCollisionWithWall();

    }
    attemptCollsionWithOtherCircles(){
        for (let i = 0; i < this.cirlces.length; i++) {
            for (let j = i + 1; j < this.cirlces.length; j++) {
                let firstCircle = c[i];
                let secondCircle = c[j];
                let dist = this.getDist(firstCircle, secondCircle);

                if (this.bothCollided(dist, firstCircle, secondCircle)) {
                    firstCircle.collide(secondCircle);
                    secondCircle.collide(firstCircle);
                }
            }
        }
    }
    attemptCollisionWithWall(){
       for (let i = 0; i < this.cirlces.length; i++) {
        if (this.cirlces[i].touchedWall()) {
            this.cirlces[i].collideWithWall();
        }
           
       }
    }
    getDist(first, second) {
        return Math.abs(first.x - second.x);
    }
    bothCollided(dist, firstCircle, secondCircle) {
        return dist < firstCircle.mass / 2 + secondCircle.mass / 2;
    }
    show() {
        for (let i = 0; i < c.length; i++) {
            this.cirlces[i].show();
        }
    }
    update() {
        for (let i = 0; i < c.length; i++) {
            this.cirlces[i].update();
        }
    }
}