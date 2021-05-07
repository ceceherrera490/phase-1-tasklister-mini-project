document.addEventListener("DOMContentLoaded", () => {
  // your code here
});

const taskForm = document.getElementById("create-task-form");
const listed = document.getElementById("list");

taskForm.addEventListener("submit", (e) => {
  e.preventDefault();
  console.log(e);
  const inputt = e.target.querySelector("#new-task-description").value;

  const listAdd = document.createElement("li");
  listAdd.textContent = inputt;
  listed.appendChild(listAdd);

  taskForm.reset();

  listAdd.addEventListener("click", () => {
    listAdd.style.textDecoration = "line-through";
  });

  listAdd.addEventListener("dblclick", () => {
    listed.removeChild(listAdd);
  });
});
