function kino(input) {
    let dayOfWeek = input[0];
    let bilet = 0;
    if (dayOfWeek == "Monday" || dayOfWeek == "Tuesday" || dayOfWeek == "Friday") {
        bilet = 12;

    } else if (dayOfWeek == "Wednesday" || dayOfWeek == "Thursday") {
        bilet = 14;
    }
    else if (dayOfWeek == "Saturday" || dayOfWeek == "Sunday") {
        bilet = 16
    }

    console.log(bilet);

}
kino(["Monday"])