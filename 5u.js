function salary(input) {
    let openedTabs = Number(input[0]);
    let zaplata = Number(input[1]);
    for (let i = 2; i <= input.length; i++) {
        let currentTab = input[i];
        switch (currentTab) {
            case "Facebook":
                zaplata -= 150;
                break;
            case "Instagram":
                zaplata -= 100;
                break;
            case "Reddit":
                zaplata -= 50;
                break;
        }
        if (zaplata <= 0) {
            console.log("You have lost your salary.");
            break;
        }
    }
    if (zaplata > 0) { console.log(Math.floor(zaplata)) }



}
salary(["10",
    "750",
    "Facebook",
    "Dev.bg",
    "Instagram",
    "Facebook",
    "Reddit",
    "Facebook",
    "Facebook"])