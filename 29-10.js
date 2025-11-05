var a = 10;
let b = 20;
const c = 30;

console.log(a);
console.log(b);
console.log(c);

a = 100;
b = 200;
// c = 300;

console.log(a);
console.log(b);

{
    var x = "inside block";
    let y = " block";
    console.log(x);
    console.log(y);
}
console.log(x);


function testVar() {
    var funcVar = "inside function";
    console.log(funcVar);
}
testVar();


let str = "Hello";
let num = 42;
let bool = true;
let empty = null;
let notDefined;
let obj = { name: "Vamsi", age: 21 };
let arr = [1, 2, 3, 4];
let sym = Symbol("id");
let big = 12345678901234567890n;

console.log(typeof str);
console.log(typeof num);
console.log(typeof bool);
console.log(typeof empty);
console.log(typeof notDefined);
console.log(typeof obj);
console.log(typeof arr);
console.log(typeof sym);
console.log(typeof big);
