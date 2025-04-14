// 01.let
// let Abc ="Hello world"; IT is casesansetive
let abc = "Hello world <br>";
let def = "Hello everyone <br>";
let ghi = "Hello friend <br>";
let jkl = "Hello awais <br>";
//1. Write in document
document.write(abc);
document.write(def);
document.write(ghi);
document.write(jkl);
// Type with words e.g.
//01.write in document
// document.write(Hello world);

//2. Write in consol
// let Abc = "Hello worlds <br>";
// console.log(Abc);

// 3.Write in alert
// let Abc = "Hello worlds <br>";
// alert(Abc);

// 4.Write in typeof
let Abc = "Hello worlds <br>";
document.write(typeof (Abc));

// 5.over-write
let xyz = "Hello over-write <br>";
xyz = "Hello overridee <br>";
document.write(xyz);

// 6.let block
{
    let x = "let in a block";
    console.log(x)
}
//7.bigint
let x = BigInt(12345678908765432);
x = true;
x = null;
x = ["string", "second", 134543, true];
x = {
    name: "Awais",
    age: "20",
    awais: ["Web developer", "null", true],
}
document.write(x);







// 02.Var ////////////////////
var a = "this is var <br>"
a = "this is varr <br>"
document.write(a);

// var in block
{
    var y = "var in a block";
    // console.log(y) work in block
}
console.log(y)




// 03.const//////////////////
const b = "this is const";
// b="this is const";
document.write(b);


