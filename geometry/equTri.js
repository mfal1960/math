//type = up,down,left,or right"
export function drawEquTri(ctx,x,y,wid,clr,type){
 if(type=="up"){equTriUp();}
 if(type=="down"){equTriDown();}
 if(type=="right"){equTriRight();}
 if(type=="left"){equTriLeft();}


 
    function equTriUp(){   
    //ctx.lineWidth=2;
    ctx.fillStyle=clr;
    ctx.strokeStyle="black";
    ctx.beginPath();
    ctx.moveTo(x,y);
    ctx.lineTo(x+wid*.5,y-Math.sqrt(wid*wid-(wid*.5)*(wid*.5))); 
   
   ctx.lineTo(x+wid,y);
    ctx.lineTo(x,y);
    ctx.stroke();
    ctx.fill();
    ctx.lineWidth=0;
    ctx.closePath();

    //ctx.lineWidth=2;
    ctx.strokeStyle="black";
    ctx.beginPath();
    ctx.setLineDash([5,5]);
    ctx.moveTo(x+wid*.5,y);
    ctx.lineTo(x+wid*.5,y-Math.sqrt(wid*wid-(wid*.5)*(wid*.5)));
    ctx.stroke();  
    ctx.closePath();
    ctx.setLineDash([0]); 
   } 

   function equTriDown(){   
    //ctx.lineWidth=2;
    ctx.fillStyle=clr;
    ctx.strokeStyle="black";
    ctx.beginPath();
    ctx.moveTo(x,y);
    ctx.lineTo(x+wid*.5,y+Math.sqrt(wid*wid-(wid*.5)*(wid*.5))); 
   
   ctx.lineTo(x+wid,y);
    ctx.lineTo(x,y);
    ctx.stroke();
    ctx.fill();
    ctx.lineWidth=0;
    ctx.closePath();

    //ctx.lineWidth=2;
    ctx.strokeStyle="black";
    ctx.beginPath();
    ctx.setLineDash([5,5]);
    ctx.moveTo(x+wid*.5,y);
    ctx.lineTo(x+wid*.5,y+Math.sqrt(wid*wid-(wid*.5)*(wid*.5)));
    ctx.stroke();  
    ctx.closePath();
    ctx.setLineDash([0]); 
   } 




    function equTriRight(){
        
        ctx.lineWidth=2;
        ctx.fillStyle=clr;
        ctx.strokeStyle="black";
        ctx.beginPath();
        ctx.moveTo(x,y);
        ctx.lineTo(x+Math.sqrt(wid*wid-(wid*.5)*(wid*.5)),y+wid*.5);
        ctx.lineTo(x,y+wid);
        ctx.lineTo(x,y); 
        ctx.stroke();
        ctx.fill();
        ctx.lineWidth=0;
        ctx.closePath(); 

        ctx.lineWidth=2;
        ctx.strokeStyle="black";
        ctx.beginPath();
        ctx.setLineDash([5,5]);
       
        ctx.moveTo(x,y+wid*.5);
        ctx.lineTo(x+Math.sqrt(wid*wid-(wid*.5)*(wid*.5)),y+wid*.5);
        ctx.stroke();
        ctx.fill();
        ctx.closePath();
        ctx.setLineDash([0]);
        
        } 
        function equTriLeft(){
        
            ctx.lineWidth=2;
            ctx.fillStyle=clr;
            ctx.strokeStyle="black";
            ctx.beginPath();
            ctx.moveTo(x,y);
            ctx.lineTo(x-Math.sqrt(wid*wid-(wid*.5)*(wid*.5)),y+wid*.5);
            ctx.lineTo(x,y+wid);
            ctx.lineTo(x,y); 
            ctx.stroke();
            ctx.fill();
            ctx.lineWidth=0;
            ctx.closePath(); 
    
            ctx.lineWidth=2;
            ctx.strokeStyle="black";
            ctx.beginPath();
            ctx.setLineDash([5,5]);
           
            ctx.moveTo(x,y+wid*.5);
            ctx.lineTo(x-Math.sqrt(wid*wid-(wid*.5)*(wid*.5)),y+wid*.5);
            ctx.stroke();
            ctx.fill();
            ctx.closePath();
            ctx.setLineDash([0]);
            
            } 

}
