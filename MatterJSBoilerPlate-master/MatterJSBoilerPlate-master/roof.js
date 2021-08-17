class roof{
    constructor(x,y,width,height){
        this.body = bodies.rectengle(x,y,width,height,{isStatic:true})
        this.width = width;
        this.height = height;
        World.add(world,this.body);
    }

    display(){
        Push();
        rectMode(CENTER);
        Fill(128,128,128);
        rect(this.body.position.x,this.body.position.width,this.height);
        Pop()

    }
}