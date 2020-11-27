class Slingshot{

    constructor(body1, point2){

        var options = {
            bodyA: body1,
            pointB: point2,
            length: 20,
            stiffness: 0.04
        }

        this.slingshot = Constraint.create(options);
        World.add(world,this.slingshot)
    }

    display(){
    if(this.slingshot.bodyA){
        
        push();
        strokeWeight(3);
        line(this.slingshot.bodyA.position.x, this.slingshot.bodyA.position.y, this.slingshot.pointB.x, this.slingshot.pointB.y);
        pop();
    }
}


    fly(){
        this.slingshot.bodyA = null;
    }
}

