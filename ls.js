function Name (input) {
    let text = input[0];
    let count = 0;
    for (let i = 0; i < text.length; i+=1){
        switch (text[i]){
            case "a":
                count = count + 1;
                break;
            case "e":
                count = count + 2;
                break;
            case "i":
                count = count + 3;
                break;
            case "o":
                count = count + 4;
                break;
            case "u": 
                count = count + 5;
                break;
    
        }
    }
    console.log(count);
}
Name(["aabb"])