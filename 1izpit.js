function processors(input){
let processorsCountToBeMade = Number(input[0]);
let employeesCount = Number(input[1]);
let workDays = Number(input[2]);
  let hoursSum = workDays*8*employeesCount;
  let madeProcessors = Math.floor(hoursSum / 3);
  let loses = 0;
  let profit = 0;
    if (madeProcessors < processorsCountToBeMade){
        loses = (processorsCountToBeMade - madeProcessors) * 110.10;
        console.log(`Losses: -> ${loses.toFixed(2)} BGN`)
    }
    else if (madeProcessors > processorsCountToBeMade) {
        profit = (madeProcessors - processorsCountToBeMade)*110.10;
        console.log(`Profit: -> ${profit.toFixed(2)} BGN`);
    }



}
processors(["150", "7", "18"])
