(function() {
    let tasks = [{
            "id": 1,
            "task": "Car Wash at 3pm"
        },
        {
            "id": 2,
            "task": "Attend Conference at Taj"
        }
    ];

    // To track the number of items added/removed
    var taskLen = document.querySelector("#taskLength");
    taskLen.innerHTML = tasks.length;

    // To showcase the items added in the array above -> tasks
    for (var i = 0; i < tasks.length; i++) {
        var taskDom = document.querySelector("#tasks");
        var taskList = document.createElement("LI");
        var taskSpan = document.createElement("SPAN");
        var taskSpanClass = document.createAttribute("CLASS");
        taskSpanClass.value = "deleteTask";
        taskSpan.setAttributeNode(taskSpanClass);
        var taskListClass = document.createAttribute("CLASS");
        taskListClass.value = tasks[i].id;
        taskList.setAttributeNode(taskListClass);
        var taskListText = document.createTextNode(tasks[i].task);
        taskList.appendChild(taskListText);
        taskList.appendChild(taskSpan);
        taskDom.appendChild(taskList);
    };

    // To mark your items. Toggle on the "LI" element to mark/unmark the item.
    var lists = document.querySelectorAll("#tasks li");
    for (var j = 0; j < lists.length; j++) {
        lists[j].addEventListener("click", function(e) {
            e.target.classList.toggle("done");
        });
    };

    // To showcase the newly added items via the input. Also the remove the item.
    function printNewTask(task) {
        var newTaskDom = document.querySelector("#tasks");
        var newTaskList = document.createElement("LI");
        var newTaskListText = document.createTextNode(task.task);
        var newTaskSpan = document.createElement("SPAN");
        var newTaskSpanClass = document.createAttribute("CLASS");
        newTaskSpanClass.value = "deleteTask";
        newTaskSpan.setAttributeNode(newTaskSpanClass);
        var newTaskListClass = document.createAttribute("CLASS");
        newTaskListClass.value = task.id;
        newTaskList.setAttributeNode(newTaskListClass);
        newTaskList.appendChild(newTaskListText);
        newTaskList.appendChild(newTaskSpan);
        newTaskDom.appendChild(newTaskList);
        newTaskList.addEventListener("click", function(e) {
            e.preventDefault();
            e.target.classList.toggle("done");
        });
        newTaskSpan.addEventListener("click", function(e) {
            e.stopPropagation();
            if (e.target.parentElement.classList.contains("done")) {

                var key = e.target.parentElement.classList[0];
                tasks = tasks.filter(function(task) {
                    return task.id != key;
                });
                taskLen.innerHTML = tasks.length;
                var parent = e.target.parentElement;
                parent.parentElement.removeChild(parent);
            } else {
                alert("Are you sure you want to remove this item? Note:You have to mark it as done before removing an item");
            }
        });
    }

    // To add the item via input and store it in the arry above -> tasks
    var addTask = document.querySelector("#addTask");
    addTask.addEventListener("click", function() {
        var newTask = document.querySelector("#newTask");
        if (newTask.value !== "") {
            newTask.style.border = "1px solid #ddd";
            var newTaskText = newTask.value;
            var addToTaskList = { "id": tasks.length + 1, "task": newTaskText };
            tasks.push(addToTaskList);
            printNewTask(addToTaskList);
            taskLen.innerHTML = tasks.length;
            newTask.value = "";
        } else {
            newTask.style.border = "2px solid red";
        }
    });


    // To delete the task from the dom as well as from the array -> tasks
    var deleteTask = document.querySelectorAll(".deleteTask");
    for (var k = 0; k < deleteTask.length; k++) {
        deleteTask[k].addEventListener("click", function(e) {
            e.stopPropagation();
            if (e.target.parentElement.classList.contains("done")) {
                var key = e.target.parentElement.classList[0];
                tasks = tasks.filter(function(task) {
                    return task.id != key;
                });
                taskLen.innerHTML = tasks.length;
                var parent = e.target.parentElement;
                parent.parentElement.removeChild(parent);
            } else {
                alert("Are you sure you want to remove this item? Note:You have to mark it as done before removing an item");
            }

        });
    };

})();