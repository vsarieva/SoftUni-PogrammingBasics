function goldMine(input){
let locationsCount = Number(input[0]);
let dniKopane = Number(input[2]);
let ochakvandobiv = Number(input[1]);
let index = 3;
let avg = 0;
let obshtoZlato = 0;
for( let i = locationsCount; ; i++ ){
    for(let a = input[index];a <= dniKopane ; a++ ){
         obshtoZlato = obshtoZlato + a;

    }

if (ochakvandobiv <= obshtoZlato){
     avg = (obshtoZlato/dniKopane).toFixed(2);
     console.log(`Good job! Average gold per day: ${avg.toFixed(2)}.`)
} 
else console.log(`You need ${(ochakvandobiv - obshtoZlato).toFixed(2)} gold.`)

}}
goldMine(["2",
    "10",
    "3",
    "10",
    "10",
    "11",
    "20",
    "2",
    "20",
    "10"])