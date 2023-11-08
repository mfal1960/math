function diaArrows() {
	this.xOrigin = 0, this.yOrigin = 0, this.base =0 , this.height = 0, this.dimensionTxt="?", this.moveDimensionTxt=0, this.moveLine=0, this.widthLine=1, this.unit="ft.",  this.strokeStyle = "black", this.font="italic 15px Arial, sans-serif",this.degreeRot=0;	
	this.render = function(ctx, xOrigin, yOrigin, base, height, dimensionTxt, moveDimensionTxt, moveLine, widthLine, unit, strokeStyle, font, degreeRot) {
	var pyth = Math.sqrt(Math.pow(base,2)+Math.pow(height,2));
	var tan = height/base;						
	var txtBase = height*.5/tan;		
	var dimX=txtBase;
	var dimY = height*.5;
	var rad=0;
	
	var convertRot=degreeRot*Math.PI/180;
		
	if(base>=0) {
		rad = Math.atan(tan); 
	} else {
		rad = 2*Math.PI*.5+Math.atan(tan);	
	}	
	  		ctx.beginPath(); //resets the current default path
			ctx.lineCap = "square"; // butt, round, square
			ctx.lineJoin = "miter"; // bevel, round, miter
			ctx.miterLimit = 3;
			ctx.strokeStyle = strokeStyle;	
			ctx.fillStyle = strokeStyle;				
			ctx.lineWidth = widthLine;	
			ctx.textAlign="center";
			ctx.textBaseline="middle";	
							
			ctx.font = font;				    				
			ctx.save();			
			ctx.translate(xOrigin+dimX+moveDimensionTxt,yOrigin+dimY);
			ctx.rotate(convertRot);	
			ctx.fillText(dimensionTxt + " " + unit,0,0);		
			ctx.restore();					
			//Construct Arrows			
			ctx.save();
			ctx.beginPath(); //resets the current default pat						
			ctx.translate(xOrigin + moveLine,yOrigin);			
			ctx.moveTo(0,0);			
			ctx.lineTo(10,0);
			ctx.lineTo(-10,0);			
			ctx.lineTo(0,0);	
			ctx.save();					
			ctx.rotate(rad);
			ctx.lineTo(0,0);
			ctx.lineTo(15,3);
			ctx.lineTo(0,0);
			ctx.lineTo(15,-3);
			ctx.lineTo(0,0);								
			ctx.lineTo(pyth,0);			
			ctx.lineTo(pyth-15,3);
			ctx.lineTo(pyth,0);	
			ctx.lineTo(pyth-15,-3);
			ctx.lineTo(pyth,0);
			ctx.restore();
			ctx.moveTo(base,height);
			ctx.lineTo(base+10,height);
			ctx.lineTo(base-10,height);
			ctx.lineTo(base,height);									
	        ctx.stroke();
			ctx.closePath();
			ctx.restore();
											
	}
}	

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
		ctx.save();			
		
		ctx.rotate(convertRot);	
        ctx.fillText(dimensionTxt+" "+unit, lineLength*.5, yOrigin-20+moveDimensionTxt);
		
		ctx.restore();
		ctx.closePath();
		ctx.restore();
	
		
		//ctx.strokeText(dimensionTxt+" "+unit, xOrigin+len/2, y-20-dimLen/2, len);
	}	
}

function arrowVert() {
	this.xOrigin = 0, this.yOrigin = 0, this.lineLength = 0, this.dimensionTxt = 0, this.moveDimensionTxt=0, this.moveLine=0,this.unit = "ft.",this.adjTxt = -10, this.widthLine = 1, this.strokeSty = "black", this.fon = 'italic 15px Arial, sans-serif', this.degreeRot=0;
	this.render = function(ctx, xOrigin, yOrigin, lineLength, dimensionTxt, moveDimensionTxt, moveLine, unit, adjTxt, widthLine, strokeSty, fon, degreeRot) {

		var convertRot=degreeRot*Math.PI/180;
		var yLoc = lineLength / 2-10;
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
		ctx.translate(xOrigin+moveLine,yOrigin);
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
		ctx.save();			
		ctx.translate(xOrigin+moveDimensionTxt,yOrigin+yLoc+10);
		ctx.rotate(convertRot);	
		ctx.fillText(dimensionTxt+" "+unit, 0, 0);
		ctx.restore();
		ctx.closePath();	
		ctx.restore();
		//ctx.strokeText(dimensionTxt+" "+unit, x+len/2, yOrigin-20-dimensionTxtLen/2, len);
	}	
}
