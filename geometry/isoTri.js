//type is vert "top/bottom" or hori "left/right"
export function drawIsoTri(ctx,x,y,wid,hei,clr,type){
 if(type=="vert"){isoTriTopBottom();}
 if(type=="hori"){isoTriLeftRight();}
      
    function isoTriTopBottom(){ 
    
    //ctx.lineWidth=2;
    ctx.fillStyle=clr;
    ctx.strokeStyle="black";
    ctx.beginPath();
    ctx.moveTo(x,y);
    ctx.lineTo(x+wid*.5,y+hei);
    ctx.lineTo(x+wid,y);
    ctx.lineTo(x,y);
    ctx.lineTo(x,y);
    ctx.stroke();
    ctx.fill();
    ctx.lineWidth=0;
    ctx.closePath();

    //ctx.lineWidth=2;
    ctx.strokeStyle="black";
    ctx.beginPath();
    ctx.setLineDash([5,5]);
    ctx.moveTo(x+wid*.5,y);
    ctx.lineTo(x+wid*.5,y+hei);
    ctx.stroke();  
    ctx.closePath();
    ctx.setLineDash([0]);
   } 

    function isoTriLeftRight(){
        
        ctx.lineWidth=2;
        ctx.fillStyle=clr;
        ctx.strokeStyle="black";
        ctx.beginPath();
        ctx.moveTo(x,y);
        ctx.lineTo(x+hei,y+wid*.5);
        ctx.lineTo(x,y+wid);
        ctx.lineTo(x,y); 
        ctx.stroke();
        ctx.fill();
        ctx.lineWidth=0;
        ctx.closePath(); 

        ctx.lineWidth=2;
        ctx.strokeStyle="black";
        ctx.beginPath();
        ctx.setLineDash([5,5]);
       
        ctx.moveTo(x,y+wid*.5);
        ctx.lineTo(x+hei,y+wid*.5);
        ctx.stroke();
        ctx.fill();
        ctx.closePath();
        ctx.setLineDash([0]);
        
        } 

}
