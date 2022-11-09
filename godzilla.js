function filmKong(input) {
    let byudjet = Number(input[0]);
    let statisti = Number(input[1]);
    let cenaOblekloStatist = Number(input[2]);
    let dekor = 0.1 * byudjet;
    if (statisti > 150) { cenaOblekloStatist = cenaOblekloStatist * 0.9 };
    if (dekor + cenaOblekloStatist > byudjet) {
        let nedostig = dekor + cenaOblekloStatist - byudjet
        console.log("Not enough money!");
        console.log(`Wingard needs ${nedostig.toFixed(2)} leva more.`)
    } else if (dekor + cenaOblekloStatist <= byudjet) {
        console.log("Action!"); let ostatuk = byudjet - dekor - cenaOblekloStatist;
        console.log(`Wingard starts filming with ${ostatuk.toFixed(2)} leva left.`)
    }


}
filmKong(["15437.62",
    "186",
    "57.99"])



