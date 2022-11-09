function remont(input) {
   let nailon = Number(input[0]);
   let Paint = Number(input[1]);
   let razreditel = Number(input[2]);
   let hours = Number(input[3]);
   let nailonSuma = (nailon + 2) * 1.50;
   let paintSuma = (Paint + 1.10) * 14.50;
   let razreditelSuma = razreditel * 5.00;
   let torbichkiSuma = 0.40;
   let materialiSuma = nailonSuma + paintSuma + razreditelSuma + torbichkiSuma;
   maistoriSuma = (materialiSuma * 0.30) * 8;
   razhodi = materialiSuma + maistoriSuma;
   console.log(razhodi);


}
remont(["10", "11", "4", "8"])