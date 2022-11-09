function figura(input) {
    let type = (input[0]);
    let strana = Number(input[1]);

    if (type == "square") {
        let a = Number(input[1]);
        let area = a * a;
        console.log(area);
    } else if (type == "rectangle") {
        let a = Number(input[1]);
        let b = Number(input[2]);
        let area = a * b;
        console.log(area)
    } else if (type == "triangle") {
        let a = Number(input[1]);
        let h = Number(input[2]);
        let area = (a * h) / 2
        console.log(area)
    } else if (type == "circle") {
        let r = Number(input[1]);
        let area = Math.PI * Math.pow(r, 2);
        console.log(area.toFixed(3))
    }

}
figura(["circle", "5"])