function Bansko(input) {
    let days = Number(input[0]);
    let staysNosht = days - 1;
    let pomeshtenie = input[1];
    let ocenka = input[2];
    let noshtuvki = 0;
    switch (pomeshtenie) {
        case "room for one person":
            noshtuvki = 18 * staysNosht;
            break;
        case "apartment":
            if (days < 10) {
                noshtuvki = (25 * staysNosht) * 0.7
            } else if (days > 10 && days < 15) {
                noshtuvki = (25 * staysNosht) * 0.65
            } else if (days > 15) {
                noshtuvki = (25 * staysNosht) * 0.5
            }
            break;

        case "president apartment":
            if (days < 10) {
                noshtuvki = (35 * staysNosht) * 0.9
            } else if (days > 10 && days < 15) {
                noshtuvki = (35 * staysNosht) * 0.85
            } else if (days > 15) {
                noshtuvki = (35 * staysNosht) * 0.8
            }
            break;
    }
    if (ocenka == "positive") { noshtuvki = noshtuvki * 1.25 }
    else { noshtuvki = noshtuvki * 0.9 }

    console.log(noshtuvki.toFixed(2));

}
Bansko(["12",
"room for one person",
"positive"])



