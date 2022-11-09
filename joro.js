function joro(input) {
    let obshtoStranici = Number(input[0]);
    let straniciNaDen = Number(input[1]);
    let days = Number(input[2]);
    let totalTime = obshtoStranici / straniciNaDen;
    let final = totalTime / days;

    console.log(final);


}
joro(["212", "20", "2"]);