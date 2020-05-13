class Chain{
    constructor(bodyA , bodyB , length , stiffness , damping){
        var options = {
            bodyA:bodyA,
            bodyB:bodyB,
            length:length,
            stiffness:stiffness,
            damping:damping
        };
        this.chain = Constraint.create(options);
        World.add(world , this.chain);
        this.bodyA = bodyA;
        this.bodyB = bodyB;
    }
    display(stroke){
        strokeWeight(stroke);
        var posA = this.bodyA.position;
        var posB = this.bodyB.position;
        
        line(posA.x , posA.y , posB.x , posB.y);
    }
}