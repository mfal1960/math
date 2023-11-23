//**********CHANGE NAME OF FUNCTION TO THIS FILE NAME - 1 OF 7 ********** 
function rec(){   

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
//**********CHANGE CANVAS WIDTH AND HEIGHT - 2 OF 7 **********
let canvas1 = document.createElement('canvas');
canvas1.id = "canvas1";
canvas1.width = 900;
canvas1.height = 300;
canvas1.style.display="flex";
canvas1.style.flexDirection="column";
canvas1.style.position = "relative";
canvas1.style.margin = "20px";

let ctx = canvas1.getContext("2d");
let body = document.getElementsByTagName("body")[0];
body.appendChild(canvas1); 

draw();
function draw(){
        //**********WRITE VARIABLES - 3 OF 7 **********
        let scale = .1;
        let rectWid=Math.round(Math.random()*80+150);
        let rectWidDim=Math.round(rectWid*scale);
        let rectHei=Math.round(Math.random()*80+100);
        let rectHeiDim=Math.round(rectHei*scale);
        let rectDiag=Math.sqrt(Math.pow(rectWid,2)+Math.pow(rectHei,2)).toFixed(3);
        let rectDiagDim = (rectDiag*scale).toFixed(3); 
        let figX=100;
        let figY=50;
        let measur="ft."
        let perimeter = rectWidDim*2+rectHeiDim*2;
        let area = rectWidDim*rectHeiDim; 
        
        //**********WRITE QUESTION - 4 OF 7**********
        let ques = "What is the perimeter and area of the figure? Round you answers to the tenth place."; 
        //**********WRITE ANSWER********** - 5 OF 7 
        let ans = "The circumference is "+perimeter+" "+measur+".  The area is "+area+" square "+measur+"."
        quesTxt.innerHTML = ques;       
        ansTxt.innerHTML = ans;
        ansTxt.style.display="none";
    
        //*********MODIFY IMPORT FUNCTIONS - 6 OF 7 **********

//GEOMETRIC FIGURES
        //drawRect(ctx,x,y,w,h,clr)
        drawRect(ctx,figX,figY,rectWid,rectHei,"white");

        //type is vert "top/bottom" or hori "left/right"
        //drawCircle(ctx,x,y,rad,s,f,clr)
        //drawCircle(ctx,figX,figY,radius1,0,2*Math.PI,"white");
        
        //type = up,down,left,or right"
        //drawEquTri(ctx,x,y,wid,clr,type)
        //drawEquTri(ctx,figX,figY,width1,"white","up");
        
        //type is vert "top/bottom" or hori "left/right" m = move the vertex
        //drawIrregularTri(ctx,x,y,wid,hei,m,clr,type);
        //drawIrregularTri(ctx,x,y,wid,hei,m,clr,type);
        
        //type is vert "top/bottom" or hori "left/right"
        //drawIsoTri(ctx,x,y,wid,hei,clr,type);
        //drawIsoTri(ctx,x,y,wid,hei,clr,type);
        
        //drawRigTri(ctx,x,y,wid,hei,clr)
        //drawRigTri(ctx,x,y,wid,hei,clr);

//DIMENSIONAL LINES
        //drawArrowVertRight(ctx,x,y,l,text,meas,offSet)
        drawArrowVertRight(ctx,figX+rectWid,figY,rectHei,rectHeiDim,measur,20);

        //drawArrowDiag(ctx,x,y,x2,y2,text,meas,offSet)
        drawArrowDiag(ctx,figX,figY,figX+rectWid,figY+rectHei,rectDiagDim,measur,5);

        //drawArrowHoriTop(x,y,l,text,meas,offSet)
        drawArrowHoriTop(ctx,figX,figY,rectWid,rectWidDim,measur,-20);

        //drawArrowHoriBottom(ctx,x,y,l,text,meas,offSet)
        drawArrowHoriBottom(ctx,figX,figY+rectHei,rectWid,rectWidDim,measur,20);

        //drawArrowVertLeft(ctx,x,y,l,text,meas,offSet)
        drawArrowVertLeft(ctx,figX,figY,rectHei,rectHeiDim,measur,-30);

//ADD NAMES - SHUFFLE INFO - GET RANDOM INT FUNCTIONS
        // ten thousands, thousands, hundreds, tens, ones, tenth, hundredth, thousandth, ten thousandth
        //rounding(num,place)
        //rounding(num,place);
        
        //names()
        //names();

        //shuffle(array)
        //shuffle(array);

        //getRandomInt(min, max)
        //getRandomInt(min, max);

 //*********END MODIFY IMPORT FUNCTIONS - 6 OF 7 **********

//GEOMETRIC FIGURES FUNCTIONS
        function rounding(num,place){
            if(place=="ten thousands"){
                num=Math.round((num)*.0001)/.0001;
                return num
                }
            if(place=="thousands"){
                num=Math.round((num)*.001)/.0001;
                return num
                }         
            if(place=="hundreds"){
                num=Math.round((num)*.01)/.01;
                return num
                }
            if(place=="tens"){
                num=Math.round((num)*.1)/.1;
                return num
                }
            if(place=="ones"){
                num=Math.round((num*1))/1;
                return num
                }
            if(place=="tenth"){
                num=Math.round((num*10))/10;
                return num
            }
            if(place=="hundredth"){
                num=Math.round((num*100))/100;
                return num
            }
            if(place=="thousandth"){
                num=Math.round((num*1000))/1000;
                return num
            }
            if(place=="ten thousandth"){
                num=Math.round((num*10000))/10000;
                return num
            }
        }        
       function drawRect(ctx,x,y,w,h,clr){   
            ctx.lineWidth = 1;
            ctx.fillStyle=clr;
            ctx.fillRect(x,y,w,h);
            ctx.strokeStyle = "black";
            ctx.strokeRect(x,y,w,h);  
            ctx.stroke();   
        }       
        function drawCircle(ctx,x,y,rad,s,f,clr){
            ctx.beginPath();
            ctx.fillStyle=clr;
            ctx.arc(x, y, rad, s, f);
            ctx.stroke();
            ctx.fill();
        }      
        function drawEquTri(ctx,x,y,wid,clr,type){
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
        function drawIrregularTri(ctx,x,y,wid,hei,m,clr,type){
        //var m = .5;
        //if(m>=.9){m=m-.2};
        //if(m<=.1){m=m+.2};
            if(type=="vert"){isoTriTopBottom();}
            if(type=="hori"){isoTriLeftRight();}
            function isoTriTopBottom(){     
            ctx.lineWidth=2;
            ctx.fillStyle=clr;
            ctx.strokeStyle="black";
            ctx.beginPath();
            ctx.moveTo(x,y);
            ctx.lineTo(x+wid*m,y+hei);
            ctx.lineTo(x+wid,y);
            ctx.lineTo(x,y);
            ctx.lineTo(x,y);
            ctx.stroke();
            ctx.fill();
            ctx.closePath();  } 
            function isoTriLeftRight(){     
            ctx.lineWidth=2;
            ctx.fillStyle=clr;
            ctx.strokeStyle="black";
            ctx.beginPath();
            ctx.moveTo(x,y);
            ctx.lineTo(x+hei,y+wid*m);
            ctx.lineTo(x,y+wid);
            ctx.lineTo(x,y);     
            ctx.stroke();
            ctx.fill();
            ctx.closePath();  } 
        }        
        function drawIsoTri(ctx,x,y,wid,hei,clr,type){
            if(type=="vert"){isoTriTopBottom();}
            if(type=="hori"){isoTriLeftRight();}     
            function isoTriTopBottom(){     
            //ctx.lineWidth=2;
            ctx.fillStyle=clr;
            ctx.strokeStyle="black";
            ctx.beginPath();
            ctx.moveTo(x,y);
            ctx.lineTo(x+wid*.5,y+hei);
            ctx.lineTo(x+wid,y);
            ctx.lineTo(x,y);
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
            ctx.lineTo(x+wid*.5,y+hei);
            ctx.stroke();  
            ctx.closePath();
            ctx.setLineDash([0]);
            } 
            function isoTriLeftRight(){        
            ctx.lineWidth=2;
            ctx.fillStyle=clr;
            ctx.strokeStyle="black";
            ctx.beginPath();
            ctx.moveTo(x,y);
            ctx.lineTo(x+hei,y+wid*.5);
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
            ctx.lineTo(x+hei,y+wid*.5);
            ctx.stroke();
            ctx.fill();
            ctx.closePath();
            ctx.setLineDash([0]);   
            } 
        }        
        function drawRigTri(ctx,x,y,wid,hei,clr){
            ctx.lineWidth=2;
            ctx.fillStyle=clr;
            ctx.strokeStyle="black";
            ctx.beginPath();
            ctx.moveTo(x,y);
            ctx.lineTo(x,y+hei);
            ctx.lineTo(x+wid,y+hei);
            ctx.lineTo(x,y);
            ctx.stroke();
            ctx.fill();
            ctx.closePath();   
        }
//DIMENSIONAL LINES FUNCTIONS      
        function drawArrowVertRight(ctx,x,y,l,text,meas,offSet){
            ctx.lineWidth=1;
            ctx.strokeStyle="black";
            ctx.beginPath();
            ctx.moveTo(x+offSet,y);
            ctx.lineTo(x+offSet-5,y);
            ctx.lineTo(x+offSet+5,y);
            ctx.lineTo(x+offSet,y);
            ctx.lineTo(x+offSet-5,y+10);
            ctx.lineTo(x+offSet,y);
            ctx.lineTo(x+offSet+5,y+10);
            ctx.lineTo(x+offSet,y);
            ctx.lineTo(x+offSet,y+l);
            ctx.lineTo(x+offSet-5,y+l);
            ctx.lineTo(x+offSet+5,y+l);
            ctx.lineTo(x+offSet,y+l);
            ctx.lineTo(x+offSet-5,y+l-10);
            ctx.lineTo(x+offSet,y+l);
            ctx.lineTo(x+offSet+5,y+l-10);
            ctx.lineTo(x+offSet,y+l);
            ctx.stroke();
            ctx.closePath();
            ctx.font = "10pt Arial";
            ctx.lineWidth=1;
            ctx.fillStyle="black";
            ctx.fillText(text+" "+meas,x+offSet+10,y+l*.5);
        }       
        function drawArrowDiag(ctx,x,y,x2,y2,text,meas,offSet){
            ctx.lineWidth=1;
            ctx.strokeStyle="black";
            ctx.beginPath();
            ctx.moveTo(x,y);
            ctx.lineTo(x-5,y);
            ctx.lineTo(x+5,y);
            ctx.lineTo(x,y);
            ctx.lineTo(x2,y2);
            ctx.lineTo(x2-5,y2);
            ctx.lineTo(x2+5,y2);
            ctx.lineTo(x2,y2);
            ctx.stroke();
            ctx.closePath();
            ctx.font = "10pt Arial";
            ctx.lineWidth=1;
            ctx.fillStyle="black";  
            ctx.fillText(text+" "+meas,x+x2*.4+offSet,y+y2*.35);   
        }       
        function drawArrowHoriTop(ctx,x,y,l,text,meas,offSet){ 
            ctx.beginPath();  
            ctx.moveTo(x,y+offSet);
            ctx.lineTo(x,y+offSet-5);
            ctx.lineTo(x,y+offSet+5);
            ctx.lineTo(x,y+offSet);
            ctx.lineTo(x+10,y+offSet-5);
            ctx.lineTo(x,y+offSet);
            ctx.lineTo(x+10,y+offSet+5);
            ctx.lineTo(x,y+offSet);
            ctx.lineTo(x+l,y+offSet);
            ctx.lineTo(x+l,y+offSet-5);
            ctx.lineTo(x+l,y+offSet+5);
            ctx.lineTo(x+l,y+offSet);
            ctx.lineTo(x+l-10,y+offSet-5);
            ctx.lineTo(x+l,y+offSet);
            ctx.lineTo(x+l-10,y+offSet+5);
            ctx.lineTo(x+l,y+offSet);
            ctx.stroke();
            ctx.closePath();
            ctx.font = "10pt Arial";
            ctx.lineWidth=1;
            ctx.fillStyle="black";
            ctx.fillText(text+" "+meas,x+l*.5-10,y+offSet-10);
        }
        function drawArrowHoriBottom(ctx,x,y,l,text,meas,offSet){
            ctx.beginPath();    
            ctx.moveTo(x,y+offSet);
            ctx.lineTo(x,y+offSet-5);
            ctx.lineTo(x,y+offSet+5);
            ctx.lineTo(x,y+offSet);
            ctx.lineTo(x+10,y+offSet-5);
            ctx.lineTo(x,y+offSet);
            ctx.lineTo(x+10,y+offSet+5);
            ctx.lineTo(x,y+offSet);
            ctx.lineTo(x+l,y+offSet);
            ctx.lineTo(x+l,y+offSet-5);
            ctx.lineTo(x+l,y+offSet+5);
            ctx.lineTo(x+l,y+offSet);
            ctx.lineTo(x+l-10,y+offSet-5);
            ctx.lineTo(x+l,y+offSet);
            ctx.lineTo(x+l-10,y+offSet+5);
            ctx.lineTo(x+l,y+offSet);
            ctx.stroke();
            ctx.closePath();
            ctx.font = "10pt Arial";
            ctx.lineWidth=1;
            ctx.fillStyle="black";
            ctx.fillText(text+" "+meas,x+l*.5-10,y+offSet+20);
        }
        function drawArrowVertLeft(ctx,x,y,l,text,meas,offSet){
            ctx.lineWidth=1;
            ctx.strokeStyle="black";
            ctx.beginPath();
            ctx.moveTo(x+offSet,y);
            ctx.lineTo(x+offSet-5,y);
            ctx.lineTo(x+offSet+5,y);
            ctx.lineTo(x+offSet,y);
            ctx.lineTo(x+offSet-5,y+10);
            ctx.lineTo(x+offSet,y);
            ctx.lineTo(x+offSet+5,y+10);
            ctx.lineTo(x+offSet,y);
            ctx.lineTo(x+offSet,y+l);
            ctx.lineTo(x+offSet-5,y+l);
            ctx.lineTo(x+offSet+5,y+l);
            ctx.lineTo(x+offSet,y+l);
            ctx.lineTo(x+offSet-5,y+l-10);
            ctx.lineTo(x+offSet,y+l);
            ctx.lineTo(x+offSet+5,y+l-10);
            ctx.lineTo(x+offSet,y+l);
            ctx.stroke();
            ctx.closePath();
            ctx.font = "10pt Arial";
            ctx.lineWidth=1;
            ctx.fillStyle="black";
            ctx.fillText(text+" "+meas,x+offSet-55,y+l*.5);
        }
//ADD NAMES - SHUFFLE INFO - GET RANDOM INT FUNCTIONS
        function names(){
            //Create array with names            
              var name = [];
               name.push("Bashir");
              name.push("Kaif");
              name.push("Katra");             
              name.push("Mohammad");
              name.push("Bushra");
              name.push("Sahaam");
              name.push("Suret");
              name.push("JanJay");
              name.push("Abdishakur");  
              name.push("Hamza");
              name.push("Ahmed");
              name.push("Kaylyn");
               name.push("Naomi");
              name.push("Hibak");
              name.push("Abdullahi");
              name.push("Hodhan");
              name.push("Lilly");
              name.push("Faizo");
              name.push("Salah");
              name.push("Titan");
              name.push("Mohamed");
              name.push("Kaden");
              var rand = Math.floor(Math.random()*name.length);
              return(name[rand]);    
          }
          function shuffle(array) {
            var currentIndex = array.length, temporaryValue, randomIndex;

            // While there remain elements to shuffle...
            while (0 !== currentIndex) {

            // Pick a remaining element...
            randomIndex = Math.floor(Math.random() * currentIndex);
            currentIndex -= 1;

            // And swap it with the current element.
            temporaryValue = array[currentIndex];
            array[currentIndex] = array[randomIndex];
            array[randomIndex] = temporaryValue;
            }
            return array;
        }
          function getRandomInt(min, max){
            min = Math.ceil(min);
            max = Math.floor(max);
            var num
            return num = Math.floor(Math.random() * (max - min + 1) + min); 
        }

        showBtn.addEventListener("click", showAns);
        function showAns(event){   
            ansTxt.style.display="inline";  
            showBtn.removeEventListener("click", showAns);
            hideBtn.addEventListener("click", hideAns);   
        }
        function hideAns(event){  
            ansTxt.style.display="none"; 
            hideBtn.removeEventListener("click",hideAns);
            showBtn.addEventListener("click",showAns);  
        }
        //**********ADD TO RESET IMPORTS TO MATCH DECLARED FUNCTIONS- 7 OF 7 **********
        function resetImports(){ 
        drawRect(ctx,-100,0,0,0,"")     
        //drawCircle(ctx,-100,0,0,0,0,"")      
        //drawEquTri(ctx,-100,0,0,"","")       
        //drawIrregularTri(ctx,-100,0,0,0,0,"","");      
        //drawIsoTri(ctx,-100,0,0,0,"","");        
        //drawRigTri(ctx,-100,0,0,0,"");
        drawArrowVertRight(ctx,-100,0,0,"","",0)
        drawArrowDiag(ctx,-100,0,0,0,"","",0)
        drawArrowHoriTop(ctx,-100,0,0,"","",0)
        drawArrowHoriBottom(ctx,-100,0,0,"","",0)
        drawArrowVertLeft(ctx,-100,0,0,"","",0)
      
        }
        resetBtn.addEventListener("click",resetProb);
        function resetProb(event){   
            resetBtn.removeEventListener("click",resetProb);
            resetImports();
            ctx.clearRect(0,0,canvas1.width,canvas1.height);       
            draw();            
        }
    }
}


