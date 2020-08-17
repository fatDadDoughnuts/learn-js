function add(end) {
    var sumRange = 0;
    for (var i = 1; i <= end; i++) {
        sumRange += i;
    }
    return sumRange;
}

add(10)




// for (let i = 0; i <10; i++){
//     console.log(i);
// }

// function outputN(num){
//     for(let i = 0; i < num; i++){
//         console.log(i)
//     }
// }

// outputN(10)

// function repeat(num, action){
//     for(let i = 0; i < num; i++){
//         action(i)
//     }
// }

// let labels = [];
// repeat(5, i => {
//     labels.push(`Unit ${i+1}`);
// });
// console.log(labels)

function greaterThan(n){
    return m => m > n;
}

let greaterThan10 = greaterThan(50);
console.log(greaterThan10(51))



