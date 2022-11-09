function lilly(input) {
    let age = Number(input[0]);
    let washingMachinePrice = Number(input[1]);
    let oneToyPrice = Number(input[2]);
    let parii = 0;
    for (let i = 1; i <= age; i++) {
        if (age % 2 == 0) {
            i++;
            parii = i * oneToyPrice;
        }

    }
    for (let pari = 10; pari <= age / 2 + 1; pari += 10) {
        if (age % 2 == 1) {
            pari += 9;
            let subranaSuma = pari + parii;
            if (subranaSuma > washingMachinePrice) {
                let ostatuk = subranaSuma - washingMachinePrice;
                console.log(`Yes! ${ostatuk.toFixed(2)}`)
            } else {
                let nedostig = washingMachinePrice - subranaSuma;
                console.log(`No! ${nedostig.toFixed(2)}`)
            }
        }
    }
}
lilly(["10", "170.00", "6"])