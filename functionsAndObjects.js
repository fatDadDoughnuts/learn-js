function square(x){return x*x;}

/* is the same as */ 
var square = function(x) {return x*x;}

/* the second instance is a function literal, or a lambda function.*/


/*Objects*/

/*Objects can have properties*/
image
image.width 
image.height
/* image is the object, and width and height are the properties*/

/*Objects are created by invoking special constructor functions.
The following all create new onjects.*/
var o = new Object();
var now = new Date();
var pattern = new RegExp("\\sjava\\s", "i");
 /*Once you have created an object, you can set itsproperties and 
 use them however you want */
 
 var point = new Object();
 point.x = 2.3
 point.y = -1.2

 /*Object Literals*/
 var point = {x:2.3, y:-1.2};

 /*Nested Object Literals*/
 var rectangle = {lowerLeft: {x:2, y:2},
                UpperRight: {x:4, y:4}
            };

/*In JS objects are dictionaries that need to be initialized by a constructor?
Objects-- each data value contained has a name, 
Arrays-- each data value contained has an index

Arrays can be created with the Array constructor function Once created, any number of 
indexed elements can easily be assigned to the array.*/

var a = new Array();
a[0] = ""
a[1] = ""
/* or an array literal */

var a = [1.2, "JavaScript", true, {x:1, y:3}]

