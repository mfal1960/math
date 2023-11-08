//type is vert "top/bottom" or hori "left/right"
export function drawCircle(ctx,x,y,rad,s,f,clr){
    ctx.beginPath();
    ctx.fillStyle=clr;
    ctx.arc(x, y, rad, s, f);
    ctx.stroke();
    ctx.fill();
}
