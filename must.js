let toDo=[];
let req=prompt("Enter your request");
console.log(req)
while(true){
    if(req =="quit")
    {
        console.log("quitting app")
        break;
    }

if(req=="list"){
    console.log("___________");
    for(let i=0;i<toDo.length;i++){
        console.log(i,toDo[i]);
    }
     console.log("___________");
} else if(req=="add"){
         let task=prompt("Please enter a task you want to add")
         toDo.push(task)
         console.log("task added")
}else if(req=="delete"){
 let idx =prompt("Please enter the task index")
 toDo.splice(idx,1)
 console.log("task deleted")
}else{
    console.log("Wrong request")

}
req=prompt("Enter your request");
}
