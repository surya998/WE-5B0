//arguments object 
function sum(a,b){
    console.log(arguments);
    let res=0;
    for(let i in arguments)
        res += arguments[i];
    return res;

}

console.log(sum(10,20,30,40,50));
//spread operator
a=[10,20,30,40,50]
console.log(a);
console.log(...a)

