export function drawRect(ctx,x,y,w,h,clr){   
    ctx.lineWidth = 1;
    ctx.fillStyle=clr;
    ctx.fillRect(x,y,w,h);
    ctx.strokeStyle = "black";
    ctx.strokeRect(x,y,w,h);  
    ctx.stroke();   
}


