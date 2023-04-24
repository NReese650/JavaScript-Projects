//This function gets the task from the input//
function get_todos() {
    //This creates an array of tasks that are inputted
    var todos = new Array;
    //This pulls the task that was saved in the web browser's memory
    var todos_str = localStorage.getItem('todo');
    //If the input is null, JSON.parse will communicate with the browser to make the task a js object
    if (todos_str !== null) {
        todos = JSON.parse(todos_str);
    }
    return todos;
}

//This function adds the inputted task to the get_todos array
function add() {
    //This takes the inputted task and creates a variable for it
    var task = document.getElementById('task').value;

    var todos = get_todos();
    //This adds a new task to the end of the array
    todos.push(task);
    //This converts the task input to a json string
    localStorage.setItem('todo', JSON.stringify(todos));
    document.getElementById("task").value = "";
    show();
    
    return false;
}

//this funciton keeps the task displayed on the screen
function show() {
    //This sets the task that was retrieved as a variable
    var todos = get_todos();

    //This sets up each task in a ul
    var html = '<ul>';
    //This displays a task to the list in the order that it is inputted
    for (var i = 0; i < todos.length; i++) {
        //This also displays the task as a list and create s the button with the X
        html += '<li>' + todos[i] + '<button class="remove" id="' + i + '">x</button><li>';

    };

    html += '</ul>';
    //This displays the task as a list
    document.getElementById('todos').innerHTML = html;

        // Add event listener to each "x" button
        var removeButtons = document.getElementsByClassName("remove");
        for (var i = 0; i < removeButtons.length; i++) {
        removeButtons[i].addEventListener("click", remove);
    }
}

//This displays the inputted task when the add item button is clicked
document.getElementById('add').addEventListener('click', add);
//This will keep the inputs displayed on the screen
show();

for (var i = 0; i < todos.length; i++) {
    html += '<li>' + todos[i] + '<button class="remove" id="' + i + '">x</button></li>';
}


function remove() {
    var id = this.getAttribute("id");
    var todos = get_todos();
    todos.splice(id, 1);
    localStorage.setItem('todo', JSON.stringify(todos));
    show();
    return false;
}
