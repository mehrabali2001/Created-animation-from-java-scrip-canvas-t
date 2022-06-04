var c = document.querySelector("canvas");
c.width = window.innerWidth;
c.height = window.innerHeight;

var c1 = c.getContext('2d');

var mouse={
    x:undefined,
    y:undefined
}

var maxradius=50;
var minradius=7;

var colorArray=['blue','red','green','yellow','pink'];

 

window.addEventListener('mousemove',function(event){

    mouse.x=event.x
    mouse.y=event.y;

})

function Circle(x, y, vx, vy, radius) {
    this.x = x;
    this.y = y;
    this.vx = vx;
    this.vy = vy;
    this.radius = radius;
    this.drow = function () {
        c1.beginPath();
        c1.arc( this.x, this. y,  this.radius, 0, Math.PI * 2, false);
        c1.strokeStyle = "yellow";
        c1.stroke();
        c1.fillStyle=colorArray[Math.floor(Math.random()*colorArray.length)];
        c1.fill();
    }
    this.move = function () {
        if (this.x + this.radius> innerWidth ||this.x - this.radius < 0) {
            this.vx = -this.vx;

        }
        if (this.y + this.radius > innerHeight || this.x -this. radius < 0) {
            this. vy = -this.vy;

        }


        this.x +=this.vx;
        this.y +=this.vy;

        if(mouse.x-this.x<50 && mouse.x-this.x>-50 && mouse.y-this.y<50 && mouse.y-this.y>-50){
            if(this.radius<maxradius){
                this.radius+=1;
            }
        }
        else if(this.radius>minradius){
            this.radius-=1;
        }
        this.drow();

    }

}
var CircleArray=[];

for(var i=1;i<=560;i++)
{
    var x = Math.random() * innerWidth;
    var y = Math.random() * innerHeight;
    var vx =1;
    var vy =1; 
    var radius=50;
    CircleArray.push(new Circle(x,y,vx,vy,radius)); 
}
 
function hello() {
    requestAnimationFrame(hello);
    c1.clearRect(0, 0, innerWidth, innerHeight);

     for(var i=1;i<CircleArray.length;i++) 
     {
         CircleArray[i].move();
     } 

}
hello();