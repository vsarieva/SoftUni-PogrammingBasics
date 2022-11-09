function table(input) {
    let chislo = Number(input[0]);
    for (let i = 1; i <= 10; i++) {
        let result = i * chislo;
        console.log(`${i} * ${chislo} = ${result}`)
    }

}
table(["5"])