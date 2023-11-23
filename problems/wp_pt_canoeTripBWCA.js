//**********CHANGE NAME OF FUNCTION TO THIS FILE NAME - 1 OF 4 ********** 
function wp_pt_canoeTripBWCA(){   
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



draw();
function draw(){
        //**********WRITE VARIABLES - 2 OF 4 **********
        let canoeAr=[];
        canoeAr.push({item:"kevlar canoe",cost:rounding(Math.random()*300+2137,"hundredth"),type:"canoe"});
        canoeAr.push({item:"canoe seat",cost:rounding(Math.random()*10+39.05,"hundredth"),type:"canoe"});       
        canoeAr.push({item:"life jacket",cost:rounding(Math.random()*10+36.96,"hundredth"),type:"canoe"});
        canoeAr.push({item:"paddles",cost:rounding(Math.random()*10+22.90,"hundredth"),type:"canoe"});
        let randomFriend=rounding(Math.ceil(Math.random()*2),"hundredth");
        var friends;
        
        if(randomFriend==1){
            friends=1;
            group="a friend";
           
        }
        if(randomFriend==2){
            friends=2;
            group="two friends"
        }
        

            var canoeC=canoeAr[0].cost;
            var canoeSeatsC=canoeAr[1].cost;
            var lifeJacketsC=canoeAr[2].cost;
            var paddlesC=canoeAr[3].cost;
            var canoeCT=rounding(Number(canoeAr[0].cost*1),"hundredth");
            var canoeSeatsCT=rounding(Number(canoeAr[1].cost*(friends+1)),"hundredth");
            var lifeJacketsCT=rounding(Number(canoeAr[2].cost*(friends+1)),"hundredth");
            var paddlesCT=rounding(Number(canoeAr[3].cost*(friends+1)),"hundredth");
            var stateTax = 7.25;
            var totalCostWithoutTax=rounding((canoeCT+canoeSeatsCT+lifeJacketsCT+paddlesCT),"hundredth");
            var tax=rounding(totalCostWithoutTax*stateTax/100,"hundredth");
            var totalCostWithTax=rounding(totalCostWithoutTax+tax,"hundredth");
            

            var splitCost=rounding(totalCostWithTax/(friends+1),"hundredth");

            var remainder=Math.abs(rounding(totalCostWithTax-splitCost*(friends+1),"hundredth"));
            console.log(remainder)

            let question = "You and "+group+" are going on a canoe trip to the Boundary Waters Canoe Area (BWCA). You purchase a canoe for $"+canoeC+", "+(friends+1)+" canoe seats for $"+canoeSeatsC+", "+(friends+1)+" life jackets for $"+lifeJacketsC+", "+(friends+1)+" paddles for $"+paddlesC+", and split the cost.  If state the sales tax is "+stateTax+"%, how much will each of you pay?";
            var answer;
            if(remainder==0){
                answer = "The cost without tax will be $"+totalCostWithoutTax+". The tax will be $"+tax+".  The total cost will be $"+totalCostWithTax+". Each person will owe $"+splitCost+".";
            }else{
                answer = "The cost without tax will be $"+totalCostWithoutTax+". The tax will be $"+tax+".  The total cost will be $"+totalCostWithTax+". Each person will owe $"+splitCost+" with a remainer of $"+remainder;
            }
           

        // "You and another 2 friend are going on a canoe trip to the Boundary Waters Canoe Area (BWCA). You purchase a canoe for $ amt, 2 canoe seats for $ amt, 2 life jackets for $ amt, two paddles for $ amt, and split the cost.  If state the sales tax is amt %, how much will each of you pay?";

        
              
        //**********WRITE QUESTION - 3 OF 4**********
        let ques = question; 
        //**********WRITE ANSWER********** - 4 OF 4 
        let ans = answer;
        quesTxt.innerHTML = ques;       
        ansTxt.innerHTML = ans;
        ansTxt.style.display="none";


    
        //*********FUNCTIONS**********

//ADD NAMES - SHUFFLE INFO - GET RANDOM INT FUNCTIONS
        // ten thousands, thousands, hundreds, tens, ones, tenth, hundredth, thousandth, ten thousandth
        //rounding(num,place)
        //rounding(num,place);

        //decimalToFraction(num) num does not contain whole number;
        //decimalToFraction(num);

        //mixFracToDec(n)
        //mixFracToDec("4 1/2");

        //createMixNumbers() 1/2 1/4 3/4 Newspaper Problem
        //createMixNumbers();

        //createMixNumbers() 1/4s 1/2s 1/8s 1/16s Good for Measure Problems
        //createMixNumbers();

        //names()
        //names();

        //shuffle(array)
        //shuffle(array);

        //getRandomInt(min, max)
        //getRandomInt(min, max);



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
        function createMixNumbers2(){        
            let calculate=Math.ceil(Math.random()*15);
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
                numerator=3;
                denominator=4;
            }
            if(calculate==3){
                whole=Math.ceil(Math.random()*9);
                numerator=1;
                denominator=2;
            }
            if(calculate==4){
                whole=Math.ceil(Math.random()*9);
                numerator=1;
                denominator=8;
            }
            if(calculate==5){
                whole=Math.ceil(Math.random()*9);
                numerator=3;
                denominator=8;
            }
            if(calculate==6){
                whole=Math.ceil(Math.random()*9);
                numerator=5;
                denominator=8;
            }
            if(calculate==7){
                whole=Math.ceil(Math.random()*9);
                numerator=7;
                denominator=8;
            }
            if(calculate==8){
                whole=Math.ceil(Math.random()*9);
                numerator=1;
                denominator=16;
            }
            if(calculate==9){
                whole=Math.ceil(Math.random()*9);
                numerator=3;
                denominator=16;
            }
            if(calculate==10){
                whole=Math.ceil(Math.random()*9);
                numerator=5;
                denominator=16;
            }if(calculate==11){
                whole=Math.ceil(Math.random()*9);
                numerator=7;
                denominator=16;
            }
            if(calculate==12){
                whole=Math.ceil(Math.random()*9);
                numerator=9;
                denominator=16;
            }
            if(calculate==13){
                whole=Math.ceil(Math.random()*9);
                numerator=11;
                denominator=16;
            }
            if(calculate==14){
                whole=Math.ceil(Math.random()*9);
                numerator=13;
                denominator=16;
            }
            if(calculate==15){
                whole=Math.ceil(Math.random()*9);
                numerator=13;
                denominator=16;
            }
            if(calculate==15){
                whole=Math.ceil(Math.random()*9);
                numerator=11;
                denominator=16;
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
            

            name.push("James");
            name.push("Robert");
            name.push("John");             
            name.push("Michael");
            name.push("David");
            name.push("William");
            name.push("Richard");
            name.push("Joseph");
            name.push("Abdishakur");  
            name.push("Thomas");
            name.push("Chris");
            name.push("Charles");
            name.push("Daniel");
            name.push("Mathew");
            name.push("Tony");
            name.push("Mark");
            name.push("Donald");
            name.push("Steve");
            name.push("Andrew");
            name.push("Titan");
            name.push("Paul");
            name.push("Josh");

            name.push("Ken");
            name.push("Brian");
            name.push("George");             
            name.push("Tim");
            name.push("Ron");
            name.push("Jason");
            name.push("Ed");
            name.push("Jeff");
            name.push("Jacob");  
            name.push("Gary");
            name.push("Chris");
            name.push("Nick");
            name.push("Eric");
            name.push("Mathew");
            name.push("John");
            name.push("Larry");
            name.push("Justin");
            name.push("Scott");
            name.push("Brandon");
            name.push("Ben");
            name.push("Sam");
            name.push("Pat");
            name.push("Norm");
            name.push("Philip");

            name.push("James");
            name.push("Robert");
            name.push("John");             
            name.push("Michael");
            name.push("David");
            name.push("William");
            name.push("Richard");
            name.push("Joseph");
            name.push("Abdishakur");  
            name.push("Thomas");
            name.push("Chris");
            name.push("Charles");
            name.push("Daniel");
            name.push("Mathew");
            name.push("Tony");
            name.push("Mark");
            name.push("Donald");
            name.push("Steve");
            name.push("Andrew");
            name.push("Titan");
            name.push("Paul");
            name.push("Josh");

            name.push("Mary");
            name.push("Patricia");
            name.push("Jennifer");             
            name.push("Linda");
            name.push("Elizabeth");
            name.push("Barbara");
            name.push("Susan");
            name.push("Jessica");
            name.push("Sarah");  
            name.push("Karen");
            name.push("Lisa");
            name.push("Nancy");
            name.push("Betty");
            name.push("Sandra");
            name.push("Margaret");
            name.push("Ashley");
            name.push("Kim");
            name.push("Emily");
            name.push("Donna");
            name.push("Michelle");
            name.push("Carol");
            name.push("Amanda");
            name.push("Melissa");
            name.push("Deb");

            name.push("James");
            name.push("Robert");
            name.push("John");             
            name.push("Michael");
            name.push("David");
            name.push("William");
            name.push("Richard");
            name.push("Joseph");
            name.push("Abdishakur");  
            name.push("Thomas");
            name.push("Chris");
            name.push("Charles");
            name.push("Daniel");
            name.push("Mathew");
            name.push("Tony");
            name.push("Mark");
            name.push("Donald");
            name.push("Steve");
            name.push("Andrew");
            name.push("Titan");
            name.push("Paul");
            name.push("Josh");

            name.push("Stephanie");
            name.push("Dorothy");
            name.push("Rebecca");             
            name.push("Sharon");
            name.push("Laura");
            name.push("Cynthia");
            name.push("Amy");
            name.push("Kathleen");
            name.push("Angela");  
            name.push("Shirley");
            name.push("Brenda");
            name.push("Emma");
            name.push("Anna");
            name.push("Pamela");
            name.push("Nicole");
            name.push("Sam");
            name.push("Christine");
            name.push("Helen");
            name.push("Debra");
            name.push("Rachel");
            name.push("Carol");
            name.push("Janet");
            name.push("Maria");
            name.push("Heather");

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


