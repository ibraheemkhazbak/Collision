class Circle {
    constructor(x, y, mass, direction) {
        this.x = x;
        this.y = y;
        this.mass = mass;
        this.direction = direction;
        this.currentDirection =direction;
    }
    show() {
        ellipse(this.x, this.y, this.mass, this.mass);
    }
    update() {
        this.currentDirection=this.direction;

        this.x += this.currentDirection;
    }
    collide(other){
            this.direction=((this.mass-other.mass)/(this.mass+other.mass))
            *this.direction+
            ((2*other.mass)/(this.mass+other.mass))
            *other.currentDirection;
        }
        collideWithWall(){
            this.direction*=-1;
        }
        touchedWall(){

            if(this.x>width/2-this.mass/2||this.x<-width/2+this.mass/2){
                return true;
            }
        }

}