export function drawRigTri(ctx,x,y,wid,hei,clr){
    ctx.lineWidth=2;
    ctx.fillStyle=clr;
    ctx.strokeStyle="black";
    ctx.beginPath();
    ctx.moveTo(x,y);
    ctx.lineTo(x,y+hei);
    ctx.lineTo(x+wid,y+hei);
    ctx.lineTo(x,y);
    ctx.stroke();
    ctx.fill();
    ctx.closePath();   
}
