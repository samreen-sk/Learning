
const students= [];
let EditIndex =-1;

const subBtn = document.getElementById("submitBtn");
const sname = document.getElementById("name");
const sdept = document.getElementById("dept");
const sage = document.getElementById("age");

const list = document.getElementById("studentList");

subBtn.addEventListener("click",
    ()=>{
        sname.value = sname.value.trim();
        sdept.value = sdept.value.trim();
        const age = Number(sage.value);

        if(isNaN(age)|| age<=0 || age>150){
            alert("invalid age, please enter again.");
            return;
        }
        if(sname.value==""){
            alert("invalid name, please enter again.");
            return;
        }
        if(sdept.value==""){
            alert("invalid Department, please enter again.");
            return;
        }

        const obj = {name : sname.value, department : sdept.value, age : age};
        
        if(EditIndex===-1){
            students.push(obj);
            console.log(students);
        }
        else{
            students[EditIndex] = obj;
            EditIndex = -1;
        }
        sname.value="";
        sage.value="";
        sdept.value="";

        display();
});


function display(){
    list.innerHTML="";
    students.forEach((stud,index)=>{
        const container = document.createElement("div");

        const vals = document.createElement("p");

        const Editbutt = document.createElement("button");
        Editbutt.textContent = "Edit";

        const DeleteButt = document.createElement("button");
        DeleteButt.textContent = "Delete";

        Editbutt.addEventListener("click", ()=>{
            EditStudent(index);
        });

        DeleteButt.addEventListener("click",()=>{
            DeleteStudent(index);
        });

        vals.innerHTML = `--------------------<br> Name : ${stud.name} <br> Age : ${stud.age} <br> Department : ${stud.department}<br> --------------------`;
        container.appendChild(vals);
        container.appendChild(Editbutt);
        container.appendChild(DeleteButt);
        list.appendChild(container);
    });
}


function DeleteStudent(index){
    students.splice(index,1);
    display();
};

function EditStudent(index){
    sname.value = students[index].name;
    sage.value = students[index].age;
    sdept.value = students[index].department;

    EditIndex = index;
    subBtn.textContent = "Update";
}