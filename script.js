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

//rest operator
function sum(name,...args){
    let res=0;
    for(let i in args)
        res += args[i];
    return name,res;

}
console.log(sum("cvr",12,13,14,15));

//` operator printing
let name="cvr";
let age=20;
let obj = {
    name,
    age,
    display(){
        return `Name: $(this.name)
        and
        Age: $(this.age)`
    }
}

console.log(obj.display());


//setTimeout function
let obj1 = {
    name,
    age,
    display(){
        console.log(this)
        setTimeout(function(){
            console.log("Inside timeout function",this)
        },2000);    
    }
}

//the above way is asynchronous so the second this refers to window object 
//the solution is to use bind method shown as follows
let obj2 = {
    name:surya,
    age,
    display(){
        console.log(this)
        setTimeout(function(){
            console.log("Inside timeout function",this)
        },bind(this),2000);    
    }
}

//or we can use a arrow function instead of using the bind as follows

let obj3 = {
    name:object3,
    age,
    display(){
        console.log(this)
        setTimeout(()=>{
            console.log("Inside timeout function",this)
        },bind(this),2000);    
    }
}
