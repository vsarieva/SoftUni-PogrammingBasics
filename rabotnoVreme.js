function rabotnoVreme(input){
let chas = Number(input[0]);
let den = input[1];
if( chas < 10 || chas > 18 || den == "Sunday" ) {
    console.log("closed")
   }
else { console.log("open")}


}
rabotnoVreme(["12",
"Monday"])
