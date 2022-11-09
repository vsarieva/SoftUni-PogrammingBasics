function fifteen(input) {
    let h = Number(input[0]);
    let m = Number(input[1]);
    let time = h * 60 + m + 15;
    let timeH = Math.floor(time / 60);
    let timeM = time % 60;
    if (timeH > 23) { timeH = 0 }
    if (timeM < 10) {
        console.log(`${timeH}:0${timeM}`)
    } else {
        console.log(`${timeH}:%{timeM}`)
    }





}
fifteen(["0", "48"])