// let day1 = {
// squirrel : false,
// events: ["work", "touched tree", "pizza", "running"]
// };

// console.log(day1);

// let journal = [];

// function addEntry(events, squirrel){
//     journal.push({events,squirrel});
// }

// addEntry(["work", "touched tree", "pizza", "running",
//           "television"], false);
// addEntry(["work", "ice cream", "cauliflower", "lasagna",
//           "touched tree", "brushed teeth"], false);
// addEntry(["weekend", "cycling", "break", "peanuts",
//           "beer"], true);



// // for(let i = 0; i < journal.length; i++){
// //     console.log(journal[i])
// // }

// for(let entry of journal){
//     console.log(`${entry.events.length} events`)
// }

// //shift and unshift
// //shift gets the first item on a list, and unshift removes the first item from a list. 
// let todoList = [];
// function remember(task){
//     todoList.push(task)
// }

// function getTask(){
//     return todoList.shift();
// }

// function rememberUrgently(task){
//     todoList.unshift(task);
// }


// remember("groceries")
// todoList //?

// remember("CA prep")
// todoList

// rememberUrgently("build stuff")
// todoList

// testArray = [0, 1, 2, 3, 4]
// testArray.slice(2,4) //?
// testArray.slice() //?
// testArray.slice(2)//?

// word = "LA"
// newWord = word.repeat(3);
// newWord //?

function max(...numbers) {
    let result = -Infinity

    for(n of numbers){
        if (n > result){
            result = n
        } 
    }
    return result;
}

console.log(max(0,-2, 7,1, 17, 5))