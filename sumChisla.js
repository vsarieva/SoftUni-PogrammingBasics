function sum(input){
let word = input[0];
let totalValue = 0
  for( let i = 0; i < word.length; i ++){
  
        let currentDigit = Number(word[i]);
        totalValue += currentDigit
  }

console.log(`The sum of the digits is:${totalValue}`);
}
sum(["1234"])