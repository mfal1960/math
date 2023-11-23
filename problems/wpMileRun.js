//**********CHANGE NAME OF FUNCTION TO THIS FILE NAME - 1 OF 7 ********** 
function wpMileRun(){   
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
        let milesPerDay=5;
        let daysRun=7;
        let totalMiles=milesPerDay*daysRun;
        let name=names();
              
        //**********WRITE QUESTION - 4 OF 7**********
        let ques = "If "+name+" ran "+milesPerDay+" miles a day for "+daysRun+" days, how many miles would "+name+" have run?"; 
        //**********WRITE ANSWER********** - 5 OF 7 
        let ans = name+" would have run "+totalMiles+" miles."
        quesTxt.innerHTML = ques;       
        ansTxt.innerHTML = ans;
        ansTxt.style.display="none";

       
        
    
        //*********MODIFY IMPORT FUNCTIONS - 6 OF 7 **********

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


