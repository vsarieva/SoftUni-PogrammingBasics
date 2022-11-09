function menu(input){
let chicken = Number(input[0]);
let fish = Number(input[1]);
let vegetarian = Number(input[2]);
   let chickenPrice = chicken * 10.35;
   let fishPrice = fish * 12.40;
   let vegetarianPrice = vegetarian * 8.15;
      let obshtoPrice = chickenPrice + fishPrice + vegetarianPrice;
         let desertCena = obshtoPrice * 0.20;
               final = 2.50 + obshtoPrice + desertCena;
               console.log(final);


}
menu(["2", "4", "3"])