function rigTriRigGrid() {
	this.x = 0, this.y = 0, this._base = 8, this._height = 8, this.squSiz=20,this.fillSty = "white", this.alpha = 1, this.strokeSty="black", this.lineWid = 1, this.grid=true,this.degreeRot=0;
	this.render = function(ctx,x,y,_base,_height,squSiz,fillSty, alpha, strokeSty,lineWid,grid,degreeRot) {
	    //ctx.save(); 	
		var _base2 = _base*squSiz;
		var _height2= _height*squSiz;
	    var len = _base2/squSiz;
		var wid = _height2/squSiz;
		var convertDeg = degreeRot*Math.PI/180;
		
		ctx.rotate(convertDeg);	
		ctx.beginPath();
		ctx.globalAlpha = alpha;
		ctx.strokeStyle = strokeSty;
		ctx.fillStyle = fillSty;
		ctx.lineWidth = lineWid+1;
		ctx.lineCap = "round"; // butt, round, square
		ctx.lineJoin = "round"; // bevel, round, miter
		
		ctx.moveTo(x,y);
		ctx.lineTo(x,y+_height2);
		ctx.lineTo(x+_base2,y+_height2);
		ctx.lineTo(x,y);
        ctx.fill();	
		ctx.globalAlpha = 1;	 
 	    ctx.stroke();
	    ctx.closePath();
		
		ctx.beginPath();
		ctx.strokeStyle=strokeSty;
		ctx.lineCap = "round"; // butt, round, square
		ctx.lineJoin = "round"; // bevel, round, miter
		ctx.miterLimit = 0;
	     
		if(grid == true){
		var len = _base2/squSiz;
		var wid = _height2/squSiz;
		var tan=_base2/_height2;	 
		var deg=Math.atan(tan)*180/Math.PI;
		var rad= deg*Math.PI/180;
		var hei= Math.tan(rad);
		
		ctx.lineWidth=lineWid;
			for(var i =0; i<len+1; i++){
				ctx.moveTo(x+i*squSiz,y+squSiz*i/Math.tan(rad));
				ctx.lineTo(x+i*squSiz,y+_height2);
			}
			for(var i =0; i<wid+1; i++){
				ctx.moveTo(x,y+i*squSiz);
				ctx.lineTo(x+Math.tan(rad)*squSiz*i,y+i*squSiz);
			}
			ctx.moveTo(x,y);
			ctx.lineTo(x+_base2,y+_height2);
	   ctx.closePath();
       ctx.fill();		 
	   ctx.stroke();	
	   }	
		//ctx.restore();
	}
	
}


function rigTriLeftGrid() {
	this.x = 0, this.y = 0, this._base = 8, this._height = 8, this.squSiz=20, this.fillSty = "white", this.alpha, this.strokeSty="black", this.lineWid = 1, this.grid=true,this.degreeRot=0;
	this.render = function(ctx,x,y,_base,_height,squSiz,fillSty,alpha, strokeSty,lineWid,grid,degreeRot) {
    	//ctx.save();
	    var _base2 = _base*squSiz;
		var _height2= _height*squSiz;			
		var len = _base2/squSiz;
		var wid = _height2/squSiz;
		var convertDeg = degreeRot*Math.PI/180;
		ctx.rotate(convertDeg);
		ctx.beginPath();
		ctx.globalAlpha = alpha;
		ctx.strokeStyle = strokeSty;
		ctx.fillStyle = fillSty;	
		ctx.lineWidth = lineWid+1;
		ctx.lineCap = "round"; // butt, round, square
		ctx.lineJoin = "round"; // bevel, round, miter
		
		ctx.moveTo(x,y);
		ctx.lineTo(x+_base2,y);
		ctx.lineTo(x+_base2,y+_height2);
		ctx.lineTo(x,y);
        ctx.fill();	 
		ctx.globalAlpha = 1;
		ctx.stroke(); 
	   	 
 	    
	    ctx.closePath();
		
		ctx.beginPath();
		ctx.strokeStyle=strokeSty;
		ctx.lineCap = "round"; // butt, round, square
		ctx.lineJoin = "round"; // bevel, round, miter
		ctx.miterLimit = 0;
	
		if(grid == true){
		var len = _base2/squSiz;
		var wid = _height2/squSiz;
		var tan=_base2/_height2;	 
		var deg=Math.atan(tan)*180/Math.PI;
		var rad= deg*Math.PI/180;
		var hei= Math.tan(rad);
		ctx.lineWidth=lineWid;
			for(var i =0; i<len+1; i++){
				ctx.moveTo(x+i*squSiz,y);
				ctx.lineTo(x+i*squSiz,y+squSiz*i/Math.tan(rad));
			}
			for(var i =0; i<wid+1; i++){
				ctx.moveTo(x+squSiz*i*Math.tan(rad),y+i*squSiz);
				ctx.lineTo(x+_base2,y+i*squSiz);
			}
			
			ctx.moveTo(x,y);
			ctx.lineTo(x+_base2,y+_height2);			
		
		ctx.closePath();
       ctx.fill();		 
	   ctx.stroke();
	   }
	   //ctx.restore();			
	}
}

function triGrid(){
	this.x = 0, this.y = 0, this._base = 6, this._height = 6, this._vertexLoc=3, this.squSiz=20, this.fillSty = "white", this.alpha, this.strokeSty="black", this.lineWid = 1, this.grid=true, this.degreeRot=0;
	this.render = function(ctx,x,y,_base,_height,_vertexLoc,squSiz,fillSty,alpha,strokeSty,lineWid,grid,degreeRot) {
		//ctx.save();	
		var _base2= _base*squSiz;
		var _height2=_height*squSiz;
		var _vertexLoc2=_vertexLoc*squSiz;
		var leftBotAng = Math.atan(_height2/_vertexLoc2)*180/Math.PI;	
		var rigBotAng = Math.atan(_height2/(_base2-_vertexLoc2))*180/Math.PI;
		//var leftTopAng = 90-leftBotAng;
		var rigTopAng = 90-rigBotAng;
		var convertDeg = degreeRot*Math.PI/180;
		
		
		ctx.rotate(convertDeg);
		ctx.beginPath();
		ctx.globalAlpha = alpha;
		ctx.fillStyle=fillSty;
		ctx.strokeStyle=strokeSty;
		ctx.lineWidth=lineWid+1;
		ctx.moveTo(x,y);
		ctx.lineTo(x+_base2,y);
		ctx.lineTo(x+_vertexLoc2,y-_height2);
		ctx.lineTo(x,y);
		ctx.fill();
		ctx.globalAlpha = 1;
		ctx.stroke();
		ctx.closePath();
		 
		ctx.beginPath();
		ctx.fillStyle=fillSty;
		ctx.strokeStyle=strokeSty;
		ctx.lineWidth=lineWid;
		
		if(grid == true) {
		var leftNum=Math.ceil(_vertexLoc2/squSiz);
		var rigNum=Math.ceil((_base2-_vertexLoc2)/squSiz);
		var heiNum=Math.ceil(_height2/squSiz);
		
		for(var i = 0; i < leftNum; i++) {
			ctx.moveTo((x+_vertexLoc2)-i*squSiz,y);
			ctx.lineTo((x+_vertexLoc2)-i*squSiz,y-Math.tan(leftBotAng*Math.PI/180)*(_vertexLoc2-i*squSiz));				
		}
		for(var i = 0; i < rigNum; i++) {
			ctx.moveTo(x+_vertexLoc2+i*squSiz,y);
			ctx.lineTo(x+_vertexLoc2+i*squSiz,y-Math.tan(rigBotAng*Math.PI/180)*((_base2-_vertexLoc2)-i*squSiz));				
		}
		for(var i = 0; i < heiNum; i++){
			ctx.moveTo(x+(i*squSiz)/Math.tan(leftBotAng*Math.PI/180),y-squSiz*i);
			ctx.lineTo(x+_vertexLoc2,y-squSiz*i);
			
			
			ctx.moveTo(x+_vertexLoc2,y-squSiz*i);
			ctx.lineTo(x+_vertexLoc2+Math.tan(rigTopAng*Math.PI/180)*(_height2-squSiz*i),y-squSiz*i);
		}
	}
		ctx.fill();
		ctx.stroke();
		ctx.closePath();	
	}
	
	
}
	
	

