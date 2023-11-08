var canvas = document.getElementById("canvas");
var context = canvas.getContext("2d");

function answerText(context, text, x, y, maxWidth, lineHeight) {
    var words = text.split(' ');
    var line = '';
    context.font = "12pt Arial";
    context.lineWidth=1;
    context.fillStyle="red";
    context.stroke();

    for(var n = 0; n < words.length; n++) {
      var testLine = line + words[n] + ' ';
      var metrics = context.measureText(testLine);
      var testWidth = metrics.width;
     
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

  