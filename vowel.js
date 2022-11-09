function printValueOfVowel(input) {
    let word = input[0];
    let totalValue = 0;
    for (let i = 0; i < word.length; i+= 1) {
        
       switch(word[i]) {
        case "a":
            totalValue = totalValue + 1;
            break;
        case 'e':
            totalValue = totalValue + 2;
            break;
        case 'i':
            totalValue = totalValue + 3;
            break;
        case 'o':
            totalValue = totalValue + 4;
            break;
        case 'u':
            totalValue = totalValue + 5;
            break;

             
    }}  console.log(totalValue);
}
printValueOfVowel(["hell"]);