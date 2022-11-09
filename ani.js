function ani(input) {
    let himikali = Number(input[0]);
    let markeri = Number(input[1]);
    let litersPreparat = Number(input[2]);
    let discountPercent = Number(input[3]);
    let cenahimikali = himikali * 5.80;
    let cenamarkeri = markeri * 7.20;
    let cenapreparat = litersPreparat * 1.20;
    let obshtaCena = cenahimikali + cenamarkeri + cenapreparat;
    let final = obshtaCena - (obshtaCena * 0.25);
    console.log(final);

}
ani(["2", "3", "4", "25"]);