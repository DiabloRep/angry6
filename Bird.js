class Bird extends BaseClass {
  constructor(x,y){
    super(x,y,50,50);
    this.image = loadImage("sprites/bird.png");
    this.smoke = loadImage("sprites/smoke.png");
    this.trajectory = []
  }

  display() {
    //this.body.position.x = mouseX;
    //this.body.position.y = mouseY;


    super.display();
    if(this.body.velocity.x>10 && this.body.position.x>200){
    var position = [this.body.position.x,this.body.position.y]
    this.trajectory.push(position)
    }
    //i means image,o means x axis of imae,1 means y axis of image
    for(var i =0;i<this.trajectory.length;i++)
    {image(this.smoke,this.trajectory[i][0],this.trajectory[i][1])}
    
  }

}
