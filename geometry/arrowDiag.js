export function drawArrowDiag(ctx,x,y,x2,y2,text,meas,offSet){
    ctx.lineWidth=1;
    ctx.strokeStyle="black";
    ctx.beginPath();
    ctx.moveTo(x,y);
    ctx.lineTo(x-5,y);
    ctx.lineTo(x+5,y);
    ctx.lineTo(x,y);
    ctx.lineTo(x2,y2);
    ctx.lineTo(x2-5,y2);
    ctx.lineTo(x2+5,y2);
    ctx.lineTo(x2,y2);
    ctx.stroke();
    ctx.closePath();
    ctx.font = "10pt Arial";
    ctx.lineWidth=1;
    ctx.fillStyle="black";  
    ctx.fillText(text+" "+meas,x+x2*.4+offSet,y+y2*.35);   
}
