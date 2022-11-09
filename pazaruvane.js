function pazaruvane(input) {
  let byudjet = Number(input[0]);
  let videoKarti = Number(input[1]);
  let procesori = Number(input[2]);
  let ramPamet = Number(input[3]);
  let videoKartiCena = videoKarti * 250;
  let procesorCena = (0.35 * videoKartiCena) * procesori;
  let ramPametCena = (0.1 * videoKartiCena) * ramPamet
  let nujniPari = videoKartiCena + procesorCena + ramPametCena;
  if (videoKarti > procesori) { nujniPari = nujniPari * 0.85 }
  if (byudjet <= nujniPari) {
    let ostatuk = Math.abs(byudjet - nujniPari)
    console.log(` Not enough money! You need ${ostatuk.toFixed(2)} leva more!`)
  } else {
    let nujni = Math.abs(byudjet - nujniPari)
    console.log(`You have ${nujni.toFixed(2)} leva left!`)
  }

}
pazaruvane(["920.45",
  "3",
  "1",
  "1"])
