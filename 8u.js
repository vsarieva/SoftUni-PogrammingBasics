function grisho(input) {
    let tournaments = Number(input[0]);
    let startingPoints = Number(input[1]);
    let wins = 0;
    let points = startingPoints;
    for (let index = 2; index < input.length; index++) {
        let stage = input[index];
        switch (stage) {
            case "W": points += 2000;
                wins++; break;
            case "F": points += 1200;
                break;
            case "SF": points += 720;
                break;
        }

    }
    let avgpoints = (points - startingPoints) / tournaments;
    console.log(`Final points: ${points}`);
    console.log(`Average points: ${Math.floor(avgpoints)}`);
    let percent = (wins / tournaments) * 100;
    console.log(`${percent.toFixed(2)}%`);

}
grisho(["5",

    "1400",

    "F",

    "SF",

    "W",

    "W",

    "SF"])