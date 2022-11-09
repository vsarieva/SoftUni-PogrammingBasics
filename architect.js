function archit(input) {
    let name = input[0];
    let numberProjects = Number(input[1]);
    let hours = numberProjects * 3;
    console.log(`The architect ${name} will need ${hours} hours to complete 4 projects`);
}
archit(["Niki", "4"]);