function hotelRoom(input) {
    let month = input[0];
    let stays = Number(input[1]);

    if (month == "May" || month == "October") {
        studio = 50 * stays; apartment = 65 * stays
    }
    else if (month == "June" || month == "September") {
        studio = 75.20 * stays; apartment = 68.70 * stays
    }
    else if (month == "July" || month == "August") {
        studio = 76 * stays; apartment = 77 * stays
    }


    if ((month == "May" || month == "October") && stays > 14) {
        studio = (50 * stays) * 0.7; apartment = 65 * stays
    }
    else if ((month == "May" || month == "October") && stays > 7) {
        studio = (75.20 * stays) * 0.95; apartment = 68.70 * stays
    }
    else if ((month == "July" || month == "September") && stays > 14) {
        studio = (76 * stays) * 0.80; apartment = 77 * stays
    }
    if (stays > 14) {
        apartment = apartment * 0.9
    }
    console.log(`Apartment: ${apartment.toFixed(2)} lv.`);
    console.log(`Studio: ${studio.toFixed(2)} lv.`);



}
hotelRoom(["May",
    "15"])


