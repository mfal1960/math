//**********CHANGE NAME OF FUNCTION TO THIS FILE NAME - 1 OF 7 ********** 
function wpNewspaper2(){   
//size 150
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
for(let i=0;i<3;i++){
   let space = document.createElement("p");
space.setAttribute("id", "class", "style");
space.innerHTML="`";
space.style.margin="5px";
document.body.appendChild(space); 

}

//**********CHANGE CANVAS WIDTH AND HEIGHT - 2 OF 7 **********

draw();
function draw(){
        //**********WRITE VARIABLES - 3 OF 7 **********
        let pricePerColumnInch=Math.floor(Math.random()*10+10); 
        let randomizeAds=Math.ceil(Math.random()*4+1);
        
        let adCI1; 
        let adCI2;
        let adCI3;
        let adCI4;
        let adCI5; 
        let ad1;
        let ad2;
        let ad3;
        let ad4;
        let ad5;
        let sumAds; 
        let sumAdsLength;
        if(randomizeAds==2){
            adCI1=createMixNumbers(); 
            adCI2=createMixNumbers();
           
            ad1=mixFracToDec(adCI1)
            ad2=mixFracToDec(adCI2)
           
            sumAds=ad1+ad2; 
            sumAdsLength=2;
            let ques = "A newspaper charges $"+pricePerColumnInch+" per column inch.  If you place "+sumAdsLength+" ads of "+adCI1+" c.i., "+adCI2+", what is the total number of column inches you are purchasing as a mixed number, and how much will you be charged?";
         }
        if(randomizeAds==3){
            adCI1=createMixNumbers(); 
            adCI2=createMixNumbers();
            adCI3=createMixNumbers();
           
            ad1=mixFracToDec(adCI1)
            ad2=mixFracToDec(adCI2)
            ad3=mixFracToDec(adCI3);
           
           
            sumAds=ad1+ad2+ad3; 
            sumAdsLength=3;
            let ques = "A newspaper charges $"+pricePerColumnInch+" per column inch.  If you place "+sumAdsLength+" ads of "+adCI1+" c.i., "+adCI2+" c.i., "+adCI3+", what is the total number of column inches you are purchasing as a mixed number, and how much will you be charged?";
         }
        if(randomizeAds==4){
            adCI1=createMixNumbers(); 
            adCI2=createMixNumbers();
            adCI3=createMixNumbers();
            adCI4=createMixNumbers();
           
            ad1=mixFracToDec(adCI1)
            ad2=mixFracToDec(adCI2)
            ad3=mixFracToDec(adCI3);
            ad4=mixFracToDec(adCI4);
           
            sumAds=ad1+ad2+ad3+ad4; 
            sumAdsLength=4;
            let ques = "A newspaper charges $"+pricePerColumnInch+" per column inch.  If you place "+sumAdsLength+" ads of "+adCI1+" c.i., "+adCI2+" c.i., "+adCI3+" c.i. , "+adCI4+" c.i., what is the total number of column inches you are purchasing as a mixed number, and how much will you be charged?";
         }
        
        if(randomizeAds==5){
           adCI1=createMixNumbers(); 
           adCI2=createMixNumbers();
           adCI3=createMixNumbers();
           adCI4=createMixNumbers();
           adCI5=createMixNumbers(); 
           ad1=mixFracToDec(adCI1)
           ad2=mixFracToDec(adCI2)
           ad3=mixFracToDec(adCI3);
           ad4=mixFracToDec(adCI4);
           ad5=mixFracToDec(adCI5);
           sumAds=ad1+ad2+ad3+ad4+ad5; 
           sumAdsLength=5;
           let ques = "A newspaper charges $"+pricePerColumnInch+" per column inch.  If you place "+sumAdsLength+" ads of "+adCI1+" c.i., "+adCI2+" c.i., "+adCI3+" c.i. , "+adCI4+" c.i. ,and "+adCI5+" c.i., what is the total number of column inches you are purchasing as a mixed number, and how much will you be charged?";
        }
        






        let wholeInch=Math.floor(sumAds); 
        let fractionOfInch=sumAds-wholeInch;
        let fraction;
        if(fractionOfInch!=0){
            fraction=decimalToFraction(fractionOfInch);
        }else{fraction="";}
        let sumDecToFrac=wholeInch+" "+fraction;     
        let cost=sumAds*pricePerColumnInch;
              
        //**********WRITE QUESTION - 4 OF 7**********
        let ques = "A newspaper charges $"+pricePerColumnInch+" per column inch.  If you place "+sumAdsLength+" ads of "+adCI1+" c.i., "+adCI2+" c.i., "+adCI3+" c.i. , "+adCI4+" c.i. ,and "+adCI5+" c.i., what is the total number of column inches you are purchasing as a mixed number, and how much will you be charged?"; 
        //**********WRITE ANSWER********** - 5 OF 7 
        let ans = "You are purchasing "+sumDecToFrac+" column inches.  The cost will be $"+cost+"."
        quesTxt.innerHTML = ques;       
        ansTxt.innerHTML = ans;
        ansTxt.style.display="none";
    
        //*********MODIFY IMPORT FUNCTIONS - 6 OF 7 **********

//ADD NAMES - SHUFFLE INFO - GET RANDOM INT FUNCTIONS
        // ten thousands, thousands, hundreds, tens, ones, tenth, hundredth, thousandth, ten thousandth
        //rounding(num,place)
        //rounding(num,place);

        //decimalToFraction(num) num can not have a whole number;
        //decimalToFraction(num);

        //mixFracToDec(n)
        //mixFracToDec("4 1/2");

        //createMixNumbers() 1/2 1/4 3/4
        //createMixNumbers();

        //names()
        //names();

        //shuffle(array)
        //shuffle(array);

        //getRandomInt(min, max)
        //getRandomInt(min, max);

 //*********END MODIFY IMPORT FUNCTIONS - 6 OF 7 **********

//ADD NAMES - SHUFFLE INFO - GET RANDOM INT FUNCTIONS
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
        function mixFracToDec(n){
        let a=n;
        let ar=a.split(" ");       
        let whole=ar[0];
        let part1=ar[1].split('/');
        let result=parseInt(whole)+parseInt(part1[0])/parseInt(part1[1]);
        return result
        }
        function decimalToFraction(num){
            var test=(String(num).split('.')[1] || []).length;
            var num=(num*(10**Number(test)))
            var den=(10**Number(test))
            function reduce(numerator,denominator){
                var gcd = function gcd(a,b) {
                    return b ? gcd(b, a%b) : a;
                };
                gcd = gcd(numerator,denominator);
                return [numerator/gcd, denominator/gcd];
            }
            return (reduce(num,den)[0]+"/"+reduce(num,den)[1])
        }
        function createMixNumbers(){        
         let calculate=Math.ceil(Math.random()*3);
         let whole;
         let numerator;
         let denominator;
         let mixNums;
         if(calculate==1){
             whole=Math.ceil(Math.random()*9);
             numerator=1;
             denominator=4;
         }
         if(calculate==2){
             whole=Math.ceil(Math.random()*9);
             numerator=1;
             denominator=2;
         }
         if(calculate==3){
             whole=Math.ceil(Math.random()*9);
             numerator=3;
             denominator=4;
         }
         mixNums=whole+" "+numerator+"/"+denominator;
         return mixNums
        }
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
       
      
        }
        resetBtn.addEventListener("click",resetProb);
        function resetProb(event){   
            resetBtn.removeEventListener("click",resetProb);
            resetImports();   
            draw();            
        }
    }
}


