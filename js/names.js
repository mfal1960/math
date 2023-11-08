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