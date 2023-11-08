
function arrowHori() {
	
	this.xOrigin = 0, this.yOrigin = 0, this.lineLength = 0, this.dimensionTxt = "?", this.moveDimensionTxt=0, this.moveLine=0,this.unit = "ft.",this.widthLine = 1, this.strokeSty = "black", this.fon = 'italic 15px Arial, sans-serif',degreeRot=0;
	this.render = function(ctx, xOrigin, yOrigin, lineLength, dimensionTxt, moveDimensionTxt, moveLine, unit, widthLine, strokeSty, fon, degreeRot) {
		
		var convertRot=degreeRot*Math.PI/180;
		var xLoc = lineLength / 2;
		
		ctx.save();
		
		ctx.beginPath();
		ctx.strokeStyle = strokeSty;
		ctx.lineWidth = widthLine;
		ctx.lineCap = "square"; // butt, round, square
		ctx.lineJoin = "miter"; // bevel, round, miter
		ctx.miterLimit = 2;
		ctx.textAlign="center";
		ctx.textBaseline="middle";	
		//ctx.setLineDash([20,10,30,10,40,10]);
		//ctx.lineDashOffset = 10;
		//ctx.translate(0,0);
		//ctx.rotate(rot);
		//ctx.translate(xOrigin,yOrigin+moveLin);
	    ctx.moveTo(xOrigin,yOrigin+moveLine);
		ctx.lineTo(xOrigin+15,yOrigin+moveLine+3);
		ctx.lineTo(xOrigin,yOrigin+moveLine);
		ctx.lineTo(xOrigin+15,yOrigin+moveLine-3);
		ctx.lineTo(xOrigin,yOrigin+moveLine);
		ctx.lineTo(xOrigin,yOrigin+moveLine-5);
		ctx.lineTo(xOrigin,yOrigin+moveLine+5);
		ctx.lineTo(xOrigin,yOrigin+moveLine);
		ctx.lineTo(xOrigin+lineLength,yOrigin+moveLine);
		ctx.lineTo(xOrigin-15+lineLength,yOrigin+moveLine+3);
		ctx.lineTo(xOrigin+lineLength,yOrigin+moveLine);
		ctx.lineTo(xOrigin-15+lineLength,yOrigin+moveLine-3);
		ctx.lineTo(xOrigin+lineLength,yOrigin+moveLine);
		ctx.lineTo(xOrigin+lineLength,yOrigin+moveLine-5);
		ctx.lineTo(xOrigin+lineLength,yOrigin+moveLine+5);	
		ctx.lineTo(xOrigin+lineLength,yOrigin+moveLine);	
		
		ctx.stroke();				
		ctx.fillStyle = strokeSty;
        ctx.font = fon;
		//ctx.save();			
		ctx.rotate(convertRot);	
        ctx.fillText(dimensionTxt+" "+unit, xOrigin+lineLength*.5, yOrigin-20+moveDimensionTxt);
		
		ctx.restore();
		ctx.closePath();
		ctx.restore();
	
		
		//ctx.strokeText(dimensionTxt+" "+unit, xOrigin+len/2, y-20-dimLen/2, len);
	}	
}

