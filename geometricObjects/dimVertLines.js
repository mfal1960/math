function arrowVert() {
	this.xOrigin = 0, this.yOrigin = 0, this.lineLength = 0, this.dimensionTxt = 0, this.moveDimensionTxt=0, this.moveLine=0,this.unit = "ft.",this.adjTxt = 0, this.widthLine = 1, this.strokeSty = "black", this.fon = 'italic 15px Arial, sans-serif', this.degreeRot=0;
	this.render = function(ctx, xOrigin, yOrigin, lineLength, dimensionTxt, moveDimensionTxt, moveLine, unit, adjTxt, widthLine, strokeSty, fon, degreeRot) {

		var convertRot=degreeRot*Math.PI/180;
		var yLoc = lineLength / 2-10;
		
		ctx.beginPath();
		ctx.strokeStyle = strokeSty;
		ctx.lineWidth = widthLine;
		ctx.lineCap = "square"; // butt, round, square
		ctx.lineJoin = "miter"; // bevel, round, miter
		ctx.miterLimit = 2;
		ctx.textAlign="center";
		ctx.textBaseline="middle";	
		ctx.moveTo(xOrigin,yOrigin);
		ctx.lineTo(xOrigin+3,yOrigin+15);
		ctx.lineTo(xOrigin,yOrigin);
		ctx.lineTo(xOrigin-3,yOrigin+15);
		ctx.lineTo(xOrigin,yOrigin);
		ctx.lineTo(xOrigin-5,yOrigin);
		ctx.lineTo(xOrigin+5,yOrigin);
		ctx.lineTo(xOrigin,yOrigin);
		ctx.lineTo(xOrigin,yOrigin+lineLength);
		ctx.lineTo(xOrigin+3,yOrigin+lineLength-15);
		ctx.lineTo(xOrigin,yOrigin+lineLength);
		ctx.lineTo(xOrigin-3,yOrigin+lineLength-15);
		ctx.lineTo(xOrigin,yOrigin+lineLength);
		ctx.lineTo(xOrigin-5,yOrigin+lineLength);	
		ctx.lineTo(xOrigin+5,yOrigin+lineLength);	
		ctx.lineTo(xOrigin,yOrigin+lineLength);
				
		
		ctx.stroke();				
		ctx.fillStyle = strokeSty;
        ctx.font = fon;
		//ctx.save();			
		ctx.rotate(convertRot);	
        ctx.fillText(dimensionTxt+" "+unit, xOrigin+20, yOrigin+lineLength*.5);
		
		ctx.restore();
		ctx.closePath();
		ctx.restore();
		
	}	
}
