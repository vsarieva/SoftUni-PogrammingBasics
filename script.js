function firststeps(input) {
    let depoziranaSuma = Number(input[0]);
    let depositPeriod = Number(input[1]);
    let annualInterestRate = Number(input[2]);
    let sum = depoziranaSuma + depositPeriod * ((depoziranaSuma * annualInterestRate / 100) / 12);
    console.log(sum);
}
firststeps(["200", "3", "5.7"]);