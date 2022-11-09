function petya(input) {
  let cenaEkskurziq = Number(input[0]);
  let puzeli = Number(input[1]);
  let kukli = Number(input[2]);
  let mecheta = Number(input[3]);
  let minioni = Number(input[4]);
  let kamioni = Number(input[5]);
  let puzeliCena = puzeli * 2.60;
  let kukliCena = kukli * 3;
  let mechetaCena = mecheta * 4.10;
  let minioniCena = minioni * 8.20;
  let kamioniCena = kamioni * 2;
  let suma = puzeliCena + kukliCena + mechetaCena + minioniCena + kamioniCena;
  if (puzeli + kukli + mecheta + minioni + kamioni >= 50) { suma = 0.75 * suma }
  suma = suma * 0.90;
  let razlika = Math.abs(cenaEkskurziq - suma);
  if (cenaEkskurziq < suma) { console.log(`Yes!${razlika.toFixed(2)} lv. left. `) }

  else {
    let difference = Math.abs(suma - cenaEkskurziq);

    console.log(`Not enough money! ${difference.toFixed(2)} lv needed.`)
  }
}
petya(["40.8", "20", "25", "30", "50", "10"])