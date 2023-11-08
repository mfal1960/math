
function trapezoidGrid(){
	//vertexLoc2 is the distance from the right of the trapezoid toward the center;
	this.x = 0, this.y = 0, this.base = 0, this.height = 0, this.vertexLoc1=0, this.vertexLoc2=0,this.squSiz=20, this.fillSty = "blue", this.alpha=1, this.strokeSty="black", this.lineWid = 1, this.grid=true, this.degreeRot=0;
	this.render = function(ctx,x,y,base,height,vertexLoc1,vertexLoc2,squSiz,fillSty,alpha,strokeSty,lineWid,grid,degreeRot) {	
			
			
		var hei = height * squSiz;
		var triLBase = 0;
		var triLHei = 0;
		var triLAngle = 0;
		var triLNumLines = 0;
		var recNumLines=0;
		var triRBase = 0;
		var triRHei = 0;
		var triRAngle = 0;
		var triRNumLines = 0;	
	
		baseLPosX = 0;
		baseRPosX = base*squSiz;
		topRPosX = (base+vertexLoc2)*squSiz;
		topLPosX = vertexLoc1*squSiz;						
		
		var convertDeg = degreeRot*Math.PI/180;
		//Draw Trapezoid;		
			ctx.rotate(convertDeg);		
			ctx.beginPath();
			ctx.fillStyle=fillSty;
			ctx.globalAlpha = alpha;
			ctx.strokeStyle=strokeSty;
			ctx.lineWidth=lineWid+1;
			ctx.moveTo(x+baseLPosX,y);
			ctx.lineTo(x+baseRPosX,y);
			ctx.lineTo(x+topRPosX,y-hei);
			ctx.lineTo(x+topLPosX,y-hei);
			ctx.lineTo(x+baseLPosX,y);
			ctx.fill();
			ctx.globalAlpha = 1;
			ctx.stroke();
			ctx.closePath();
					
			if(grid==true){
				drawGrid();	
			}	
		
		function drawGrid() {				
			ctx.beginPath();
			ctx.fillStyle=fillSty;
			ctx.strokeStyle=strokeSty;
			ctx.lineWidth=lineWid;
			
			if(vertexLoc1>0 && vertexLoc2>0){
				triLBase = Math.abs(vertexLoc1*squSiz);
				triLHei = height*squSiz;
				triLAngle = Math.atan(triLHei/triLBase)*180/Math.PI;
				triLNumLines = Math.abs(vertexLoc1);	
													
			  	for(var i = 0; i < triLNumLines; i++) {
					ctx.moveTo(x+baseLPosX + squSiz * i, y);
					ctx.lineTo(x+baseLPosX + squSiz * i, -1*Math.tan(triLAngle*Math.PI/180)*squSiz*i+y);	
			  	}
				for(var i = 1; i < height; i++){
					ctx.moveTo(x+baseLPosX + squSiz * i/Math.tan(triLAngle * Math.PI/180), -1*squSiz * i+y);
					ctx.lineTo(x+baseLPosX + topLPosX, -1*squSiz * i+y);
				}	
				
				recNumLines=base-vertexLoc1;
				
			  	for(var i = 0; i < recNumLines; i++) {
					ctx.moveTo(x+topLPosX + squSiz * i, y);
					ctx.lineTo(x+topLPosX+ squSiz * i, -hei+y);	
			  	}
				for(var i = 1; i < height; i++){
					ctx.moveTo(x+topLPosX, -1*squSiz * i+y);
					ctx.lineTo(x+baseRPosX, -1*squSiz * i+y);
				}	
				
				triRBase = Math.abs(vertexLoc2*squSiz);
				triRHei = height*squSiz;
				triRAngle = Math.atan(triRHei/triRBase)*180/Math.PI;
				triRNumLines = Math.abs(vertexLoc2);	
				
			  	for(var i = 0; i < triRNumLines; i++) {
					ctx.moveTo(x+baseRPosX + squSiz * i, -hei+y);
					ctx.lineTo(x+baseRPosX + squSiz * i, -hei+Math.tan(triRAngle*Math.PI/180)*(triRNumLines*squSiz-squSiz*i)+y);
			  	}
				for(var i = 1; i < height; i++){
					ctx.moveTo(x+baseRPosX, -1*squSiz * i+y);
					ctx.lineTo(x+baseRPosX + (squSiz * i)*Math.tan((90-triRAngle) * Math.PI/180), -1*squSiz * i+y);
				}												
			}	
			
			
			
			
			
						
			if(vertexLoc1>0 && vertexLoc2<0){
				triLBase = Math.abs(vertexLoc1*squSiz);
				triLHei = height*squSiz;
				triLAngle = Math.atan(triLHei/triLBase)*180/Math.PI;
				triLNumLines = Math.abs(vertexLoc1);	
													
			 	for(var i = 0; i < triLNumLines; i++) {
					ctx.moveTo(x+baseLPosX + squSiz * i, y);
					ctx.lineTo(x+baseLPosX + squSiz * i, -1*Math.tan(triLAngle*Math.PI/180)*squSiz*i+y);	
			  	}
				for(var i = 1; i < height; i++){
					ctx.moveTo(x+baseLPosX + squSiz * i/Math.tan(triLAngle * Math.PI/180), -1*squSiz * i+y);
					ctx.lineTo(x+baseLPosX + topLPosX, -1*squSiz * i+y);
				}	
			
				
				
				recNumLines=base-Math.abs(vertexLoc1)-Math.abs(vertexLoc2);
				
			  	for(var i = 0; i < recNumLines; i++) {
					ctx.moveTo(x+topLPosX + squSiz * i, y);
					ctx.lineTo(x+topLPosX+ squSiz * i, -hei+y);	
			  	}
				for(var i = 1; i < height; i++){
					ctx.moveTo(x+topLPosX, -1*squSiz * i+y);
					ctx.lineTo(x+topRPosX, -1*squSiz * i+y);
				}	
				
				triRBase = Math.abs(vertexLoc2*squSiz);
				triRHei = height*squSiz;
				triRAngle = Math.atan(triRHei/triRBase)*180/Math.PI;
				triRNumLines = Math.abs(vertexLoc2);	
				
			  	for(var i = 0; i < triRNumLines; i++) {
					ctx.moveTo(x+topRPosX + squSiz * i, y);
					ctx.lineTo(x+topRPosX + squSiz * i, -1*Math.tan(triRAngle*Math.PI/180)*(triRNumLines*squSiz-squSiz*i)+y);
			  	}	
				for(var i = 1; i < height; i++){
					ctx.moveTo(x+topRPosX, - hei+squSiz * i+y);
					ctx.lineTo(x+topRPosX + (squSiz * i)*Math.tan((90-triRAngle) * Math.PI/180), -hei+squSiz * i+y);
				}		
							
			}	
		
			if(vertexLoc1<0 && vertexLoc2>0){
				triLBase = Math.abs(vertexLoc1*squSiz);
				triLHei = height*squSiz;
				triLAngle = Math.atan(triLHei/triLBase)*180/Math.PI;
				triLNumLines = Math.abs(vertexLoc1);	
													
			  	for(var i = 0; i < triLNumLines; i++) {
					ctx.moveTo(x+topLPosX + squSiz * i, -hei+y);
					ctx.lineTo(x+topLPosX + squSiz * i, -hei+Math.tan(triLAngle*Math.PI/180)*squSiz*i+y);	
			  	}
				for(var i = 1; i < height; i++){
					ctx.moveTo(x+baseLPosX, -hei+squSiz * i+y);
					ctx.lineTo(x+baseLPosX-Math.tan((90-triLAngle)*Math.PI/180)*(height*squSiz-squSiz*i), -hei+squSiz * i+y);
				}	
				
				recNumLines=base;
				
			  	for(var i = 0; i < recNumLines; i++) {
					
					ctx.moveTo(x+baseLPosX+ squSiz * i, y);
					ctx.lineTo(x+baseLPosX+ squSiz * i, -hei+y);	
			  	}
				for(var i = 1; i < height; i++){
					ctx.moveTo(x+baseLPosX, -1*squSiz * i+y);
					ctx.lineTo(x+baseRPosX, -1*squSiz * i+y);
				}	
				
				triRBase = Math.abs(vertexLoc2*squSiz);
				triRHei = height*squSiz;
				triRAngle = Math.atan(triRHei/triRBase)*180/Math.PI;
				triRNumLines = Math.abs(vertexLoc2);	
				
			  	for(var i = 0; i < triRNumLines; i++) {
					ctx.moveTo(x+baseRPosX + squSiz * i, -hei+y);
					ctx.lineTo(x+baseRPosX + squSiz * i, -hei+Math.tan(triRAngle*Math.PI/180)*(triRNumLines*squSiz-squSiz*i)+y);
			  	}	
				for(var i = 1; i < height; i++){
					ctx.moveTo(x+baseRPosX, -1*squSiz * i+y);
					ctx.lineTo(x+baseRPosX + (squSiz * i)*Math.tan((90-triRAngle) * Math.PI/180), -1*squSiz * i+y);
				}	
				
										
			}	
		    
			if(vertexLoc1<0 && vertexLoc2<0){
				triLBase = Math.abs(vertexLoc1*squSiz);
				triLHei = height*squSiz;
				triLAngle = Math.atan(triLHei/triLBase)*180/Math.PI;
				triLNumLines = Math.abs(vertexLoc1);	
													
			  	for(var i = 0; i < triLNumLines; i++) {
					ctx.moveTo(x+topLPosX + squSiz * i, -hei+y);
					ctx.lineTo(x+topLPosX + squSiz * i, -hei+Math.tan(triLAngle*Math.PI/180)*squSiz*i+y);	
			  	}
				for(var i = 1; i < height; i++){
					ctx.moveTo(x+baseLPosX, -hei+squSiz * i+y);
					ctx.lineTo(x+baseLPosX-Math.tan((90-triLAngle)*Math.PI/180)*(height*squSiz-squSiz*i), -hei+squSiz * i+y);
				}	
				
				recNumLines=base-Math.abs(vertexLoc2);
				
			  	for(var i = 0; i < recNumLines; i++) {
					ctx.moveTo(x+baseLPosX + squSiz * i, y);
					ctx.lineTo(x+baseLPosX+ squSiz * i, -hei+y);	
			  	}
				for(var i = 1; i < height; i++){
					ctx.moveTo(x+baseLPosX, -1*squSiz * i+y);
					ctx.lineTo(x+topRPosX, -1*squSiz * i+y);
				}	
				
			triRBase = Math.abs(vertexLoc2*squSiz);
				triRHei = height*squSiz;
				triRAngle = Math.atan(triRHei/triRBase)*180/Math.PI;
				triRNumLines = Math.abs(vertexLoc2);	
				
			  	for(var i = 0; i < triRNumLines; i++) {
					ctx.moveTo(x+topRPosX + squSiz * i, y);
					ctx.lineTo(x+topRPosX + squSiz * i, -1*Math.tan(triRAngle*Math.PI/180)*(triRNumLines*squSiz-squSiz*i)+y);
			  	}	
				for(var i = 1; i < height; i++){
					ctx.moveTo(x+topRPosX, - hei+squSiz * i+y);
					ctx.lineTo(x+topRPosX + (squSiz * i)*Math.tan((90-triRAngle) * Math.PI/180), -hei+squSiz * i+y);
				}						
			}	
			
			
			
			    
			
		//New
		
			if(vertexLoc1==0 && vertexLoc2>0){
				triLBase = Math.abs(vertexLoc1*squSiz);
				triLHei = height*squSiz;
				triLAngle = Math.atan(triLHei/triLBase)*180/Math.PI;
				triLNumLines = Math.abs(vertexLoc1);	
																	
				recNumLines=base-vertexLoc1;
				
			  	for(var i = 0; i < recNumLines; i++) {
					ctx.moveTo(x+topLPosX + squSiz * i, y);
					ctx.lineTo(x+topLPosX+ squSiz * i, -hei+y);	
			  	}
				for(var i = 1; i < height; i++){
					ctx.moveTo(x+topLPosX, -1*squSiz * i+y);
					ctx.lineTo(x+baseRPosX, -1*squSiz * i+y);
				}	
				
				triRBase = Math.abs(vertexLoc2*squSiz);
				triRHei = height*squSiz;
				triRAngle = Math.atan(triRHei/triRBase)*180/Math.PI;
				triRNumLines = Math.abs(vertexLoc2);	
				
			  	for(var i = 0; i < triRNumLines; i++) {
					ctx.moveTo(x+baseRPosX + squSiz * i, -hei+y);
					ctx.lineTo(x+baseRPosX + squSiz * i, -hei+Math.tan(triRAngle*Math.PI/180)*(triRNumLines*squSiz-squSiz*i)+y);
			  	}
				for(var i = 1; i < height; i++){
					ctx.moveTo(x+baseRPosX, -1*squSiz * i+y);
					ctx.lineTo(x+baseRPosX + (squSiz * i)*Math.tan((90-triRAngle) * Math.PI/180), -1*squSiz * i+y);
				}												
			}	
			
			
			
			if(vertexLoc1==0 && vertexLoc2<0){
			    	triLBase = Math.abs(vertexLoc1*squSiz);
				triLHei = height*squSiz;
				triLAngle = Math.atan(triLHei/triLBase)*180/Math.PI;
				triLNumLines = Math.abs(vertexLoc1);	
				
				recNumLines=base-Math.abs(vertexLoc1)-Math.abs(vertexLoc2);
				
			  	for(var i = 0; i < recNumLines; i++) {
					ctx.moveTo(x+topLPosX + squSiz * i, y);
					ctx.lineTo(x+topLPosX+ squSiz * i, -hei+y);	
			  	}
				for(var i = 1; i < height; i++){
					ctx.moveTo(x+topLPosX, -1*squSiz * i+y);
					ctx.lineTo(x+topRPosX, -1*squSiz * i+y);
				}	
				
				triRBase = Math.abs(vertexLoc2*squSiz);
				triRHei = height*squSiz;
				triRAngle = Math.atan(triRHei/triRBase)*180/Math.PI;
				triRNumLines = Math.abs(vertexLoc2);	
				
			  	for(var i = 0; i < triRNumLines; i++) {
					ctx.moveTo(x+topRPosX + squSiz * i, y);
					ctx.lineTo(x+topRPosX + squSiz * i, -1*Math.tan(triRAngle*Math.PI/180)*(triRNumLines*squSiz-squSiz*i)+y);
			  	}	
				for(var i = 1; i < height; i++){
					ctx.moveTo(x+topRPosX, - hei+squSiz * i+y);
					ctx.lineTo(x+topRPosX + (squSiz * i)*Math.tan((90-triRAngle) * Math.PI/180), -hei+squSiz * i+y);
				}		
							
			}	
		
			if(vertexLoc1<0 && vertexLoc2==0){
				triLBase = Math.abs(vertexLoc1*squSiz);
				triLHei = height*squSiz;
				triLAngle = Math.atan(triLHei/triLBase)*180/Math.PI;
				triLNumLines = Math.abs(vertexLoc1);	
													
			  	for(var i = 0; i < triLNumLines; i++) {
					ctx.moveTo(x+topLPosX + squSiz * i, -hei+y);
					ctx.lineTo(x+topLPosX + squSiz * i, -hei+Math.tan(triLAngle*Math.PI/180)*squSiz*i+y);	
			  	}
				for(var i = 1; i < height; i++){
					ctx.moveTo(x+baseLPosX, -hei+squSiz * i+y);
					ctx.lineTo(x+baseLPosX-Math.tan((90-triLAngle)*Math.PI/180)*(height*squSiz-squSiz*i), -hei+squSiz * i+y);
				}	
				
				recNumLines=base;
				
			  	for(var i = 0; i < recNumLines; i++) {
					
					ctx.moveTo(x+baseLPosX+ squSiz * i, y);
					ctx.lineTo(x+baseLPosX+ squSiz * i, -hei+y);	
			  	}
				for(var i = 1; i < height; i++){
					ctx.moveTo(x+baseLPosX, -1*squSiz * i+y);
					ctx.lineTo(x+baseRPosX, -1*squSiz * i+y);
				}										
			}	
		    
			if(vertexLoc1>0 && vertexLoc2==0){
				triLBase = Math.abs(vertexLoc1*squSiz);
				triLHei = height*squSiz;
				triLAngle = Math.atan(triLHei/triLBase)*180/Math.PI;
				triLNumLines = Math.abs(vertexLoc1);	
													
			 	for(var i = 0; i < triLNumLines; i++) {
					ctx.moveTo(x+baseLPosX + squSiz * i, y);
					ctx.lineTo(x+baseLPosX + squSiz * i, -1*Math.tan(triLAngle*Math.PI/180)*squSiz*i+y);	
			  	}
				for(var i = 1; i < height; i++){
					ctx.moveTo(x+baseLPosX + squSiz * i/Math.tan(triLAngle * Math.PI/180), -1*squSiz * i+y);
					ctx.lineTo(x+baseLPosX + topLPosX, -1*squSiz * i+y);
				}	
				
				
				recNumLines=base-Math.abs(vertexLoc1)-Math.abs(vertexLoc2);
				
			  	for(var i = 0; i < recNumLines; i++) {
					ctx.moveTo(x+topLPosX + squSiz * i, y);
					ctx.lineTo(x+topLPosX+ squSiz * i, -hei+y);	
			  	}
				for(var i = 1; i < height; i++){
					ctx.moveTo(x+topLPosX, -1*squSiz * i+y);
					ctx.lineTo(x+topRPosX, -1*squSiz * i+y);
				}	
				
						
			}	
			
			
			if(vertexLoc1==0 && vertexLoc2==0){
	       	    	triLBase = Math.abs(vertexLoc1*squSiz);
				triLHei = height*squSiz;
				triLAngle = Math.atan(triLHei/triLBase)*180/Math.PI;
				triLNumLines = Math.abs(vertexLoc1);	
													
				
				recNumLines=base-Math.abs(vertexLoc2);
				
			  	for(var i = 0; i < recNumLines; i++) {
					ctx.moveTo(x+baseLPosX + squSiz * i, y);
					ctx.lineTo(x+baseLPosX+ squSiz * i, -hei+y);	
			  	}
				for(var i = 1; i < height; i++){
					ctx.moveTo(x+baseLPosX, -1*squSiz * i+y);
					ctx.lineTo(x+baseRPosX, -1*squSiz * i+y);
				}	
				
						
			}	
			
			
			ctx.fill();
			
			ctx.stroke();
			ctx.closePath();			
		}		
	}
}
	
	

