export function circleGrid(){
  //Cosntruct circle	
	this.x=0, this.y=0, this.rad=5, this.squSiz=20, this.lineWid=1, this.startAng=0, this.endAng=6.28, this.anticlockwis=false, this.fillSty="white", this.alpha, this.strokeSty="black", this.grid=true;
	this.render = function(ctx, x, y, rad, squSiz, lineWid, startAng, endAng, anticlockwis, fillSty, alpha, strokeSty, grid){
	//ctx.arc(x, y, radius, startAngle, endAngle, anticlockwise); 
	var angle = 0;//Math.acos(squSize/radius)*180/Math.PI;
	var opp = 0;
	var rad2 = rad*squSiz;
	ctx.beginPath();
	ctx.globalAlpha = alpha;
	ctx.arc(x, y, rad2, startAng, endAng, anticlockwis); 
	ctx.strokeStyle =strokeSty;
	ctx.fillStyle=fillSty;
	ctx.lineWidth=lineWid+1;
	ctx.closePath();
	ctx.fill();
	ctx.globalAlpha = 1;
	ctx.stroke();	
	
	if(grid == true) {
	ctx.beginPath();
	ctx.strokeStyle =strokeSty;
	ctx.lineWidth=lineWid;
	
	  for(var i = 0; i<rad2/squSiz; i++){
		angle = Math.acos(squSiz*i/rad2)*180/Math.PI;
		opp = rad2*Math.sin(angle*Math.PI/180);	
		ctx.moveTo(x+squSiz*i,y-opp);
		ctx.lineTo(x+squSiz*i,y+opp);				
		ctx.moveTo(x-opp,y+squSiz*i);
		ctx.lineTo(x+opp,y+squSiz*i);				
	  }
	  for(var i = 0; i<rad2/squSiz; i++){
		angle = Math.acos(squSiz*(i+1)/rad2)*180/Math.PI;
		opp = rad2*Math.sin(angle*Math.PI/180);
	    ctx.moveTo(x+squSiz*-(i+1),y-opp);
		ctx.lineTo(x+squSiz*-(i+1),y+opp);		
		ctx.moveTo(x-opp,y+squSiz*-(i+1));
		ctx.lineTo(x+opp,y+squSiz*-(i+1));	
	  }
	ctx.closePath();
	ctx.stroke();
	}
    }
}