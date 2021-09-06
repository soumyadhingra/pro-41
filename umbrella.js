class Umbrella{
    constructor(x,y){
        var options={
            'isStatic':true
        }
        this.body=Bodies.circle(x,y,50,options)
        this.radius=50
        this.image=loadImage("image/Walking Frame/walking_1.png","images/Walking Frame/walking_2.png","images/Walking Frame/walking_3.png,image/Walking Frame/walking_4.png","image/Walking Frame/walking_5.png","image/Walking Frame/walking_6.png","image/Walking Frame/walking_7.png","image/Walking Frame/walking_8.png")
    }
    display(){
        var pos=this.body.position;
        imageMode(CENTRE)
        this.image(this.image,pos.x,pos.y+70,300,300)
    }
}