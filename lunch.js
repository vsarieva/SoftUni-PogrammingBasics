function lunchBreak(input) {
    let name = (input[0]);
    let episodeDuration = Number(input[1]);
    let breakDuration = Number(input[2]);
    let timeLunch = breakDuration / 8;
    let timeOtdih = breakDuration / 4;
    if ((episodeDuration + timeLunch + timeOtdih) <= breakDuration) {
        let ostanaloVreme = breakDuration - (episodeDuration + timeLunch + timeOtdih);
        console.log(`You have enough time to watch ${name} and left with ${Math.ceil(ostanaloVreme)} minutes free time.`)
    } else {
        let nujnoVreme = (episodeDuration + timeLunch + timeOtdih) - breakDuration;
        console.log(`You don't have enough time to watch ${name}, you need ${Math.ceil(nujnoVreme)} more minutes.`)
    }





}
lunchBreak(["Teen Wolf",
    "48",
    "60"])

