//**********CHANGE NAME OF FUNCTION TO THIS FILE NAME - 1 OF 4 ********** 




function a1wpTemplate(){   
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

        let item1=mensClothingFix("single");
        console.log(item1[0].item)
        

        let question="question";
        let answer="answer";
        
        
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
   
    //**********groceries array**********
        function grocery(func){
            groceryAr=[];
            groceryAr.push({item:"banana",amt:"1 ct",cost:".32",type:"vegetables"});
            groceryAr.push({item:"avocado",amt:"1 ct",cost:"1",type:"vegetables"});
            groceryAr.push({item:"raspberries ",amt:"12 ozs",cost:"4.99",type:"fruit"});
            groceryAr.push({item:"cilantro",amt:"1 ct",cost:"1.29",type:"vegetables"});
            groceryAr.push({item:"cucumbbers",amt:"1 lb",cost:"3.99",type:"vegetables"});
            groceryAr.push({item:"potatoes",amt:"24 ozs",cost:"3.50",type:"vegetables"});
            groceryAr.push({item:"orange juice 52 fl ozs",amt:"52 fl oz",cost:"6.99",type:"beverage"});
            groceryAr.push({item:"garlic",amt:"1 ct",cost:".69",type:"vegetables"});
            groceryAr.push({item:"whole milk",amt:"64 fl ozs",cost:"3.99",type:"beverage"});
            groceryAr.push({item:"pumpkin pie",amt:"24 ozs",cost:"5.99",type:"pie"});
            groceryAr.push({item:"apple pie",amt:"24 ozs",cost:"6.99",type:"pie"});
            groceryAr.push({item:"pecan pie",amt:"9 in",cost:"12.99",type:"pie"});   
            groceryAr.push({item:"sourdough bread",amt:"14 ozs",cost:"4.99",type:"bread"});
            groceryAr.push({item:"honey wheat bread",amt:"20 ozs",cost:"5.29",type:"bread"});
            groceryAr.push({item:"yogurt",amt:"32 oz",cost:"5.50",type:"dairy"});
            groceryAr.push({item:"eggs",amt:"12 ct",cost:"4.29",type:"dairy"});
            groceryAr.push({item:"salmon",amt:"1 lb",cost:"10.75",type:"meat"});
            groceryAr.push({item:"chocolate chip cookies",amt:"12 ct",cost:"5.69",type:"cookie"});
            groceryAr.push({item:"oreo cookies",amt:"12 oz",cost:"3.76",type:"cookie"});
            groceryAr.push({item:"macadamia cookies",amt:"12 ct",cost:"5.68",type:"cookie"});
            groceryAr.push({item:"ginger cookies",amt:"12 ozs",cost:"5.69",type:"cookie"});
            groceryAr.push({item:"coffee fudge ice cream",amt:"14 fl ozs",cost:"5.38",type:"ice cream"});
            groceryAr.push({item:"cookies & cream ice cream",amt:"14 fl ozs",cost:"5.69",type:"ice cream"});
            groceryAr.push({item:"chocolate ice cream",amt:"14 ozs",cost:"3.97",type:"ice cream"});
            groceryAr.push({item:"vanilla ice cream",amt:"14 ozs",cost:"3.78",type:"ice cream"});
            groceryAr.push({item:"spinach",amt:"10 ozs.",cost:"5.89",type:"vegetable"});
            groceryAr.push({item:"iceberg lettuce",amt:"1 ct",cost:"2.49",type:"vegetable"});
            groceryAr.push({item:"kale",amt:"1 ct",cost:"1.99",type:"vegetable"});
            groceryAr.push({item:"cabbage",amt:"1 ct",cost:"2.28",type:"vegetable"});
            groceryAr.push({item:"eggplant",amt:"1 ct",cost:"2.23",type:"vegetable"});
            groceryAr.push({item:"salt",amt:"24 ozs",cost:"2.79",type:"other"});
            groceryAr.push({item:"pepper",amt:"1.66 ozs",cost:"4.39",type:"other"});
            groceryAr.push({item:"red bell pepper",amt:"1 ct",cost:"1.50",type:"vegetable"});
            groceryAr.push({item:"green bell pepper",amt:"1 ct",cost:".69",type:"vegetable"});
            groceryAr.push({item:"green seedless grapes",amt:"2.8 lbs",cost:"5.79",type:"fruit"});
            groceryAr.push({item:"red seedless grapes",amt:"2.31 lbs",cost:"5.88",type:"fruit"});
            groceryAr.push({item:"cherries",amt:"12 ozs",cost:"4.99",type:"fruit"});
            groceryAr.push({item:"apple",amt:"1 ct",cost:".79",type:"fruit"});
            groceryAr.push({item:"pear",amt:"1 ct",cost:"1.03",type:"fruit"});
            groceryAr.push({item:"peanut butter",amt:"16 ozs",cost:"2.49",type:"other"});
            groceryAr.push({item:"grape jelly",amt:"13 ozs",cost:"3.79",type:"other"});
            groceryAr.push({item:"hot dogs",amt:"10 ozs",cost:"4.29",type:"meat"});
            groceryAr.push({item:"turkey",amt:"12 lbs",cost:"25.78",type:"meat"});
            groceryAr.push({item:"hamburger",amt:"16 ozs",cost:"5.39",type:"meat"});

            var rand = Math.floor(Math.random()*groceryAr.length);            
            if(func=="single"){
                return groceryAr;
                }
                if(func=="random"){
                    return groceryAr[rand];
                }
        }
     //**********clothing array**********        
        function mensClothingFix(func){
            let mensClothingFixAr=[];
            mensClothingFixAr.push({item:"sweater",cost:"25.50"});
            mensClothingFixAr.push({item:"long sleeve shirt",cost:"30.63"});
            mensClothingFixAr.push({item:"short sleeve shirt",cost:"24.20"});
            mensClothingFixAr.push({item:"shorts",cost:"19.90"});
            mensClothingFixAr.push({item:"pants",cost:"26.89"});
            mensClothingFixAr.push({item:"suit",cost:"53.52"});
            mensClothingFixAr.push({item:"turtle neck sweater",cost:"27.97"});
            mensClothingFixAr.push({item:"pajamas",cost:"16.70"});
            var rand = Math.floor(Math.random()*mensClothingFixAr.length);            
            if(func=="single"){
                return mensClothingFixAr;
                }
                if(func=="random"){
                    return mensClothingFixAr[rand];
                }
        }        
        function mensClothingVar(func){          
            let mensClothingVarAr=[];
            mensClothingVarAr.push({item:"sweater",cost:rounding(Math.random()*10+25.50,"hundredth")});
            mensClothingVarAr.push({item:"long sleeve shirt",cost:rounding(Math.random()*2+6.99,"hundredth")});
            mensClothingVarAr.push({item:"short sleeve shirt",cost:rounding(Math.random()*5+24.20,"hundredth")});
            mensClothingVarAr.push({item:"shorts",cost:rounding(Math.random()*6+19.90,"hundredth")});
            mensClothingVarAr.push({item:"pants",cost:rounding(Math.random()*6+26.89,"hundredth")});
            mensClothingVarAr.push({item:"suit",cost:rounding(Math.random()*10+53.52,"hundredth")});
            mensClothingVarAr.push({item:"turtle neck sweater",cost:rounding(Math.random()*10+27.97,"hundredth")});
            mensClothingVarAr.push({item:"pajamas",cost:rounding(Math.random()*5+16.70,"hundredth")});
            var rand = Math.floor(Math.random()*mensClothingVarAr.length); 
                if(func=="single"){
                    return mensClothingVarAr;
                }
                if(func=="random"){
                    return mensClothingVarAr[rand];
                }      
        } 
        function womensClothingFix(func){
            let womensClothingFixAr=[];
            womensClothingFixAr.push({item:"sweater",cost:"43.99"});
            womensClothingFixAr.push({item:"long sleeve shirt",cost:""});
            womensClothingFixAr.push({item:"short sleeve shirt",cost:"19.89"});
            womensClothingFixAr.push({item:"shorts",cost:"18.90"});
            womensClothingFixAr.push({item:"pants",cost:"28.50"});
            womensClothingFixAr.push({item:"suit",cost:"59.99"});
            womensClothingFixAr.push({item:"dress",cost:"44.99"});
            womensClothingFixAr.push({item:"blouse",cost:"22.98"});
            womensClothingFixAr.push({item:"pajamas",cost:"26.60"});
            var rand = Math.floor(Math.random()*womensClothingFixAr.length); 
                if(func=="single"){
                    return womensClothingFixAr;
                }
                if(func=="random"){
                    return womensClothingFixAr[rand];
                }
        }            
        function womensClothingVar(func){
            let womensClothingVarAr=[];
            womensClothingVarAr.push({item:"sweater",cost:rounding(Math.random()*5+43.99,"hundredth")});
            womensClothingVarAr.push({item:"long sleeve shirt",cost:rounding(Math.random()*2+18.50,"hundredth")});
            womensClothingVarAr.push({item:"short sleeve shirt",cost:rounding(Math.random()*2+19.89,"hundredth")});
            womensClothingVarAr.push({item:"shorts",cost:rounding(Math.random()*2+18.90,"hundredth")});
            womensClothingVarAr.push({item:"pants",cost:rounding(Math.random()*4+28.50,"hundredth")});
            womensClothingVarAr.push({item:"suit",cost:rounding(Math.random()*8+59.99,"hundredth")});
            womensClothingVarAr.push({item:"dress",cost:rounding(Math.random()*8+44.99,"hundredth")});
            womensClothingVarAr.push({item:"blouse",cost:rounding(Math.random()*2+22.98,"hundredth")});
            womensClothingVarAr.push({item:"pajamas",cost:rounding(Math.random()*3+26.60,"hundredth")});
            var rand = Math.floor(Math.random()*womensClothingVarAr.length); 
                if(func=="single"){
                    return womensClothingVarAr;
                }
                if(func=="random"){
                    return womensClothingVarAr[rand];
                }
        }     
        //**********Sporting Goods Array ********** 
        function baseballFix(func){
            let baseballFixAr=[];
            baseballFixAr.push({item:"baseball",cost:"6.99"});
            baseballFixAr.push({item:"baseball glove",cost:"16.45"});
            baseballFixAr.push({item:"baseball bat",cost:"23.79"});
            baseballFixAr.push({item:"batting helmet",cost:"34.95"});
            var rand = Math.floor(Math.random()*baseballFixAr.length);            
            if(func=="single"){
            return baseballFixAr;
            }
            if(func=="random"){
                return baseballFixAr[rand];
            }
        }
        function baseballVar(func){ 
            let baseballVarAr=[];
            baseballVarAr.push({item:"baseball",cost:rounding(Math.random()*2+5.99,"hundredth")});
            baseballVarAr.push({item:"baseball glove",cost:rounding(Math.random()*7+15.45,"hundredth")});
            baseballVarAr.push({item:"baseball bat",cost:rounding(Math.random()*10+23.79,"hundredth")});
            baseballVarAr.push({item:"batting helmet",cost:rounding(Math.random()*5+32.95,"hundredth")});
            var rand = Math.floor(Math.random()*baseballVarAr.length);            
            if(func=="single"){
                return baseballVarAr;
            }
            if(func=="random"){
                return baseballVarAr[rand];
            }         
        }       
        function fishingFix(func){
        let fishingFixAr=[];
        fishingFixAr.push({item:"fishing rod",cost:rounding(Math.random()*20+25.45,"hundredth")});
        fishingFixAr.push({item:"fishing reel",cost:rounding(Math.random()*20+21.99,"hundredth")});
        fishingFixAr.push({item:"fishing lure",cost:rounding(Math.random()*3+3.45,"hundredth")});
        fishingFixAr.push({item:"bag of hooks",cost:rounding(Math.random()*2+5.50,"hundredth")});
        fishingFixAr.push({item:"fishing net",cost:rounding(Math.random()*5+18.28,"hundredth")});
        fishingFixAr.push({item:"bag of bobbers",cost:rounding(Math.random()*2+2.25,"hundredth")});
        var rand = Math.floor(Math.random()*fishingFixAr.length);            
        if(func=="single"){
        return fishingFixAr;
        }
        if(func=="random"){
            return fishingFixAr[rand];
        }
        }
        function fishingVar(func){ 
            let fishingVarAr=[];
            fishingVarAr.push({item:"fishing rod",cost:rounding(Math.random()*20+25.45,"hundredth")});
            fishingVarAr.push({item:"fishing reel",cost:rounding(Math.random()*20+21.99,"hundredth")});
            fishingVarAr.push({item:"fishing lure",cost:rounding(Math.random()*3+3.45,"hundredth")});
            fishingVarAr.push({item:"bag of hooks",cost:rounding(Math.random()*2+5.50,"hundredth")});
            fishingVarAr.push({item:"fishing net",cost:rounding(Math.random()*5+18.28,"hundredth")});
            fishingVarAr.push({item:"bag of bobbers",cost:rounding(Math.random()*2+2.25,"hundredth")});
            var rand = Math.floor(Math.random()*fishingVarAr.length);            
            if(func=="single"){
                return fishingVarAr;
            }
            if(func=="random"){
                return fishingVarAr[rand];
            }         
        }
        function tennisFix(func){
            let tennisFixAr=[];
            tennisFixAr.push({item:"tennis balls",cost:"3.94"});
            tennisFixAr.push({item:"tennis racket",cost:"31.38"});
            tennisFixAr.push({item:"tennis shorts",cost:"24.09"});
            tennisFixAr.push({item:"headband",cost:"2.97"});
            var rand = Math.floor(Math.random()*tennisFixAr.length);            
            if(func=="single"){
                return tennisFixAr;
            }
            if(func=="random"){
                return tennisFixAr[rand];
            }         
        }
        function tennisVar(func){
            let tennisVarAr=[];
            tennisVarAr.push({item:"tennis balls",cost:rounding(Math.random()*2+3.94,"hundredth")});
            tennisVarAr.push({item:"tennis racket",cost:rounding(Math.random()*5+31.38,"hundredth")});
            tennisVarAr.push({item:"tennis shorts",cost:rounding(Math.random()*4+24.09,"hundredth")});
            tennisVarAr.push({item:"headband",cost:rounding(Math.random()*1+2.97,"hundredth")});
            var rand = Math.floor(Math.random()*tennisVarAr.length);            
            if(func=="single"){
                return tennisVarAr;
            }
            if(func=="random"){
                return tennisVarAr[rand];
            }         
        }
        function baseballFix(func){
            let baseballFixAr=[];
            baseballFixAr.push({item:"baseball",cost:"6.99"});
            baseballFixAr.push({item:"baseball glove",cost:"16.45"});
            baseballFixAr.push({item:"baseball bat",cost:"23.79"});
            baseballFixAr.push({item:"batting helmet",cost:"34.95"});
            var rand = Math.floor(Math.random()*baseballFixAr.length);            
            if(func=="single"){
            return baseballFixAr;
            }
            if(func=="random"){
                return baseballFixAr[rand];
            }
        }
        function baseballVar(func){ 
            let baseballVarAr=[];
            baseballVarAr.push({item:"baseball",cost:rounding(Math.random()*2+5.99,"hundredth")});
            baseballVarAr.push({item:"baseball glove",cost:rounding(Math.random()*7+15.45,"hundredth")});
            baseballVarAr.push({item:"baseball bat",cost:rounding(Math.random()*10+23.79,"hundredth")});
            baseballVarAr.push({item:"batting helmet",cost:rounding(Math.random()*5+32.95,"hundredth")});
            var rand = Math.floor(Math.random()*baseballVarAr.length);            
            if(func=="single"){
                return baseballVarAr;
            }
            if(func=="random"){
                return baseballVarAr[rand];
            }         
        }
        function basketballFix(func){
            let basketballFixAr=[];
            basketballFixAr.push({item:"basketball shoes",cost:"69.95"});
            basketballFixAr.push({item:"basketball",cost:"21.81"});
            basketballFixAr.push({item:"basketball hoop",cost:"84.98"});
            basketballFixAr.push({item:"basketball pump",cost:"6.49"});
            var rand = Math.floor(Math.random()*basketballFixAr.length);            
            if(func=="single"){
                return basketballFixAr;
            }
            if(func=="random"){
                return basketballFixAr[rand];
            }         
        }
        function basketballVar(func){
            let basketballVarAr=[];
            basketballVarAr.push({item:"basketball shoes",cost:rounding(Math.random()*5+69.95,"hundredth")});
            basketballVarAr.push({item:"basketball",cost:rounding(Math.random()*2+21.81,"hundredth")});
            basketballVarAr.push({item:"basketball hoop",cost:rounding(Math.random()*10+84.98,"hundredth")});
            basketballVarAr.push({item:"basketball pump",cost:rounding(Math.random()*2+6.49,"hundredth")});
            var rand = Math.floor(Math.random()*basketballVarAr.length);            
            if(func=="single"){
                return basketballVarAr;
            }
            if(func=="random"){
                return basketballVarAr[rand];
            }         
        }
        function volleyballFix(func){
            let volleyballFixAr=[];
            volleyballFixAr.push({item:"volleyball bounce back net",cost:"49.70"});
            volleyballFixAr.push({item:"volleyball",cost:"21.81"});
            volleyballFixAr.push({item:"volleyball training aid",cost:"28.90"});
            volleyballFixAr.push({item:"volleyball pump",cost:"6.49"});
            var rand = Math.floor(Math.random()*volleyballFixAr.length);            
            if(func=="single"){
                return volleyballFixAr;
            }
            if(func=="random"){
                return volleyballFixAr[rand];
            }         
        }
        function volleyballVar(func){
            let volleyballVarAr=[];
            volleyballVarAr.push({item:"volleyball bounce back net",cost:rounding(Math.random()*10+49.70,"hundredth")});
            volleyballVarAr.push({item:"volleyball",cost:rounding(Math.random()*5+21.81,"hundredth")});
            volleyballVarAr.push({item:"volleyball training aid",cost:rounding(Math.random()*5+28.90,"hundredth")});
            volleyballVarAr.push({item:"volleyball pump",cost:rounding(Math.random()*2+6.49,"hundredth")});
            var rand = Math.floor(Math.random()*volleyballVarAr.length);            
            if(func=="single"){
                return volleyballVarAr;
            }
            if(func=="random"){
                return volleyballVarAr[rand];
            }         
        }
        function bikeFix(func){
            let bikeFixAr=[];
            bikeFixAr.push({item:"bike",cost:"125.99"});
            bikeFixAr.push({item:"Helmet",cost:"21.81"});
            bikeFixAr.push({item:"lights",cost:"8.35"});
            bikeFixAr.push({item:"bike rack",cost:"16.59"});
            bikeFixAr.push({item:"bike tire pump",cost:"10.39"});
            var rand = Math.floor(Math.random()*bikeFixAr.length);            
            if(func=="single"){
                return bikeFixAr;
            }
            if(func=="random"){
                return bikeFixAr[rand];
            }         
        }
        function bikeVar(func){
            let bikeVarAr=[];
            bikeVarAr.push({item:"bike",cost:rounding(Math.random()*20+125.99,"hundredth")});
            bikeVarAr.push({item:"Helmet",cost:rounding(Math.random()*3+21.81,"hundredth")});
            bikeVarAr.push({item:"lights",cost:rounding(Math.random()*2+8.35,"hundredth")});
            bikeVarAr.push({item:"bike rack",cost:rounding(Math.random()*2+16.59,"hundredth")});
            bikeVarAr.push({item:"bike tire pump",cost:rounding(Math.random()*2+10.39,"hundredth")});
            var rand = Math.floor(Math.random()*bikeVarAr.length);            
            if(func=="single"){
                return bikeVarAr;
            }
            if(func=="random"){
                return bikeVarAr[rand];
            }         
        }
        function soccerFix(func){
            let soccerFixAr=[];
            soccerFixAr.push({item:"soccer shoes",cost:"31.99",type:"soccer"});
            soccerFixAr.push({item:"soccer ball",cost:"20.11",type:"soccer"});
            soccerFixAr.push({item:"soccer net",cost:"24.98",type:"soccer"});
            soccerFixAr.push({item:"air pump",cost:"6.23",type:"soccer"});
            var rand = Math.floor(Math.random()*soccerFixAr.length);            
            if(func=="single"){
                return soccerFixAr;
            }
            if(func=="random"){
                return soccerFixAr[rand];
            }         
        }
        function soccerVar(func){
            let soccerVarAr=[];
            soccerVarAr.push({item:"soccer shoes",cost:rounding(Math.random()*4+31.99,"hundredth")});
            soccerVarAr.push({item:"soccer ball",cost:rounding(Math.random()*3+20.11,"hundredth")});
            soccerVarAr.push({item:"soccer net",cost:rounding(Math.random()*2+24.98,"hundredth")});
            soccerVarAr.push({item:"air pump",cost:rounding(Math.random()*2+6.23,"hundredth")});
            var rand = Math.floor(Math.random()*soccerVarAr.length);            
            if(func=="single"){
                return soccerVarAr;
            }
            if(func=="random"){
                return soccerVarAr[rand];
            }         
        }
        function rollerbladesFix(func){
        let rollerbladesFixAr=[];
        rollerbladesFixAr.push({item:"rollerblades",cost:"66.99"});
        rollerbladesFixAr.push({item:"helmet",cost:"26.79"});
        rollerbladesFixAr.push({item:"pads",cost:"27.80"});
        var rand = Math.floor(Math.random()*rollerbladesFixAr.length);            
            if(func=="single"){
                return rollerbladesFixAr;
            }
            if(func=="random"){
                return rollerbladesFixAr[rand];
            }         
        }
        function rollerbladesVar(func){
            let rollerbladesVarAr=[];
            rollerbladesVarAr.push({item:"rollerblades",cost:rounding(Math.random()*10+66.99,"hundredth")});
            rollerbladesVarAr.push({item:"helmet",cost:rounding(Math.random()*4+26.79,"hundredth")});
            rollerbladesVarAr.push({item:"pads",cost:rounding(Math.random()*4+27.80,"hundredth")});
            var rand = Math.floor(Math.random()*rollerbladesVarAr.length);            
                if(func=="single"){
                    return rollerbladesVarAr;
                }
                if(func=="random"){
                    return rollerbladesVarAr[rand];
                }         
        }
        function skateboardFix(func){
            let skateboardFixAr=[];
            skateboardFixAr.push({item:"skateboard",cost:"35.95"});
            skateboardFixAr.push({item:"helmet",cost:"37.34"});
            skateboardFixAr.push({item:"pads",cost:"22.80"});
            var rand = Math.floor(Math.random()*skateboardFixAr.length);            
            if(func=="single"){
                return skateboardFixAr;
            }
            if(func=="random"){
                return skateboardFixAr[rand];
            }         
        }
        function skateboardVar(func){
            let skateboardVarAr=[];
            skateboardVarAr.push({item:"skateboard",cost:rounding(Math.random()*4+35.95,"hundredth")});
            skateboardVarAr.push({item:"helmet",cost:rounding(Math.random()*4+37.34,"hundredth")});
            skateboardVarAr.push({item:"pads",cost:rounding(Math.random()*3+22.80,"hundredth")});
            var rand = Math.floor(Math.random()*skateboardVarAr.length);            
            if(func=="single"){
                return skateboardVarAr;
            }
            if(func=="random"){
                return skateboardVarAr[rand];
            }         
        }
        function softballFix(func){
        let softballFixAr=[];
        softballFixAr.push({item:"softball",cost:"7.65"});
        softballFixAr.push({item:"softball glove",cost:"21.99"});
        softballFixAr.push({item:"softball bat",cost:"39.67"});
        softballFixAr.push({item:"batting helmet",cost:"34.97"});
        var rand = Math.floor(Math.random()*softballFixAr.length);            
            if(func=="single"){
                return softballFixAr;
            }
            if(func=="random"){
                return softballFixAr[rand];
            }         
        } 
        function softballVar(func){
            let softballVarAr=[];
            softballVarAr.push({item:"softball",cost:rounding(Math.random()*2+7.65,"hundredth")});
            softballVarAr.push({item:"softball glove",cost:rounding(Math.random()*3+21.99,"hundredth")});
            softballVarAr.push({item:"softball bat",cost:rounding(Math.random()*4+39.67,"hundredth")});
            softballVarAr.push({item:"batting helmet",cost:rounding(Math.random()*4+34.97,"hundredth")});
            var rand = Math.floor(Math.random()*softballVarAr.length);            
                if(func=="single"){
                    return softballVarAr;
                }
                if(func=="random"){
                    return softballVarAr[rand];
                }         
        }          
        function crossCountryfix(func){
        let crossCountryFixAr=[];
        crossCountryFixAr.push({item:"cross country shoes",cost:"54.95"});
        crossCountryFixAr.push({item:"shorts",cost:"18.99"});
        crossCountryFixAr.push({item:"shirt",cost:"16.23"});
        var rand = Math.floor(Math.random()*crossCountryFixAr.length);            
            if(func=="single"){
                return crossCountryFixAr;
            }
            if(func=="random"){
                return crossCountryFixAr[rand];
            }                 
        }
        function crossCountryVar(func){
            let crossCountryVarAr=[];
            crossCountryVarAr.push({item:"cross country shoes",cost:rounding(Math.random()*8+54.95,"hundredth")});
            crossCountryVarAr.push({item:"shorts",cost:rounding(Math.random()*5+18.99,"hundredth")});
            crossCountryVarAr.push({item:"shirt",cost:rounding(Math.random()*3+16.23,"hundredth")});
            var rand = Math.floor(Math.random()*crossCountryVarAr.length);            
                if(func=="single"){
                    return crossCountryVarAr;
                }
                if(func=="random"){
                    return crossCountryVarAr[rand];
                }                 
        }
        function swimmingFix(func){
            let swimmingFixAr=[];
            swimmingFixAr.push({item:"swimsuit",cost:"26.96"});
            swimmingFixAr.push({item:"swimming goggles",cost:"24.00"});
            swimmingFixAr.push({item:"towel",cost:"15.45"});
            var rand = Math.floor(Math.random()*swimmingFixAr.length);            
                if(func=="single"){
                    return swimmingFixAr;
                }
                if(func=="random"){
                    return swimmingFixAr[rand];
                }                   
        }        
        function swimmingVar(func){
        let swimmingVarAr=[];
        swimmingVarAr.push({item:"swimsuit",cost:rounding(Math.random()*5+26.96,"hundredth")});
        swimmingVarAr.push({item:"swimming goggles",cost:rounding(Math.random()*5+24.00,"hundredth")});
        swimmingVarAr.push({item:"towel",cost:rounding(Math.random()*3+15.45,"hundredth")});
        var rand = Math.floor(Math.random()*swimmingVarAr.length);            
            if(func=="single"){
                return swimmingVarAr;
            }
            if(func=="random"){
                return swimmingVarAr[rand];
            }                   
        }
        function paddleBoardFix(func){
        let paddleBoardFixAr=[]; 
        paddleBoardFixAr.push({item:"paddle board",cost:"345.00"});
        paddleBoardFixAr.push({item:"life jacket",cost:"34.67"});
        paddleBoardFixAr.push({item:"pump",cost:"43.99"});
        var rand = Math.floor(Math.random()*paddleBoardFixAr.length);            
        if(func=="single"){
            return paddleBoardFixAr;
        }
        if(func=="random"){
            return paddleBoardFixAr[rand];
        }                       
        }
        function paddleBoardVar(func){
            let paddleBoardVarAr=[]; 
            paddleBoardVarAr.push({item:"paddle board",cost:rounding(Math.random()*50+345.00,"hundredth")});
            paddleBoardVarAr.push({item:"life jacket",cost:rounding(Math.random()*5+34.67,"hundredth")});
            paddleBoardVarAr.push({item:"pump",cost:rounding(Math.random()*7+43.99,"hundredth")});
            var rand = Math.floor(Math.random()*paddleBoardVarAr.length);            
            if(func=="single"){
                return paddleBoardVarAr;
            }
            if(func=="random"){
                return paddleBoardVarAr[rand];
            }                       
        }
        function kayakFix(func){
        let kayakFixAr=[];
        kayakFixAr.push({item:"kayak",cost:"889.00"});
        kayakFixAr.push({item:"kayak paddle",cost:"105.35"});
        kayakFixAr.push({item:"spray skirt",cost:"45.90"});
        kayakFixAr.push({item:"wetsuit",cost:"55.45"});
        kayakFixAr.push({item:"water pump",cost:"25.35"});
        kayakFixAr.push({item:"life jacket",cost:"37.22"});
        var rand = Math.floor(Math.random()*kayakFixAr.length);            
        if(func=="single"){
            return kayakFixAr;
        }
        if(func=="random"){
            return kayakFixAr[rand];
        }                 
        }
        function kayakVar(func){
            let kayakVarAr=[];
            kayakVarAr.push({item:"kayak",cost:rounding(Math.random()*100+889.00,"hundredth")});
            kayakVarAr.push({item:"kayak paddle",cost:rounding(Math.random()*10+105.35,"hundredth")});
            kayakVarAr.push({item:"spray skirt",cost:rounding(Math.random()*10+45.90,"hundredth")});
            kayakVarAr.push({item:"wetsuit",cost:rounding(Math.random()*10+55.45,"hundredth")});
            kayakVarAr.push({item:"water pump",cost:rounding(Math.random()*5+25.35,"hundredth")});
            kayakVarAr.push({item:"life jacket",cost:rounding(Math.random()*7+37.22,"hundredth"));
            var rand = Math.floor(Math.random()*kayakVarAr.length);            
            if(func=="single"){
                return kayakVarAr;
            }
            if(func=="random"){
                return kayakVarAr[rand];
            }                 
        }
        function canoeFix(func){
        let canoeFixAr=[];
        canoeFixAr.push({item:"kevlar canoe",cost:"2137.00"});
        canoeFixAr.push({item:"canoe seat",cost:"39.05"});
        canoeFixAr.push({item:"paddles",cost:"59.90"});
        canoeFixAr.push({item:"life jacket",cost:"36.96"});
        var rand = Math.floor(Math.random()*canoeFixAr.length);            
            if(func=="single"){
                return canoeFixAr;
            }
            if(func=="random"){
                return canoeFixAr[rand];
            }                 
        }
        function canoeVar(func){
            let canoeVarAr=[];
            canoeVarAr.push({item:"kevlar canoe",cost:rounding(Math.random()*300+2137.00,"hundredth")});
            canoeVarAr.push({item:"canoe seat",cost:rounding(Math.random()*10+39.05,"hundredth")});
            canoeVarAr.push({item:"paddles",cost:rounding(Math.random()*10+59.90,"hundredth")});
            canoeVarAr.push({item:"life jacket",cost:rounding(Math.random()*10+36.96,"hundredth")});
            var rand = Math.floor(Math.random()*canoeVarAr.length);            
                if(func=="single"){
                    return canoeVarAr;
                }
                if(func=="random"){
                    return canoeVarAr[rand];
                }                 
        }

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

