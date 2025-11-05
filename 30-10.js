var a = 10;
let b = 20;
const c = 30;
console.log(a, b, c);
// 10 20 30
var x = 5;
var x = 10;
console.log(x); 
// 10
let y = 5;
y = 10;
console.log(y);
// 10
const z = 5; //
// z = 10;
console.log(z);
// assignment to constant variable
{
  var a1 = 1;
  let b1 = 2;
  const c1 = 3;
}
console.log(a1); 
// console.log(b1); 
// console.log(c1);

// not defined 

for (var i = 0; i < 3; i++) {}
console.log(i);//3


for (let j = 0; j < 3; j++) {}
// console.log(j);//not defined

console.log(a);
var a = 10;//10

// console.log(e);
// let e = 10 reference error

const person = { name: "Noor" };
person.name = "Jahan";
console.log(person.name);

console.log(5 + "5"); //55
console.log("5" - 2);  //  3
console.log(5 == "5");//true
console.log(5 === "5"); // false
console.log(null == undefined);//true
console.log(null === undefined);//true
console.log(true && false);//false
console.log(true || false);//true
console.log(5 > 3 ? "Yes" : "No");//yes
let f = null ?? "Default";
console.log(f); //Default
let g = 0 ?? 5;
console.log(g);//0
let h = 5;
let j=undefined ?? "default";
console.log(j) //default
h += 3;
console.log(h); //8
console.log(5 & 3);   //1  
console.log(5 | 3);//7
