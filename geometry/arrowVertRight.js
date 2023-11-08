export function drawArrowVertRight(ctx,x,y,l,text,meas,offSet){
    ctx.lineWidth=1;
    ctx.strokeStyle="black";
    ctx.beginPath();
    ctx.moveTo(x+offSet,y);
    ctx.lineTo(x+offSet-5,y);
    ctx.lineTo(x+offSet+5,y);
    ctx.lineTo(x+offSet,y);
    ctx.lineTo(x+offSet-5,y+10);
    ctx.lineTo(x+offSet,y);
    ctx.lineTo(x+offSet+5,y+10);
    ctx.lineTo(x+offSet,y);
    ctx.lineTo(x+offSet,y+l);
    ctx.lineTo(x+offSet-5,y+l);
    ctx.lineTo(x+offSet+5,y+l);
    ctx.lineTo(x+offSet,y+l);
    ctx.lineTo(x+offSet-5,y+l-10);
    ctx.lineTo(x+offSet,y+l);
    ctx.lineTo(x+offSet+5,y+l-10);
    ctx.lineTo(x+offSet,y+l);
    ctx.stroke();
    ctx.closePath();
    ctx.font = "10pt Arial";
    ctx.lineWidth=1;
    ctx.fillStyle="black";
    ctx.fillText(text+" "+meas,x+offSet+10,y+l*.5);
}