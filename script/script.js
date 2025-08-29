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
const tasks = []; // array to store all items

function addToList() {
    const input = document.querySelector('.input-box');
    const item = input.value.trim();
    if (item === "") return;

    tasks.push(item); // store task
    input.value = ""; // clear text area

    const board = document.querySelector('.board');
    board.innerHTML = ""; // clear before re-rendering

    tasks.forEach(function(task, index) {
        const div = `
            <div style='display:flex; justify-content:space-around;' class="board-div">
                <p>${task}</p>
                <input type="checkbox"></input>
            </div>
        `;
        board.innerHTML += div; // append HTML to board
    });
    console.log(tasks);
}
document.querySelector('.create-task').addEventListener('click', addToList);



// Progress Bar

const progress = (tasks.length / totalTasks) * 100;
document.querySelector('.bar').value = progress;









