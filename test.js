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
var age = 25
var firstName = 'Taylor'

if (age > 18 ? console.log(firstName + ' drinks beer.' ) : console.log(firstName + ' drinks juice.'));

/*use the ternary operator to define variables*/
var drink = age >= 18 ? 'beer' : 'juice';
console.log(drink)