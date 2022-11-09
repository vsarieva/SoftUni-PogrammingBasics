function procentiChisla(input) {
  let numbersCount = Number(input[0]);
  let p1 = 0;
  let p2 = 0;
  let p3 = 0;
  let p4 = 0;
  let p5 = 0;

  for (let index = 1; index <= numbersCount; index++) {
    let currentNumber = Number(input[index]);

    if (currentNumber < 200) {
      p1++;
    } else if (currentNumber > 199 && currentNumber < 400) {
      p2++;
    } else if (currentNumber > 399 && currentNumber < 600) {
      p3++;
    } else if (currentNumber > 599 && currentNumber < 800) {
      p4++;
    } else if (currentNumber > 799) {
      p5++;
    }
  }
  console.log(`${(p1 / numbersCount * 100).toFixed(2)}%`);
  console.log(`${(p2 / numbersCount * 100).toFixed(2)}%`);
  console.log(`${(p3 / numbersCount * 100).toFixed(2)}%`);
  console.log(`${(p4 / numbersCount * 100).toFixed(2)}%`);
  console.log(`${(p5 / numbersCount * 100).toFixed(2)}%`);



}
procentiChisla(["3", "1", "2", "999"])