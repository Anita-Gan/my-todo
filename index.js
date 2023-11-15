//let mon_tittre= document.getElementById("title");

//MODIFIER UN ELEMENTS HTML

/*mon_tittre.innerHTML="anita"

console.log(mon_tittre);

title.addEventListener("click", () =>{
    let mon_titre2="ganene"
    if (mon_tittre==mon_tittre2) {
        alert(Ganene)
   }else{
    alert(anita)
   }
});*/

let tabs=[];

//list task

let input= document.querySelector("input");
let task_button= document.querySelector("button");
let todo_List=document.querySelector(".todo-List");
task_button.addEventListener("click", (e)=>{
   e.preventDefault();
taskList()
})

 function taskList(e) {
    
    
    let task= new Object();
    task.name= input.value;
    task.completed=false;
   tabs.push(task);
   input.value=""
   
 }
 
//2 add task

 function addTask(e) {
   let newtask = prompt("Ajouter une tache")
  
   tasks.push(newtask)
   return newtask;



}

//3 remove task

 function removeTask(e) {
  let remove_task = prompt("supprimer une tache???")
  tasks.splice(addTask, index)
  return remove_task;
  
 }



















