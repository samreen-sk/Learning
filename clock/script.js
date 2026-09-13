const time = document.getElementById("displaytime");
const print = document.getElementById("times");

const getTime = ()=>{
    const now = new Date();
    const curr = now.toLocaleTimeString();
    print.textContent=curr;
};

time.addEventListener("click",getTime);