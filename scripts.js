import {app} from "./fb.js"
import {getDatabase,set,get,ref,child,update,remove} from "https://www.gstatic.com/firebasejs/9.17.1/firebase-database.js";

const db=getDatabase();
// console.log(db);
let addbtn=document.getElementById("insert");
let updatebtn=document.getElementById("update");
let readbtn=document.getElementById("read");
let deletebtn=document.getElementById("delete");

let name,rollno,branch,dob;

function readDetails(){
    name=document.getElementById('name');
    rollno=document.getElementById('roll');
    branch=document.getElementById('branch');
    dob=document.getElementById('dob');
}

let add=document.getElementById("addbtn");
let read=document.getElementById("readbtn");
let updt=document.getElementById("updatebtn");
let del=document.getElementById("deletebtn");

function addDetails(){
    readDetails();
    set(ref(db,"students/"+rollno.value),{name:name.value,rollno:rollno.value,Branch:branch.value,DOB:dob.value}).then(()=>{
        alert("values are inserted successfully");
    }).catch((err)=>{
        alert("something went wrong");
    });
}
function updateStudent(){
    readDetails();
    update(ref(db,"students/"+rollno.value),{name:name.value,rollno:rollno.value,Branch:branch.value,DOB:dob.value}).then(()=>{
        alert("Updated succussfully");
    }).catch((err)=>{
        alert("something went wrong");
    });

}
function readStudent(){
    let path="students";
    get(child(ref(db),path)).then((snapshot)=>{
        let display=document.getElementById("displayData");
        
        display.innerHTML+="<tr><th>Name</th><th>RollNo</th><th>Branch</th><th>DateOfBirth</th></tr>"
       snapshot.forEach(element => {
        // console.log(element.val().Name+" "+element.val().RollNo);
        
        display.innerHTML+="<tr><td>"+element.val().name+"</td><td>"+element.val().rollno+"</td><td>"+element.val().Branch+"</td><td>"+element.val().DOB+"</td></tr>";
       });
       
    }).catch((err)=>{console.log(err)});
}

function deleteStudent(){
    readDetails();
    remove(ref(db,"students/"+rollno.value)).then(()=>{
        alert("Deleted Succesfully");
    }).catch((err)=>{
        alert("Something went wrong");
    });
}
addbtn.addEventListener("click",addDetails);
readbtn.addEventListener("click",readStudent);
updatebtn.addEventListener("click",updateStudent);
deletebtn.addEventListener("click",deleteStudent);
