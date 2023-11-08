
function trapezoidGrid(){
	//_vertexLoc2 is the distance from the right of the trapezoid toward the center;
	this.x = 0, this.y = 0, this._base = 10, this._height = 6, this._vertexLoc1=0, this._vertexLoc2=0,this.squSiz=20, this.fillSty = "white", this.alpha=1, this.strokeSty="black", this.lineWid = 1, this.grid=true, this.degreeRot=0;
	this.render = function(ctx,x,y,_base,_height,_vertexLoc1,_vertexLoc2,squSiz,fillSty,alpha,strokeSty,lineWid,grid,degreeRot) {	
					
			
		var hei = _height * squSiz;
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
		baseRPosX = _base*squSiz;
		topRPosX = (_base+_vertexLoc2)*squSiz;
		topLPosX = _vertexLoc1*squSiz;						
		
		var convertDeg = degreeRot*Math.PI/180;
				
		ctx.rotate(convertDeg);		
			ctx.beginPath();
			ctx.fillStyle=fillSty;
			ctx.globalAlpha = alpha;
			ctx.strokeStyle=strokeSty;
			ctx.lineWidth=lineWid+1;
			ctx.moveTo(baseLPosX,0);
			ctx.lineTo(baseRPosX,0);
			ctx.lineTo(topRPosX,-hei);
			ctx.lineTo(topLPosX,-hei);
			ctx.lineTo(baseLPosX,0);
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
			
			if(_vertexLoc1>0 && _vertexLoc2>0){
				triLBase = Math.abs(_vertexLoc1*squSiz);
				triLHei = _height*squSiz;
				triLAngle = Math.atan(triLHei/triLBase)*180/Math.PI;
				triLNumLines = Math.abs(_vertexLoc1);	
													
			  	for(var i = 0; i < triLNumLines; i++) {
					ctx.moveTo(baseLPosX + squSiz * i, 0);
					ctx.lineTo(baseLPosX + squSiz * i, -1*Math.tan(triLAngle*Math.PI/180)*squSiz*i);	
			  	}
				for(var i = 1; i < _height; i++){
					ctx.moveTo(baseLPosX + squSiz * i/Math.tan(triLAngle * Math.PI/180), -1*squSiz * i);
					ctx.lineTo(baseLPosX + topLPosX, -1*squSiz * i);
				}	
				
				recNumLines=_base-_vertexLoc1;
				
			  	for(var i = 0; i < recNumLines; i++) {
					ctx.moveTo(topLPosX + squSiz * i, 0);
					ctx.lineTo(topLPosX+ squSiz * i, -hei);	
			  	}
				for(var i = 1; i < _height; i++){
					ctx.moveTo(topLPosX, -1*squSiz * i);
					ctx.lineTo(baseRPosX, -1*squSiz * i);
				}	
				
				triRBase = Math.abs(_vertexLoc2*squSiz);
				triRHei = _height*squSiz;
				triRAngle = Math.atan(triRHei/triRBase)*180/Math.PI;
				triRNumLines = Math.abs(_vertexLoc2);	
				
			  	for(var i = 0; i < triRNumLines; i++) {
					ctx.moveTo(baseRPosX + squSiz * i, -hei);
					ctx.lineTo(baseRPosX + squSiz * i, -hei+Math.tan(triRAngle*Math.PI/180)*(triRNumLines*squSiz-squSiz*i));
			  	}
				for(var i = 1; i < _height; i++){
					ctx.moveTo(baseRPosX, -1*squSiz * i);
					ctx.lineTo(baseRPosX + (squSiz * i)*Math.tan((90-triRAngle) * Math.PI/180), -1*squSiz * i);
				}												
			}	
			
			
			
			
			
			
			
			
			
			
			
						
			if(_vertexLoc1>0 && _vertexLoc2<0){
				triLBase = Math.abs(_vertexLoc1*squSiz);
				triLHei = _height*squSiz;
				triLAngle = Math.atan(triLHei/triLBase)*180/Math.PI;
				triLNumLines = Math.abs(_vertexLoc1);	
													
			 	for(var i = 0; i < triLNumLines; i++) {
					ctx.moveTo(baseLPosX + squSiz * i, 0);
					ctx.lineTo(baseLPosX + squSiz * i, -1*Math.tan(triLAngle*Math.PI/180)*squSiz*i);	
			  	}
				for(var i = 1; i < _height; i++){
					ctx.moveTo(baseLPosX + squSiz * i/Math.tan(triLAngle * Math.PI/180), -1*squSiz * i);
					ctx.lineTo(baseLPosX + topLPosX, -1*squSiz * i);
				}	
				
				
				recNumLines=_base-Math.abs(_vertexLoc1)-Math.abs(_vertexLoc2);
				
			  	for(var i = 0; i < recNumLines; i++) {
					ctx.moveTo(topLPosX + squSiz * i, 0);
					ctx.lineTo(topLPosX+ squSiz * i, -hei);	
			  	}
				for(var i = 1; i < _height; i++){
					ctx.moveTo(topLPosX, -1*squSiz * i);
					ctx.lineTo(topRPosX, -1*squSiz * i);
				}	
				
				triRBase = Math.abs(_vertexLoc2*squSiz);
				triRHei = _height*squSiz;
				triRAngle = Math.atan(triRHei/triRBase)*180/Math.PI;
				triRNumLines = Math.abs(_vertexLoc2);	
				
			  	for(var i = 0; i < triRNumLines; i++) {
					ctx.moveTo(topRPosX + squSiz * i, 0);
					ctx.lineTo(topRPosX + squSiz * i, -1*Math.tan(triRAngle*Math.PI/180)*(triRNumLines*squSiz-squSiz*i));
			  	}	
				for(var i = 1; i < _height; i++){
					ctx.moveTo(topRPosX, - hei+squSiz * i);
					ctx.lineTo(topRPosX + (squSiz * i)*Math.tan((90-triRAngle) * Math.PI/180), -hei+squSiz * i);
				}		
							
			}	
		
			if(_vertexLoc1<0 && _vertexLoc2>0){
				triLBase = Math.abs(_vertexLoc1*squSiz);
				triLHei = _height*squSiz;
				triLAngle = Math.atan(triLHei/triLBase)*180/Math.PI;
				triLNumLines = Math.abs(_vertexLoc1);	
													
			  	for(var i = 0; i < triLNumLines; i++) {
					ctx.moveTo(topLPosX + squSiz * i, -hei);
					ctx.lineTo(topLPosX + squSiz * i, -hei+Math.tan(triLAngle*Math.PI/180)*squSiz*i);	
			  	}
				for(var i = 1; i < _height; i++){
					ctx.moveTo(baseLPosX, -hei+squSiz * i);
					ctx.lineTo(baseLPosX-Math.tan((90-triLAngle)*Math.PI/180)*(_height*squSiz-squSiz*i), -hei+squSiz * i);
				}	
				
				recNumLines=_base;
				
			  	for(var i = 0; i < recNumLines; i++) {
					
					ctx.moveTo(baseLPosX+ squSiz * i, 0);
					ctx.lineTo(baseLPosX+ squSiz * i, -hei);	
			  	}
				for(var i = 1; i < _height; i++){
					ctx.moveTo(baseLPosX, -1*squSiz * i);
					ctx.lineTo(baseRPosX, -1*squSiz * i);
				}	
				
				triRBase = Math.abs(_vertexLoc2*squSiz);
				triRHei = _height*squSiz;
				triRAngle = Math.atan(triRHei/triRBase)*180/Math.PI;
				triRNumLines = Math.abs(_vertexLoc2);	
				
			  	for(var i = 0; i < triRNumLines; i++) {
					ctx.moveTo(baseRPosX + squSiz * i, -hei);
					ctx.lineTo(baseRPosX + squSiz * i, -hei+Math.tan(triRAngle*Math.PI/180)*(triRNumLines*squSiz-squSiz*i));
			  	}	
				for(var i = 1; i < _height; i++){
					ctx.moveTo(baseRPosX, -1*squSiz * i);
					ctx.lineTo(baseRPosX + (squSiz * i)*Math.tan((90-triRAngle) * Math.PI/180), -1*squSiz * i);
				}	
				
										
			}	
		    
			if(_vertexLoc1<0 && _vertexLoc2<0){
				triLBase = Math.abs(_vertexLoc1*squSiz);
				triLHei = _height*squSiz;
				triLAngle = Math.atan(triLHei/triLBase)*180/Math.PI;
				triLNumLines = Math.abs(_vertexLoc1);	
													
			  	for(var i = 0; i < triLNumLines; i++) {
					ctx.moveTo(topLPosX + squSiz * i, -hei);
					ctx.lineTo(topLPosX + squSiz * i, -hei+Math.tan(triLAngle*Math.PI/180)*squSiz*i);	
			  	}
				for(var i = 1; i < _height; i++){
					ctx.moveTo(baseLPosX, -hei+squSiz * i);
					ctx.lineTo(baseLPosX-Math.tan((90-triLAngle)*Math.PI/180)*(_height*squSiz-squSiz*i), -hei+squSiz * i);
				}	
				
				recNumLines=_base-Math.abs(_vertexLoc2);
				
			  	for(var i = 0; i < recNumLines; i++) {
					ctx.moveTo(baseLPosX + squSiz * i, 0);
					ctx.lineTo(baseLPosX+ squSiz * i, -hei);	
			  	}
				for(var i = 1; i < _height; i++){
					ctx.moveTo(baseLPosX, -1*squSiz * i);
					ctx.lineTo(topRPosX, -1*squSiz * i);
				}	
				
			triRBase = Math.abs(_vertexLoc2*squSiz);
				triRHei = _height*squSiz;
				triRAngle = Math.atan(triRHei/triRBase)*180/Math.PI;
				triRNumLines = Math.abs(_vertexLoc2);	
				
			  	for(var i = 0; i < triRNumLines; i++) {
					ctx.moveTo(topRPosX + squSiz * i, 0);
					ctx.lineTo(topRPosX + squSiz * i, -1*Math.tan(triRAngle*Math.PI/180)*(triRNumLines*squSiz-squSiz*i));
			  	}	
				for(var i = 1; i < _height; i++){
					ctx.moveTo(topRPosX, - hei+squSiz * i);
					ctx.lineTo(topRPosX + (squSiz * i)*Math.tan((90-triRAngle) * Math.PI/180), -hei+squSiz * i);
				}						
			}	
			
			
			
			    
			
		//New
			if(_vertexLoc1==0 && _vertexLoc2>0){
				triLBase = Math.abs(_vertexLoc1*squSiz);
				triLHei = _height*squSiz;
				triLAngle = Math.atan(triLHei/triLBase)*180/Math.PI;
				triLNumLines = Math.abs(_vertexLoc1);	
																	
				recNumLines=_base-_vertexLoc1;
				
			  	for(var i = 0; i < recNumLines; i++) {
					ctx.moveTo(topLPosX + squSiz * i, 0);
					ctx.lineTo(topLPosX+ squSiz * i, -hei);	
			  	}
				for(var i = 1; i < _height; i++){
					ctx.moveTo(topLPosX, -1*squSiz * i);
					ctx.lineTo(baseRPosX, -1*squSiz * i);
				}	
				
				triRBase = Math.abs(_vertexLoc2*squSiz);
				triRHei = _height*squSiz;
				triRAngle = Math.atan(triRHei/triRBase)*180/Math.PI;
				triRNumLines = Math.abs(_vertexLoc2);	
				
			  	for(var i = 0; i < triRNumLines; i++) {
					ctx.moveTo(baseRPosX + squSiz * i, -hei);
					ctx.lineTo(baseRPosX + squSiz * i, -hei+Math.tan(triRAngle*Math.PI/180)*(triRNumLines*squSiz-squSiz*i));
			  	}
				for(var i = 1; i < _height; i++){
					ctx.moveTo(baseRPosX, -1*squSiz * i);
					ctx.lineTo(baseRPosX + (squSiz * i)*Math.tan((90-triRAngle) * Math.PI/180), -1*squSiz * i);
				}												
			}	
			
			
			
			if(_vertexLoc1==0 && _vertexLoc2<0){
				triLBase = Math.abs(_vertexLoc1*squSiz);
				triLHei = _height*squSiz;
				triLAngle = Math.atan(triLHei/triLBase)*180/Math.PI;
				triLNumLines = Math.abs(_vertexLoc1);	
				
				recNumLines=_base-Math.abs(_vertexLoc1)-Math.abs(_vertexLoc2);
				
			  	for(var i = 0; i < recNumLines; i++) {
					ctx.moveTo(topLPosX + squSiz * i, 0);
					ctx.lineTo(topLPosX+ squSiz * i, -hei);	
			  	}
				for(var i = 1; i < _height; i++){
					ctx.moveTo(topLPosX, -1*squSiz * i);
					ctx.lineTo(topRPosX, -1*squSiz * i);
				}	
				
				triRBase = Math.abs(_vertexLoc2*squSiz);
				triRHei = _height*squSiz;
				triRAngle = Math.atan(triRHei/triRBase)*180/Math.PI;
				triRNumLines = Math.abs(_vertexLoc2);	
				
			  	for(var i = 0; i < triRNumLines; i++) {
					ctx.moveTo(topRPosX + squSiz * i, 0);
					ctx.lineTo(topRPosX + squSiz * i, -1*Math.tan(triRAngle*Math.PI/180)*(triRNumLines*squSiz-squSiz*i));
			  	}	
				for(var i = 1; i < _height; i++){
					ctx.moveTo(topRPosX, - hei+squSiz * i);
					ctx.lineTo(topRPosX + (squSiz * i)*Math.tan((90-triRAngle) * Math.PI/180), -hei+squSiz * i);
				}		
							
			}	
		
			if(_vertexLoc1<0 && _vertexLoc2==0){
				triLBase = Math.abs(_vertexLoc1*squSiz);
				triLHei = _height*squSiz;
				triLAngle = Math.atan(triLHei/triLBase)*180/Math.PI;
				triLNumLines = Math.abs(_vertexLoc1);	
													
			  	for(var i = 0; i < triLNumLines; i++) {
					ctx.moveTo(topLPosX + squSiz * i, -hei);
					ctx.lineTo(topLPosX + squSiz * i, -hei+Math.tan(triLAngle*Math.PI/180)*squSiz*i);	
			  	}
				for(var i = 1; i < _height; i++){
					ctx.moveTo(baseLPosX, -hei+squSiz * i);
					ctx.lineTo(baseLPosX-Math.tan((90-triLAngle)*Math.PI/180)*(_height*squSiz-squSiz*i), -hei+squSiz * i);
				}	
				
				recNumLines=_base;
				
			  	for(var i = 0; i < recNumLines; i++) {
					
					ctx.moveTo(baseLPosX+ squSiz * i, 0);
					ctx.lineTo(baseLPosX+ squSiz * i, -hei);	
			  	}
				for(var i = 1; i < _height; i++){
					ctx.moveTo(baseLPosX, -1*squSiz * i);
					ctx.lineTo(baseRPosX, -1*squSiz * i);
				}	

				
										
			}	
		    
			if(_vertexLoc1>0 && _vertexLoc2==0){
				triLBase = Math.abs(_vertexLoc1*squSiz);
				triLHei = _height*squSiz;
				triLAngle = Math.atan(triLHei/triLBase)*180/Math.PI;
				triLNumLines = Math.abs(_vertexLoc1);	
													
			 	for(var i = 0; i < triLNumLines; i++) {
					ctx.moveTo(baseLPosX + squSiz * i, 0);
					ctx.lineTo(baseLPosX + squSiz * i, -1*Math.tan(triLAngle*Math.PI/180)*squSiz*i);	
			  	}
				for(var i = 1; i < _height; i++){
					ctx.moveTo(baseLPosX + squSiz * i/Math.tan(triLAngle * Math.PI/180), -1*squSiz * i);
					ctx.lineTo(baseLPosX + topLPosX, -1*squSiz * i);
				}	
				
				
				recNumLines=_base-Math.abs(_vertexLoc1)-Math.abs(_vertexLoc2);
				
			  	for(var i = 0; i < recNumLines; i++) {
					ctx.moveTo(topLPosX + squSiz * i, 0);
					ctx.lineTo(topLPosX+ squSiz * i, -hei);	
			  	}
				for(var i = 1; i < _height; i++){
					ctx.moveTo(topLPosX, -1*squSiz * i);
					ctx.lineTo(topRPosX, -1*squSiz * i);
				}	
				
						
			}	
			
			
			if(_vertexLoc1==0 && _vertexLoc2==0){
				triLBase = Math.abs(_vertexLoc1*squSiz);
				triLHei = _height*squSiz;
				triLAngle = Math.atan(triLHei/triLBase)*180/Math.PI;
				triLNumLines = Math.abs(_vertexLoc1);	
													
				
				recNumLines=_base-Math.abs(_vertexLoc2);
				
			  	for(var i = 0; i < recNumLines; i++) {
					ctx.moveTo(baseLPosX + squSiz * i, 0);
					ctx.lineTo(baseLPosX+ squSiz * i, -hei);	
			  	}
				for(var i = 1; i < _height; i++){
					ctx.moveTo(baseLPosX, -1*squSiz * i);
					ctx.lineTo(baseRPosX, -1*squSiz * i);
				}	
				
						
			}	
			    		
			
			ctx.fill();
			
			ctx.stroke();
			ctx.closePath();			
		}		
	}
}
	
	

