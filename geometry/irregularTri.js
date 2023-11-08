//type is vert "top/bottom" or hori "left/right" m = move the vertex
export function drawIrregularTri(ctx,x,y,wid,hei,m,clr,type){

//var m = .5;
//if(m>=.9){m=m-.2};
//if(m<=.1){m=m+.2};

 if(type=="vert"){isoTriTopBottom();}
 if(type=="hori"){isoTriLeftRight();}
function isoTriTopBottom(){     
    ctx.lineWidth=2;
    ctx.fillStyle=clr;
    ctx.strokeStyle="black";
    ctx.beginPath();
    ctx.moveTo(x,y);
    ctx.lineTo(x+wid*m,y+hei);
    ctx.lineTo(x+wid,y);
    ctx.lineTo(x,y);
    ctx.lineTo(x,y);
    ctx.stroke();
    ctx.fill();
    ctx.closePath();  } 

function isoTriLeftRight(){     
        ctx.lineWidth=2;
        ctx.fillStyle=clr;
        ctx.strokeStyle="black";
        ctx.beginPath();
        ctx.moveTo(x,y);
        ctx.lineTo(x+hei,y+wid*m);
        ctx.lineTo(x,y+wid);
        ctx.lineTo(x,y);     
        ctx.stroke();
        ctx.fill();
        ctx.closePath();  } 
}
