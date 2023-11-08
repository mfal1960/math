export function drawArrowHoriBottom(ctx,x,y,l,text,meas,offSet){
    ctx.beginPath();    
    ctx.moveTo(x,y+offSet);
    ctx.lineTo(x,y+offSet-5);
    ctx.lineTo(x,y+offSet+5);
    ctx.lineTo(x,y+offSet);
    ctx.lineTo(x+10,y+offSet-5);
    ctx.lineTo(x,y+offSet);
    ctx.lineTo(x+10,y+offSet+5);
    ctx.lineTo(x,y+offSet);
    ctx.lineTo(x+l,y+offSet);
    ctx.lineTo(x+l,y+offSet-5);
    ctx.lineTo(x+l,y+offSet+5);
    ctx.lineTo(x+l,y+offSet);
    ctx.lineTo(x+l-10,y+offSet-5);
    ctx.lineTo(x+l,y+offSet);
    ctx.lineTo(x+l-10,y+offSet+5);
    ctx.lineTo(x+l,y+offSet);
    ctx.stroke();
    ctx.closePath();
    ctx.font = "10pt Arial";
    ctx.lineWidth=1;
    ctx.fillStyle="black";
    ctx.fillText(text+" "+meas,x+l*.5-10,y+offSet+20);
}
