// variables

const addTaskBtn = document.getElementById('add-task');
const taskContainer = document.getElementById('task-container');
const inputTask = document.getElementById('input-task');


// Event Listner for add Button
addTaskBtn.addEventListener('click', addTask);

inputTask.addEventListener('keydown', function(e){
    if (e.key === 'Enter') {
        addTask()
    }
})


function addTask () {

    let task = document.createElement('div');
    task.classList.add('task');


    let li = document.createElement('li');
    li.innerText = `${inputTask.value}`;
    task.appendChild(li);

    let checkButton = document.createElement('button');
    checkButton.innerHTML = '<i class="fa-solid fa-check"></i>';
    checkButton.classList.add('checkTask');
    task.appendChild(checkButton)

    let deleteButton = document.createElement('button');
    deleteButton.innerHTML = '<i class="fa-solid fa-trash-can"></i>';
    deleteButton.classList.add('deleteTask');
    task.appendChild(deleteButton)

    if(inputTask.value === "") {
        alert("Please Enter a Task");
    } else {
        taskContainer.appendChild(task);
    }

    inputTask.value = "";


    checkButton.addEventListener('click', function(){

        checkButton.parentElement.style.textDecoration = "line-through"

    });

    deleteButton.addEventListener('click', function(e) {

        let target = e.target;
        
        if (target == deleteButton) {
            target.parentElement.remove();
            // console.log('WWWWWWWWWWWWw')
        } else {
            target.parentElement.parentElement.remove();
        }
        // console.log(target == deleteButton)
      


    });

}



// event listner for enter
