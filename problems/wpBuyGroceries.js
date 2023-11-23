//**********CHANGE NAME OF FUNCTION TO THIS FILE NAME - 1 OF 4 ********** 
function wpBuyGroceries(){   
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
  
groceryAr=[]
        groceryAr.push({item:"banana",amt:"1 ct",cost:".32",type:"vegetables"});
        groceryAr.push({item:"avocado",amt:"1 ct",cost:"1",type:"vegetables"});
        groceryAr.push({item:"raspberries ",amt:"12 oz",cost:"4.99",type:"fruit"});
        groceryAr.push({item:"cilantro",amt:"1 ct",cost:"1.29",type:"vegetables"});
        groceryAr.push({item:"cucumbbers",amt:"1 lb",cost:"3.99",type:"vegetables"});
        groceryAr.push({item:"potatoes",amt:"24 oz",cost:"3.50",type:"vegetables"});
        groceryAr.push({item:"orange juice 52 fl oz",amt:"52 fl oz",cost:"6.99",type:"beverage"});
        groceryAr.push({item:"garlic",amt:"1",cost:".69",type:"vegetables"});
        groceryAr.push({item:"whole milk",amt:"64 fl oz",cost:"3.99",type:"beverage"});
        groceryAr.push({item:"pumpkin pie",amt:"24 oz",cost:"5.99",type:"pie"});
        groceryAr.push({item:"apple pie",amt:"24 oz",cost:"6.99",type:"pie"});
        groceryAr.push({item:"pecan pie",amt:"9 in",cost:"12.99",type:"pie"});   
        groceryAr.push({item:"sourdough bread",amt:"14 oz",cost:"4.99",type:"bread"});
        groceryAr.push({item:"honey wheat bread",amt:"20z",cost:"5.29",type:"bread"});
        groceryAr.push({item:"yogurt",amt:"32 oz",cost:"5.50",type:"dairy"});
        groceryAr.push({item:"eggs",amt:"12 ct",cost:"4.29",type:"dairy"});
        groceryAr.push({item:"salmon",amt:"1 lb",cost:"10.75",type:"meat"});
        groceryAr.push({item:"chocolate chip cookies",amt:"12 ct",cost:"5.69",type:"cookie"});
        groceryAr.push({item:"oreo cookies",amt:"12 oz",cost:"3.76",type:"cookie"});
        groceryAr.push({item:"macadamia cookies",amt:"12 ct",cost:"5.68",type:"cookie"});
        groceryAr.push({item:"ginger cookies",amt:"12 oz",cost:"5.69",type:"cookie"});
        groceryAr.push({item:"coffee fudge ice cream",amt:"14 fl oz",cost:"5.38",type:"ice cream"});
        groceryAr.push({item:"cookies & cream ice cream",amt:"14 fl oz",cost:"5.69",type:"ice cream"});
        groceryAr.push({item:"chocolate ice cream",amt:"14 oz",cost:"3.97",type:"ice cream"});
        groceryAr.push({item:"vanilla ice cream",amt:"14 oz",cost:"3.78",type:"ice cream"});
        groceryAr.push({item:"spinach",amt:"10 oz",cost:"5.89",type:"vegetable"});
        groceryAr.push({item:"iceberg lettuce",amt:"1 ct",cost:"2.49",type:"vegetable"});
        groceryAr.push({item:"kale",amt:"1 ct",cost:"1.99",type:"vegetable"});
        groceryAr.push({item:"cabbage",amt:"1 ct",cost:"2.28",type:"vegetable"});
        groceryAr.push({item:"eggplant",amt:"1 ct",cost:"2.23",type:"vegetable"});
        groceryAr.push({item:"salt",amt:"24 oz",cost:"2.79",type:"other"});
        groceryAr.push({item:"pepper",amt:"1.66 oz",cost:"4.39",type:"other"});
        groceryAr.push({item:"red bell pepper",amt:"1 ct",cost:"1.50",type:"vegetable"});
        groceryAr.push({item:"green bell pepper",amt:"1 ct",cost:".69",type:"vegetable"});
        groceryAr.push({item:"green seedless grapes",amt:"2.8 lb",cost:"5.79",type:"fruit"});
        groceryAr.push({item:"red seedless grapes",amt:"2.31 lb",cost:"5.88",type:"fruit"});
        groceryAr.push({item:"cherries",amt:"12 oz",cost:"4.99",type:"fruit"});
        groceryAr.push({item:"apple",amt:"1 ct",cost:".79",type:"fruit"});
        groceryAr.push({item:"pear",amt:"1 ct",cost:"1.03",type:"fruit"});
        groceryAr.push({item:"peanut butter",amt:"16 oz",cost:"2.49",type:"other"});
        groceryAr.push({item:"grape jelly",amt:"13 oz",cost:"3.79",type:"other"});
        groceryAr.push({item:"hot dogs",amt:"10 oz",cost:"4.29",type:"meat"});
        groceryAr.push({item:"turkey",amt:"12 lb",cost:"25.78",type:"meat"});
        groceryAr.push({item:"hamburger",amt:"16 oz",cost:"5.39",type:"meat"});
     
        shuffle(groceryAr)
    let groceryShuffle=[];
    for(let i=0;i<groceryAr.length;i++){
          
       groceryShuffle.push(groceryAr[i]); 
     
    }
    console.log(groceryShuffle)
    let item1;
    let item2;
    let item3;
    let item4;
    let question;
    let sum;
    let randomItem=Math.ceil(Math.random()*3);
    if(randomItem==1){  
    item1=groceryShuffle[0].item;
    item2=groceryShuffle[1].item;
    item3=groceryShuffle[2].item;
    item4=groceryShuffle[3].item;
    item1c=groceryShuffle[0].cost;
    item2c=groceryShuffle[1].cost;
    item3c=groceryShuffle[2].cost;
    item4c=groceryShuffle[3].cost;
    sum=rounding(Number(item1c)+Number(item2c)+Number(item3c)+Number(item4c),"tenth");
    
    question = "What was the total cost for the following groceries: "+item1+" at $"+item1c+", "+item2+" at $"+item2c+", "+item3+" at $"+item3c+", and "+item4+" at $"+item4c+"?";
    };
    if(randomItem==2){  
        item1=groceryShuffle[0].item;
        item2=groceryShuffle[1].item;
        item3=groceryShuffle[2].item;
        item1c=groceryShuffle[0].cost;
        item2c=groceryShuffle[1].cost;
        item3c=groceryShuffle[2].cost;
        sum=rounding(Number(item1c)+Number(item2c)+Number(item3c),"tenth");
       
        question = "What was the total cost for the following groceries: "+item1+" at $"+item1c+", "+item2+" at $"+item2c+", and "+item3+" at $"+item3c+"?";
    };
    if(randomItem==3){  
        item1=groceryShuffle[0].item;
        item2=groceryShuffle[1].item;  
        item1c=groceryShuffle[0].cost;
        item2c=groceryShuffle[1].cost;
        sum=rounding(Number(item1c)+Number(item2c),"tenth");
       
        question = "What was the total cost for the following groceries: "+item1+" at $"+item1c+", and "+item2+" at $"+item2c+"?";
    };

   

        
 
              
        //**********WRITE QUESTION - 3 OF 4**********
        let ques = question; 
        //**********WRITE ANSWER********** - 4 OF 4 
        let ans = "The total cost for the groceries was $"+sum+"."
        quesTxt.innerHTML = ques;       
        ansTxt.innerHTML = ans;
        ansTxt.style.display="none";

        //**********Grocery Array ********** 
        
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


