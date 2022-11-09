function sumSeconds(input) {
  let firstTime = Number(input[0]);
  let secondTime = Number(input[1]);
  let thirdTime = Number(input[2]);
  let timeTotalsec = firstTime + secondTime + thirdTime;
  let timeMinutes = Math.floor(timeTotalsec / 60);
  let timeInSeconds = timeTotalsec % 60;
  if (timeInSeconds < 10) {
    console.log(`${timeMinutes}:0${timeInSeconds}`);
  } else {
    console.log(`${timeMinutes}:${timeInSeconds}`)
  }
}
sumSeconds(["50", "50", "49"])