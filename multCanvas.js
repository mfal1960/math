import {drawArrowVertRight} from  "./geometry/arrowVertRight.js";
import {drawArrowDiag} from  "./geometry/arrowDiag.js";
import {drawArrowHoriTop} from  "./geometry/arrowHoriTop.js";
import{drawArrowHoriBottom} from "./geometry/arrowHoriBottom.js";
import{drawArrowVertLeft} from "./geometry/arrowVertLeft.js";
import{drawCircle} from "./geometry/circle.js";
import{drawRect} from "./geometry/rectangle.js";
import{drawEquTri} from "./geometry/equTri.js";
import{drawIrregularTri} from "./geometry/irregularTri.js";
import{drawIsoTri} from "./geometry/isoTri.js";
import{drawRigTri} from "./geometry/rigTri.js";

export function createProblem(){    



let showBtn = document.createElement("button");
showBtn.innerHTML = "Show Answer";
document.body.appendChild(showBtn);
let hideBtn = document.createElement("button");
hideBtn.innerHTML = "Hide Answer";       
document.body.appendChild(hideBtn); 
let resetBtn = document.createElement("button");
resetBtn.innerHTML = "Reset Problem";
document.body.appendChild(resetBtn);
let quesTxt = document.createElement("p");
document.body.appendChild(quesTxt);
let ansTxt = document.createElement("p");
document.body.appendChild(ansTxt);

let canvas = document.createElement('canvas');
canvas.id = "canvas2";
canvas.width = 900;
canvas.height = 500;
canvas.style.display="flex";
canvas.style.flexDirection="column";
canvas.style.position = "relative";
canvas.style.margin = "20px";
let ctx = canvas.getContext("2d");
let body = document.getElementsByTagName("body")[0];
body.appendChild(canvas); 

draw();

function draw(){
    

    //WRITE VARIABLES
    let wid=Math.round(Math.random()*80+150);
    let widTxt=wid
    let hei=Math.round(Math.random()*80+100);
    let heiTxt=hei;
    let dia=Math.sqrt(Math.pow(wid,2)+Math.pow(hei,2)).toFixed(3);
    let diaTxt = dia;
   
    let figX=100;
    let figY=50;
    let measurement="ft."
 
    let perimeter = wid*2+hei*2;
    let area = wid*hei; 
    //WRITE ANSWER
    let ques = "What is the perimeter and area of the figure?";
    let ans = "The perimeter is "+perimeter+" feet.  The area is "+area+" square feet."

    
  

    
   
    //WRITE QUESTION
    quesTxt.innerHTML = ques;

   
    ansTxt.innerHTML = ans;

    ansTxt.style.display="none";
           
  
    //WRITE IMPORT FUNCTIONS
    //drawRect(ctx,x,y,w,h,clr)
    drawRect(ctx,figX,figY,wid,hei,"white");

    //drawCircle(ctx,x,y,rad,s,f,clr)
     drawCircle(ctx,450,100,25,0,2*Math.PI,"white"); 

     //drawEquTri(ctx,x,y,wid,clr,type)
     //type = up,down,left,or right"
     drawEquTri(ctx,450,200,70,"white","up");

     //drawIrregularTri(ctx,x,y,wid,hei,m,clr,type)
     //type is vert "top/bottom" or hori "left/right"
     drawIrregularTri(ctx,500,100,120,200,.8,"white","vert");

     //drawIsoTri(ctx,x,y,wid,hei,clr,type)
     //type is vert "top/bottom" or hori "left/right"
     drawIsoTri(ctx,500,200,100,300,"white","vert")

     //drawRigTri(ctx,x,y,wid,hei,clr)
     drawRigTri(ctx,600,200,80,90,"white");

    // drawArrowVertRight(ctx,x,y,l,text,meas,offSet)
    drawArrowVertRight(ctx,figX+wid,figY,hei,hei,measurement,20);

    // drawArrowDiag(ctx,x,y,x2,y2,text,meas,offSet)
    drawArrowDiag(ctx,figX,figY,figX+wid,figY+hei,diaTxt,measurement,5);

    //drawArrowHoriTop(x,y,l,text,meas,offSet)
    drawArrowHoriTop(ctx,figX,figY,wid,widTxt,measurement,-20);

    //drawArrowHoriBottom(ctx,x,y,l,text,meas,offSet)
    drawArrowHoriBottom(ctx,figX,figY+hei,wid,widTxt,measurement,20);

    //drawArrowVertLeft(ctx,x,y,l,text,meas,offSet)
    drawArrowVertLeft(ctx,figX,figY,hei,heiTxt,measurement,-30);
       
     



    showBtn.addEventListener("click", showAns);
    function showAns(event){   
        ansTxt.style.display="block";  
        showBtn.removeEventListener("click", showAns);
        hideBtn.addEventListener("click", hideAns);   
    }

    function hideAns(event){  
        ansTxt.style.display="none"; 
        hideBtn.removeEventListener("click",hideAns);
        showBtn.addEventListener("click",showAns);  
    }

    resetBtn.addEventListener("click",resetProb);
    function resetProb(event){   
        resetBtn.removeEventListener("click",resetProb);
        ctx.clearRect(0,0,canvas.width,canvas.height); 
        draw(); 
    }
}

}



