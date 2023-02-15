//Async
function sample(){
    console.log("Sample function");
    return "cvrce";
}
document.write("<h2>This is normal function</h2>")
document.write(sample()+"<br>");
document.write("after sample");
document.write("<h2>This is async function</h2>");
async function sample(){
    console.log("Sample function");
    return "cvrce";
}
document.write(sample()+"<br>");
document.write("after sample <br>");
sample().then(res => document.write(res));

//Await
async function sam1(){
    console.log("sample1");
    await console.log("sample 2")
    console.log("sample 3")
    console.log("sample 4")
    console.log("sample 5")
    return "Cvrce";
}
sam1();
console.log("awaiting");

let arr = [1,2,3,4,5];
let si = arr[Symbol.iterator]();
console.log(si.next())
si.next();
console.log(si.next());
