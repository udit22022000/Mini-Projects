showTask();
var addTaskInput = document.getElementById('addTaskInput');
var addTaskButton = document.getElementById('addTaskButton');

addTaskButton.addEventListener('click', function () {
  var addTaskInputValue = addTaskInput.value;
  if (addTaskInputValue.trim()) {
    var task = localStorage.getItem('localtask');
    if (task == null) {
      taskObj = [];
    } else {
      taskObj = JSON.parse(task);
    }

    taskObj.push({ task_name: addTaskInputValue });
    localStorage.setItem('localtask', JSON.stringify(taskObj));
    addTaskInput.value = '';
  }
  showTask();
});

function showTask() {
  var task = localStorage.getItem('localtask');
  if (task == null) {
    taskObj = [];
  } else {
    taskObj = JSON.parse(task);
  }

  var html = '';
  var taskList = document.getElementById('taskList');
  taskObj.forEach(function (item, index) {
    html += `<tr class="row">
        <td>${index + 1}</td>
        <td>${item.task_name}</td>
        <td><button onclick="deleteItem(${index})">DELETE</button></td>
        </tr>`;
  });
  taskList.innerHTML = html;
}

function deleteItem(index) {
  var task = localStorage.getItem('localtask');
  var taskObj = JSON.parse(task);
  taskObj.splice(index, 1);
  localStorage.setItem('localtask', JSON.stringify(taskObj));
  showTask();
}
