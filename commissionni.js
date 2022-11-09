function komisionni(input) {
    let grad = input[0];
    let prodajbi = Number(input[1]);
    let komisionna = 0;
    if (grad == "Sofia") {
        if (0 <= prodajbi && prodajbi <= 500) { komisionna = 0.05 }
        else if (500 < prodajbi && prodajbi <= 1000) { komisionna = 0.07 }
        else if (1000 < prodajbi && prodajbi <= 10000) { komisionna = 0.08 }
        else if (prodajbi > 10000) { komisionna = 0.12 } console.log((komisionna * prodajbi).toFixed(2))
    }
    else if (grad == "Varna") {
        if (0 <= prodajbi && prodajbi <= 500) { komisionna = 0.045 }
        else if (500 < prodajbi && prodajbi <= 1000) { komisionna = 0.075 }
        else if (1000 < prodajbi && prodajbi <= 10000) { komisionna = 0.1 }
        else if (prodajbi > 10000) { komisionna = 0.13 } console.log((komisionna * prodajbi).toFixed(2))
    }
    else if (grad == "Plovdiv") {
        if (0 <= prodajbi && prodajbi <= 500) { komisionna = 0.055; console.log((komisionna * prodajbi).toFixed(2)) }
        else if (500 < prodajbi && prodajbi <= 1000) { komisionna = 0.08; console.log((komisionna * prodajbi).toFixed(2)) }
        else if (1000 < prodajbi && prodajbi <= 10000) { komisionna = 0.12; console.log((komisionna * prodajbi).toFixed(2)) }
        else if (prodajbi > 10000) { komisionna = 0.145; console.log((komisionna * prodajbi).toFixed(2)) }
        else { console.log("error") }
    }
    else { console.log("error") };



}
komisionni(["Kaspichan",
    "-1010100"])
