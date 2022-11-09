function magazin(input){
let productName = input[0];
let town = input[1];
let broi = Number(input[2]);
let priceTotal = 0;
if(town == "Sofia"){
    if( productName == "sweets"){ priceTotal = broi*1.45}
    else if( productName == "coffee"){ priceTotal = broi*0.50 }
    else if( productName == "water"){ priceTotal = broi*0.80}
    else if( productName == "beer"){priceTotal = broi*1.20}
    else if( productName == "peanuts"){ priceTotal = broi*1.60}
    
   }  
    else if( town == "Plovdiv") {
        if( productName == "sweets"){ let priceTotal = broi*1.30}
        else if( productName == "coffee"){ priceTotal = broi*0.40 }
        else if( productName == "water"){ priceTotal = broi*0.70}
        else if( productName == "beer"){ priceTotal = broi*1.15}
        else if( productName == "peanuts"){ priceTotal = broi*1.50}
  
    }
    else if (town == "Varna"){
        if( productName == "sweets"){  priceTotal = broi*1.35}
        else if( productName == "coffee"){ priceTotal = broi*0.45 }
        else if( productName == "water"){ priceTotal = broi*0.70}
        else if( productName == "beer"){ priceTotal = broi*1.10}
        else if( productName == "peanuts"){priceTotal = broi*1.55}
   
    }
    else{ console.log("Error")}

console.log(priceTotal.toFixed(2));



}
magazin(["beer",
"Sofia",
"6"])


