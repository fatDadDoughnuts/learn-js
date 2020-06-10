// var n = 1
// var m = n

// function add_to_total(total,x){
//  return  total = total + x;
// }

// result = add_to_total(n,m)
// console.log('result:', result)

// var s1 = "hello"
// var s2 = "hell"+"o"

// if (s1==s2){
//     console.log("true")
// }else{
//     console.log("false")    
// }

// for(var i = 0; i < 10; i++){
//     console.log('i:', i)
// }

// for(var i = 0, j = 10; i < 10, j > 0; i++, j--){
//     console.log('i*j', i*j)
// }

// var a = [1,2,3,]
// console.log('a:', a)
// var b = a
// console.log('b:', b)
// b[0]= 99
// console.log('a:', a)
// console.log('b:', b)
var global = "globalVariable"

function localScope(){
    var global = "localScope";
    console.log(global)
}

localScope()
console.log(global)
