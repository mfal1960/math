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

