function delenie(input) {
    let start = Number(input[0]);
    let end = Number(input[1]);
    let suma = 0;
    let numbers = "";
    for (let i = start; i <= end; i++) {
        if (i % 9 == 0) {
            suma += i;
        }

    }
    console.log(`The sum: ${suma}`);
    for (let i = start; i <= end; i++) {
        if (i % 9 == 0) {
            console.log(i)
        }
    }

}
delenie(["100", "200"])