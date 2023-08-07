const btnEl = document.getElementById("btn");
const inputEl = document.getElementById("input");
const listEl = document.getElementById("list");

addTask = () => {
  if (inputEl.value === "") {
    // alert("Please write something to add!")
  } else {
    let li = document.createElement("li");
    li.classList.add("task-container");

    let dateInput = document.createElement("input");
    dateInput.type = "date";
    dateInput.classList.add("task-date");
    li.appendChild(dateInput);

    let taskText = document.createTextNode(inputEl.value);
    li.appendChild(taskText);

    let span = document.createElement("span");
    span.innerHTML = "\u00d7";
    span.classList.add("delete-btn");
    li.appendChild(span);

    listEl.appendChild(li);
  }
  inputEl.value = "";
  saveData();
};

listEl.addEventListener("click", (e) => {
  if (e.target.classList.contains("task-container")) {
    e.target.classList.toggle("checked");
    saveData();
  } else if (e.target.classList.contains("delete-btn")) {
    e.target.parentElement.remove();
    saveData();
  }
});

saveData = () => {
  const tasks = listEl.querySelectorAll(".task-container");
  const data = [];
  tasks.forEach((task) => {
    const taskDate = task.querySelector(".task-date").value;
    const taskText = task.childNodes[1].nodeValue.trim();
    data.push({ date: taskDate, text: taskText });
  });
  localStorage.setItem("data", JSON.stringify(data));
};

getData = () => {
  const data = JSON.parse(localStorage.getItem("data")) || [];
  data.forEach((item) => {
    let li = document.createElement("li");
    li.classList.add("task-container");

    let dateInput = document.createElement("input");
    dateInput.type = "date";
    dateInput.classList.add("task-date");
    dateInput.value = item.date;
    li.appendChild(dateInput);

    let taskText = document.createTextNode(item.text);
    li.appendChild(taskText);

    let span = document.createElement("span");
    span.innerHTML = "\u00d7";
    span.classList.add("delete-btn");
    li.appendChild(span);

    listEl.appendChild(li);
  });
};
getData();

btnEl.addEventListener("click", addTask);
