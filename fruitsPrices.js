function plodove(input) {
    let plod = input[0];
    let den = input[1];
    let kolichestvo = Number(input[2]);
    let cena = 0;
    if (den == "Monday" || den == "Tuesday" || den == "Wednesday" || den == "Thursday" || den == "Friday") {
        if (plod == "banana") { cena = kolichestvo * 2.50 }
        else if (plod == "apple") { cena = kolichestvo * 1.20 }
        else if (plod == "orange") { cena = kolichestvo * 0.85 }
        else if (plod == "grapefruit") { cena = kolichestvo * 1.45 }
        else if (plod == "kiwi") { cena = kolichestvo * 2.70 }
        else if (plod == "pineapple") { cena = kolichestvo * 5.50 }
        else if (plod == "grapes") { cena = kolichestvo * 3.85 }; console.log(cena.toFixed(2))
    } else if (den == "Saturday" || "Sunday") {
        if (plod == "banana") { cena = kolichestvo * 2.70 }
        else if (plod == "apple") { cena = kolichestvo * 1.25 }
        else if (plod == "orange") { cena = kolichestvo * 0.90 }
        else if (plod == "grapefruit") { cena = kolichestvo * 1.60 }
        else if (plod == "kiwi") { cena = kolichestvo * 3 }
        else if (plod == "pineapple") { cena = kolichestvo * 5.60 }
        else if (plod == "grapes") { cena = kolichestvo * 4.20 };
        console.log(cena.toFixed(2))
    } else { console.log("Error") }

}
plodove(["tomato",
    "Saturday",
    "0.5"])





