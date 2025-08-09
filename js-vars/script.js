var a = 6;
var b = 66;
var c = 24;
console.log(a, b, c);

let x = 3;
var f = 33;
{
    let x = 5;
    console.log(x);
    // let isn't defined globally, it is block defind, whereas var is declared globally
    var f = 44;
    console.log(f);
}

console.log(x);
console.log(f);

let isnull = null;
console.log(typeof isnull); //null is an object

//creating an object
let o = {
    name : "faiza",
    "roll no" : 50,
}

console.log(o)
o.last = "afif";
console.log(o);
