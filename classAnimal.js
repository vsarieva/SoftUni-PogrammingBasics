function animal(input) {
    let animall = input[0];
    switch (animall) {
        case "dog":
            console.log("mammal")
            break;

        case "crocodile":
        case "tortoise":
        case "snake":
            console.log("reptile")
            break;

        default:
            console.log("unknown");




    }


}
animal(["dog"])