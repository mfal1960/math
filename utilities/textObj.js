function txtInfo() {
	this.ques  = "ques", this.x = 10, this.y = 30, this.w = 300, this.fillSty = "black", this.fon = 'italic bold 15px Arial, sans-serif'; 
	this.render = function (ctx, ques, x, y, w, fillSty, fon) {
	
	  ctx.fillStyle = fillSty;
      ctx.font = fon;
      ctx.fillText(ques, x, y, w);	
	}
}

function wrapText() {
	this.text="question/answer", this.x=10, this.y=30, this.maxWidth=450, this.lineHeight=15, this.fillSty="black", this.fon= 'italic bold 15px Arial, sans-serif'; 
    this.render = function (ctx, text, x, y, maxWidth, lineHeight, fillSty, fon){
      var words = text.split(' ');
      var line = '';
      ctx.font = fon;
      ctx.fillStyle = fillSty;
	

      for(var n = 0; n < words.length; n++) {
        var testLine = line + words[n] + ' ';
        var metrics = ctx.measureText(testLine);
        var testWidth = metrics.width;
	
          if (testWidth > maxWidth && n > 0) {
          ctx.fillText(line, x, y);
          line = words[n] + ' ';
          y += lineHeight;
          }
          else {
          line = testLine;
          }
       }
     ctx.fillText(line, x, y);
     }
}