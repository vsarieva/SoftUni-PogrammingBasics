function Name(input) {
    let age = Number(input[0]);
    let machinePrice = Number(input[1]);
    let singleToyPrice = Number(input[2]);
    let moneyCount = 0;
    let toysCount = 0;
    let totalMoney = 0;
    for (let currentage = 1; currentage <= age; currentage++) {

        if (currentage % 2 == 1) {
            toysCount = toysCount + 1;
        }
        else if (currentage % 2 == 0) {
            moneyCount = moneyCount + 1;
        }
    };
    for (let moneyTimes = 1; moneyTimes <= moneyCount; moneyTimes++) {
        totalMoney = (moneyTimes * 10 + totalMoney);
    }
    totalMoney = totalMoney + toysCount * singleToyPrice - moneyCount * 1;
    if (totalMoney >= machinePrice) {
        console.log(`Yes! ${Math.abs(totalMoney - machinePrice).toFixed(2)}`);
    }
    else { console.log(`No! ${Math.abs(totalMoney - machinePrice).toFixed(2)}`); }

}
Name(["10", "170.00", "6"])