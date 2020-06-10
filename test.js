/* If statements are in parentheses
var firstName = 'Taylor';
var age = 31;

if (age < 31 ) {
    console.log(firstName + ' is a boy.')
} else {
    console.log(firstName + ' is a man.')
}
*/


/* switch and case structure. switch initiates off of a variabe
case 'hard codes the variable possibilites, then does something. Break after 
each case statement. Finish with a default*/
/*
var job = 'instructor';
switch(job){
    case 'teacher':
    case 'instructor':
        console.log("I am a " + job );
        break;
    case 'driver':
        console.log("I am a " + job );
    default:
        console.log("I don't do anything in the list.");

}
*/

/*basic ternary operator*/
// var age = 25
// var firstName = 'Taylor'

// if (age > 18 ? console.log(firstName + ' drinks beer.' ) : console.log(firstName + ' drinks juice.'));

// /*use the ternary operator to define variables*/
// var drink = age >= 18 ? 'beer' : 'juice';
// console.log(drink)

// var total = 0
// for(var i = 1; i <= 10; i++){
//     total = total + i
//     console.log(i, total)
// }

// function factorial(n){
//     if(n == 0){
//         return 1 
//     }else{
//         return(factorial(n - 1) * n)
//     }
// }

// console.log(factorial(8))

// function factorialFor(n){
//     if(n == 0 || n == 1 ){
//         return 1
//     }
//     for(var i = n - 1; i >= 1;  i--){
//         n = n * i
//     }
//     return n;
// }

// // console.log(factorialFor(5))
// let yourName = ""
// // do{
// //     yourName = prompt("Type your name")
// // } while(!yourName);
// // console.log(yourName)

// console.log(!yourName)

// for(let line = '#'; line.length < 8; line+='#'){
//     console.log(line)
// }

// for(let i = 1; i <= 100; i++){
//     if( i % 3 == 0 && i % 5 == 0){
//         console.log("FizzBuzz");
//     }else if(i % 5 == 0){
//         console.log("Buzz");
//     }else if( i % 3 == 0){
//         console.log("Fizz")
//     }else{
//         console.log(i)
//     }
// }
// for (let n = 1; n <= 100; n++) {
//     let output = "";
//     if (n % 3 == 0) output += "Fizz";
//     if (n % 5 == 0) output += "Buzz";
//     console.log(output || n);
//   }
// function power1(base, exponent){
//     let result = 1;
//     for(let count = 0; count < exponent; count++){
//         result *= base;
//     }
//     return result
// };
// console.log("power1", power1(2,5))

// const power2 = function(base, exponent){
//     let result = 1;
//     for(let count = 0; count < exponent; count++){
//         result *= base;
//     }
//     return result
// };
// console.log("power2",power2(2,6))

// //ARROW FUNCTIONS//
// const power3 = (base, exponent) => {
//     let result = 1;
//     for(let count = 0; count < exponent; count ++){
//         result *=base;
//     }
//     return result;
// };
// console.log("power3", power3(2,7))

// //these two functions are the same//
// const square1 = (x) => {return x * x};
// console.log("square1:", square1(97))

// const square2 = (x) => x * x;
// console.log("square2:", square2(17))

function multiplier(factor){
    console.log('factor:', factor)
    return  number => number * factor
}
let twice = multiplier(2)
console.log('twice:', twice)
console.log(twice(5))