let add_btn = document.querySelector(".additem");
let todo_list = document.querySelector(".todo");
let todoItems = [];

function taskInput(target) {
    console.log("target", target);
    let li = target.closest("li")
    let nodeList =  document.querySelectorAll('li');
    let arrayList = Array.from(nodeList);
    let index = arrayList.indexOf(li);

  target.addEventListener("keyup", (e) => {
    let prevSibling = target.previousElementSibling;
    if (e.key == "Enter") {
      target.classList.add("hide");
      prevSibling.classList.remove("hide");
      prevSibling.innerHTML = target.value;

        if(index == arrayList.length-1){
            todoItems.push(target.value)
        }
        else{
            todoItems[index] = target.value;

        }

      localStorage.setItem("todolist", JSON.stringify(todoItems));
    }
  });
}

window.onload = function () {
  const cookie = localStorage.getItem("todolist");
  todoItems = cookie ? JSON.parse(cookie) : [];

  todoItems.forEach((element) => {
    console.log(todoItems);
    const li = document.createElement("li");
    li.className = "todolist-item";
    li.innerHTML = `<span class="text">
                           ${element}
                        </span>
                        <input class="task-field hide" type="text">
                        <div class="btn">
                            <span class="editbtn" >Edit</span>
                            <span class="delete-btn">Delete</span>
                        </div>`;
    todo_list.appendChild(li);
  });
};

function deleteListELement(target) {
  const li = target.closest("li");
  let nodeList = document.querySelectorAll("li");
  let arrayList = Array.from(nodeList);
  let index = arrayList.indexOf(li);
  todoItems.splice(index, 1);
  console.log("arraylist", todoItems);
  localStorage.setItem("todolist", JSON.stringify(todoItems));
  li.remove();
}

function editListElement(target) {
  let li = target.closest("li");
  const inputField = li.querySelector(".task-field");
  inputField.classList.remove("hide")
  const text = li.querySelector('.text');
  text.classList.add('hide');
  inputField.value = text.innerHTML

}

document.addEventListener("click", function (e) {
  const isTaskField = e.target.classList.contains("task-field"); // Or any other selector.
  const isDelete = e.target.classList.contains("delete-btn");
  const isEdit = e.target.classList.contains("editbtn");

  if (isEdit) {
    editListElement(e.target);
  }

  if (isDelete) {
    deleteListELement(e.target);
  }

  if (isTaskField) {
    taskInput(e.target);
  }
});

add_btn.addEventListener("click", () => {
  const li = document.createElement("li");
  li.className = "todolist-item";
  li.innerHTML = `<span class="text hide">
                    </span>
                    <input class="task-field" type="text">
                    <div class="btn">
                        <span class="editbtn" >Edit</span>
                        <span class="delete-btn">Delete</span>
                    </div>`;

  todo_list.appendChild(li);
});
