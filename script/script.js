// Time 

function updateTime() {
    const now = new Date()
    document.getElementById('time').textContent = now.toLocaleTimeString();
    document.getElementById('date').textContent = now.toLocaleDateString('en-GB');
}
// Update immediately and then every second
updateTime();
setInterval(updateTime, 1000);

// const list = [];
// function addToList(){
//     console.log(list);
//     const item = document.querySelector('.input-box').value;
//     console.log(item); // whatever the user typed
//     list.push(item);
//     document.querySelector('.board').innerHTML = list;
// }

// addToList()

const list = [];

function addToList(){
    const item = document.querySelector('.input-box').value.trim();
    if (item === "") return; // don't add empty items
    list.push(item);
    document.querySelector('.board').innerHTML = list.join(", ");
    console.log(list);
}

document.querySelector('.create-task').addEventListener('click', addToList);


// console.log(e);
