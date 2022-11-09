function zadacha(input) {
    let lessonHour = Number(input[0]);
    let lessonMinute = Number(input[1]);
    let arrivingHour = Number(input[2]);
    let arrivingMinute = Number(input[3]);
    let starting = lessonHour * 60 + lessonMinute;
    let arriving = arrivingHour * 60 + arrivingMinute;
    let razlikaPodranqvane = starting - arriving;
    let razlikaZakusnenie = arriving - starting;
    let when = 0;
    if (arriving > starting) {
        console.log("Late");
        when = "Late";
    }
    else if (starting == arriving || ((razlikaPodranqvane <= 30) && (razlikaPodranqvane >= 0))) {
        console.log("On time");
        when = "On time";
    }
    else if (razlikaPodranqvane > 30) {
        console.log("Early");
        when = "Early";
    };
    if (starting != arriving) {
        switch (when) {
            case "Early":
                if (razlikaPodranqvane < 60 && razlikaPodranqvane > 0) {
                    console.log(`${razlikaPodranqvane} minutes before the start`);
                }
                else if (razlikaPodranqvane >= 60) {
                    if (razlikaPodranqvane % 10 < 10) {
                        let hour = Math.floor(razlikaPodranqvane / 60);
                        let minutes = razlikaPodranqvane % 60;
                        console.log(`${hour}:${minutes} hours before the start`);
                    }
                    else {
                        let hour = Math.floor(razlikaPodranqvane / 60);
                        let minutes = razlikaPodranqvane % 60;
                        console.log(`${hour}:0${minutes} hours before the start`);
                    }
                } break;
            case "Late":
                if (razlikaZakusnenie < 60 && razlikaZakusnenie > 0) {
                    console.log(`${razlikaZakusnenie} minutes after the start`);
                }
                else if (razlikaZakusnenie >= 60) {
                    if (razlikaZakusnenie % 10 < 10) {
                        let hour = Math.floor(razlikaZakusnenie / 60);
                        let minutes = razlikaZakusnenie % 60;
                        console.log(`${hour}:${minutes} hours after the start`);
                    }
                    else {
                        let hour = Math.floor(razlikaZakusnenie / 60);
                        let minutes = razlikaZakusnenie % 60;
                        console.log(`${hour}:0${minutes} hours after the start`);
                    }
                } break;

                        case "On time":
                            if (starting == arriving) {
                                
                            }
                            else { console.log(`${Math.abs(razlikaPodranqvane)} minutes before the start`); }
                            break;
            }}

        }
        zadacha(["11",
        "30",
        "8", "12"
        ])
        
        
        
        
