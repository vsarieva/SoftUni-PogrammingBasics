function hotelRoom(input) {
    let mesec = input[0];
    let noshtuvki = Number(input[1]);
    let cenastudio = 0;
    let cenaapartment = 0;
    let type = 0;
    if (mesec == "May" || mesec == "October") {
        type = "mayoct";
        cenastudio = 50;
        cenaapartment = 65;
    }
    else if (mesec == "June" || mesec == "September") {
        cenastudio = 75.2;
        cenaapartment = 68.7;
        type = "junesept";
    }
    else if (mesec == "July" || mesec == "August") {
        cenastudio = 76;
        cenaapartment = 77;
        type = "julyaug";
    };
    switch (type) {
        case "mayoct":
            if (noshtuvki > 7 && noshtuvki <= 14) {
                cenastudio = cenastudio * noshtuvki * 95 / 100;
                cenaapartment = cenaapartment * noshtuvki;
            }
            else if (noshtuvki > 14) {
                cenastudio = cenastudio * noshtuvki * 70 / 100;
                cenaapartment = cenaapartment * noshtuvki * 90 / 100;
            }
            else {
                cenaapartment = cenaapartment * noshtuvki;
                cenastudio = cenastudio * noshtuvki;
            }
            break;
        case "junesept":
            if (noshtuvki > 14) {
                cenastudio = cenastudio * noshtuvki * 80 / 100;
                cenaapartment = cenaapartment * noshtuvki * 90 / 100;
            }
            else {
                cenaapartment = cenaapartment * noshtuvki;
                cenastudio = cenastudio * noshtuvki;
            }
            break;
        case "julyaug":
            if (noshtuvki > 14) {
                cenastudio = cenastudio * noshtuvki;
                cenaapartment = cenaapartment * noshtuvki * 90 / 100;
            }
            else {
                cenaapartment = cenaapartment * noshtuvki;
                cenastudio = cenastudio * noshtuvki;
            }
            break;
    };
    console.log(`Apartment: ${(cenaapartment).toFixed(2)} lv.`);
    console.log(`Studio: ${(cenastudio).toFixed(2)} lv.`);
}
hotelRoom(["June", "14"]);