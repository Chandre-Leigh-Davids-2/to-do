// Time 


function updateTime() {
    const now = new Date()
    document.getElementById('time').textContent = now.toLocaleTimeString();
    document.getElementById('date').textContent = now.toLocaleDateString('en-GB');
}
// Update immediately and then every second
updateTime();
setInterval(updateTime, 1000);


// Add Tasks
const tasks = [];

function addToList(){
    const input = document.querySelector('.input-box');
    const item = input.value.trim();
    if(item === '') return;

    tasks.push({name:item, isChecked:false});
    input.value = "";
    renderTask();
}

function renderTask(){
    const board = document.querySelector('.board');
    board.innerHTML = '';

/* task acts as i or n in the parameters, so it's collecting one object
then, the list(tasks) calls the SINGULAR object(task) and connects it to it's 'key-value-pair' or rather references it in this line --> p.textContent = task.name;
so essentially p.textContent will be whatever is in the input box that the user submits on the click/event listener

--> For Cas

*/  
    tasks.forEach(function(task,index){
        const div = document.createElement('div');
        div.className = 'board-div';
        div.style.display = 'flex';
        div.style.justifyContent = 'space-around';

        const p = document.createElement('p');
        p.className = 'to-do-item';
        // This line is the most important
        p.textContent = task.name;
        p.style.color = 'black';
        /* This line is the second most important --> we are using ternary operators
        so if task.false is true then line-through if not then none, since the boolean object is already false, the state stays the same until the checkbox is ticked 
        */ 
        p.style.textDecoration = task.isChecked? 'line-through' : 'none';

        const checkbox = document.createElement('input');
        checkbox.type = 'checkbox';
        checkbox.className = 'checkbox';
        checkbox.checked = task.isChecked;

        // toggle task completion
        checkbox.addEventListener('change', function() {
            task.isChecked = checkbox.checked;
            p.style.textDecoration = task.isChecked ? "line-through" : "none";
        });
        div.appendChild(p);
        div.appendChild(checkbox);
        board.appendChild(div);
    })
}

document.querySelector('.create-task').addEventListener('click', addToList)


// Progress Bar

// const progress = (tasks.length / totalTasks) * 100;
// document.querySelector('.bar').value = progress;









