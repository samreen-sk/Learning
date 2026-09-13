console.log("script.js loaded!");

const tasks =[];

const value = document.getElementById("taskInput");
const level = document.getElementById("priority");
const but = document.getElementById("addButton");

const pendingDiv = document.getElementById("pendingId");
const completedDiv = document.getElementById("completedId");

const totaltask = document.getElementById("totalTask");
const pendingtask = document.getElementById("pendingTask");
const completedtask = document.getElementById("completedTask");

function renderTask(){

    pendingDiv.innerHTML="";
    completedDiv.innerHTML="";
    tasks.forEach((task,index)=>{  

        const taskContainer =document.createElement("div");

        const newTask = document.createElement("p");
        newTask.textContent = task.title +" ("+task.priority+") ";

        const deleteBut = document.createElement("button");
        const completedBut = document.createElement("button");

        completedBut.textContent="completed";
        deleteBut.textContent = "delete";

        deleteBut.addEventListener("click",function(){
            tasks.splice(index,1);
            renderTask();
        });

        completedBut.addEventListener("click",function(){
            task.completed=true;
            console.log(task);
            renderTask();
        })

        taskContainer.appendChild(newTask);

        if(task.completed){
            taskContainer.appendChild(deleteBut);
            completedDiv.appendChild(taskContainer)
        }

        else{
            taskContainer.appendChild(deleteBut);
            taskContainer.appendChild(completedBut);
            pendingDiv.appendChild(taskContainer);
        }
        
        updateCounts();

    });
    
}

but.addEventListener("click",function(){

    const taskObject = {
        title : value.value,
        priority : level.value,
        completed : false
    };

    tasks.push(taskObject);
    console.log(taskObject);
    renderTask();
    value.value="";

});


function updateCounts(){
    const total = tasks.length;
    let pending = 0;

    tasks.forEach((task)=>{
        if(!task.completed){
            pending++;
        }
    });
    
    let completed = 0;

    tasks.forEach((task)=>{
        if(task.completed){
            completed++;
        }
    });

    totaltask.textContent = total;

    pendingtask.textContent = pending;

    completedtask.textContent = completed;

}