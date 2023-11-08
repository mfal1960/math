var canvas = document.getElementById("canvas");
var context = canvas.getContext("2d");

function questionText(context, text, x, y, maxWidth, lineHeight) {
    var words = text.split(' ');
    var line = '';

    for(var n = 0; n < words.length; n++) {
      var testLine = line + words[n] + ' ';
      var metrics = context.measureText(testLine);
      var testWidth = metrics.width;
      context.font = "12pt Arial";
      context.lineWidth=1;
      context.fillStyle="black";
      context.stroke();
      if (testWidth > maxWidth && n > 0) {
        
        context.fillText(line, x, y);
        line = words[n] + ' ';
        y += lineHeight;
      }
      else {
        line = testLine;
      }
    } 
    
    context.fillText(line, x, y);
  }

  