
function rectGrid() {
	this.x=0, this.y=0, this.objLength=10, this.objWidth=10, this.squSiz=20, this.lineWidth=1, this.fillSty="white", this.alpha=1, this.strokeSty="black", this.grid=true;
	this.render = function(ctx,x,y,objLength,objWidth,squSiz,lineWidth, fillSty, alpha, strokeSty, grid) {
	    var objLength2=objLength*squSiz;
		var objWidth2=objWidth*squSiz;
		ctx.beginPath();
		ctx.globalAlpha = alpha;
		ctx.strokeStyle=strokeSty;
		ctx.fillStyle=fillSty;
		ctx.lineWidth = lineWidth+1;
		ctx.fillRect(x,y,objLength2,objWidth2);
		ctx.strokeRect(x,y,objLength2,objWidth2);
		ctx.closePath();
		
		if(grid == true) {
		var len = objLength2/squSiz;
		var wid = objWidth2/squSiz;
		
		ctx.beginPath();
		ctx.strokeStyle = strokeSty;		
		ctx.lineWidth = lineWidth;
		for(var i = 0; i<len+1; i++) {
		ctx.moveTo(x+i*squSiz,y);
		ctx.lineTo(x+i*squSiz,y+objWidth2);		
		}
		for(var i = 0; i<wid+1; i++) {		
		ctx.moveTo(x,y+i*squSiz);
		ctx.lineTo(x+objLength2,y+i*squSiz);
		}		
		ctx.closePath();
        ctx.fill();	
		ctx.globalAlpha = 1;	 
	    ctx.stroke();			 
		}
	}
}

