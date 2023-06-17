const inputBox = document.getElementById("input-box");
const listContainer = document.getElementById("list-container");

function addTask(){
    if(inputBox.value === ''){
        alert("You must write Something!!!!");
    }
    else{
        let li= document.createElement("li");
        li.innerHTML = inputBox.value;
        listContainer.appendChild(li);
        let span= document.createElement("span");
        span.innerHTML="\u00d7";
        li.appendChild(span);
        saveData();
    }
    
    inputBox.value=""; // this will make the inputbox empty after entering a value and adding it.
    saveData();
}
listContainer.addEventListener("click", function(e){
    if(e.target.tagName === "LI"){
        e.target.classList.toggle("checked");
        saveData();
    }
    else if(e.target.tagName === "SPAN"){
        e.target.parentElement.remove();
        saveData();
    }

},false);

function saveData(){
    localStorage.setItem("data",listContainer.innerHTML);
}

function showTask()
{
    listContainer.innerHTML = localStorage.getItem("data");
}
showTask();
/*
In JavaScript, document.getElementById("input-box") is a method that searches the HTML document 
for an element with the specified ID and returns that element as an object. This method is part 
of the Document Object Model (DOM) API, which provides a way to interact with the structure and 
content of an HTML document.

*/