// recursive exponential function

// function power(base, exponent){
//     if (exponent == 0){
//         return 1;
//      }
//     else{
//         return base * power(base, exponent - 1 )
//     }
// }

// console.log(power(2, 1))

function findSolution(target) {
    function find(current, history) {
        if (current == target) {
            return history;
        }else if(current > target){
            return null;
        }
        else{
            return find(current + 5, `(${history} + 5)`) ||
                    find(current * 3, `(${history} *3)`) ||
                    find(current * 5, `(${history} * 5)`);
        }
    }
    return find(1, "1");
}

console.log(findSolution(27))

function printZeroPaddedWithLabel(number, label) {
    let numberString = String(number);
    while (numberString.length < 3) {
      numberString = "0" + numberString;
    }
    console.log(`${numberString} ${label}`);
  }
  
  function printFarmInventory(cows, chickens, pigs) {
    printZeroPaddedWithLabel(cows, "Cows");
    printZeroPaddedWithLabel(chickens, "Chickens");
    printZeroPaddedWithLabel(pigs, "Pigs");
  }
  
  printFarmInventory(7, 11, 3);