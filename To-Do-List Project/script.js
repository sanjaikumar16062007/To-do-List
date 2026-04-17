function addTask() {
  let input = document.getElementById("taskInput");
  let taskText = input.value;

  if (taskText === "") {
    alert("Enter a task!");
    return;
  }

  let li = document.createElement("li");
  li.innerHTML = `
    <span onclick="toggleTask(this)">${taskText}</span>
    <button class="delete-btn" onclick="deleteTask(this)">X</button>
  `;

  document.getElementById("taskList").appendChild(li);

  input.value = "";
}

function deleteTask(btn) {
  btn.parentElement.remove();
}

function toggleTask(element) {
  element.parentElement.classList.toggle("done");
}