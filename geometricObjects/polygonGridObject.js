function polygonGrid() {
	this.x=0, this.y=0, this.radius=50, this.sides=8, this.squSiz=20,this.fillSty="white", this.alpha=1, this.strokeSty="black", this.lineWid=1, this.grid=true, this.consCircle=true,this.consInnerLines=true,this.degreeRot=0;
	this.render = function(ctx,x,y,radius,sides,squSiz,fillSty,alpha, strokeSty,lineWid,grid,consCircle,consInnerLines,degreeRot) {
		//radius = hyp
		//s = o/h; sin*h = 0
		//c = a/h;
		
		//sin(degPerSide*Math.PI/180)*radius=0;  yValue
		//cos(degPerSid*Math.PI/180)*radius=A. xValue
		
		var degPerSide = 360/sides;
		
	    var convertDeg = degreeRot*Math.PI/180;
		ctx.rotate(convertDeg);	
		ctx.beginPath();		
		ctx.fillStyle=fillSty;
		ctx.strokeStyle=strokeSty;
		ctx.linewidth=lineWid;
		ctx.globalAlpha = alpha;
		
				
		if(consCircle==true) {
		consCir();
	    }
		if(consInnerLines==true){
			consInLines();
		}
		
		function consCir(){	
					
		ctx.arc(x, y,radius,0,6.28,false); 
			
		}
		
	
		
		function consInLines() {
			
			
			
		
		for(var i = 0; i < sides; i++) {
		ctx.moveTo(0,0);
		ctx.lineTo(Math.cos(degPerSide*i*Math.PI/180)*radius,Math.sin(degPerSide*i*Math.PI/180)*radius);	
		}
	    }
		
		var pts = [];
		for(var i = 0; i < sides+1; i++) {
		//ctx.moveTo(0,0);
		//ctx.lineTo(Math.cos(degPerSide*i*Math.PI/180)*radius,Math.sin(degPerSide*i*Math.PI/180)*radius);
		pts.push(new Point(Math.cos(degPerSide*i*Math.PI/180)*radius, Math.sin(degPerSide*i*Math.PI/180)*radius));		
		}
		
		for(var i = 0; i<sides; i++){
			ctx.moveTo(pts[i].x, pts[i].y);
			ctx.lineTo(pts[i+1].x, pts[i+1].y);
		}		//alert("js Working");
		
		ctx.fill();
		ctx.globalAlpha = 1;
		ctx.stroke();
		ctx.closePath();
		
		function Point(x,y) {
			this.x = x;
			this.y = y;
		}
		
	}	
}