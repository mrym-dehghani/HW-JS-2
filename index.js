const leftHand = +prompt("left hand number");
const operator = prompt("operator");
const rightHand = +prompt("right hand number");
let result = 0;

switch (operator) {
    case "+":
        result = leftHand + rightHand
        break;
        case "-":
        result = leftHand - rightHand
        break;
        case "*":
        result = leftHand * rightHand
        break;
        case "/":
        result = leftHand / rightHand
        break;
    default:
        result = 000
        break;
}

console.log(leftHand)
console.log(operator)
console.log(rightHand)
console.log(result)

let maryamCurrentAge = null;
const birthDay = prompt ("please enter your year of birth");
userCurrentAge = 2022 - birthDay;
console.log(userCurrentAge)

if ( userCurrentAge < 18) {
    console.log("you cannot use this site")
}
else if (userCurrentAge<21){
    console.log("you can use this site")
}
else {
    console.log("you cannot use this site")
}

ageFuture = userCurrentAge + 56
console.log(ageFuture)



