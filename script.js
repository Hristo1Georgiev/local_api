// Get elements.
const list = document.getElementById("list");
const inputText = document.getElementById("inputText");
const button = document.getElementById("button");

// Async function to get items/data.
const getList = async () => {
    list.innerHTML = "";
    const listItems = await getData();
    listItems.forEach(toDo => createList(toDo));
};

// Add a task.
const addTask = async () => {
    const inputValue = inputText.value;
    if (inputValue === "") {
        alert("Add a task.");
    } else {
        inputText.value = "";
        await postData(inputValue);
        getList();
    } log("InputValue:", inputValue);
};

// Update a task.
const updateTask = async (e) => {
    if (e.target.type == "text") {
        await updateData({
            _id: e.target.id,
            description: e.target.value,
            done: e.target.parentElement.checked
        });
        getList();
    };
};

// Delete a task.
const deleteTask = async (e) => {
    const listItem = e.target.parentElement;
    const li = listItem.parentElement;
    li.removeChild(listItem);
    let idSelectedItem = e.target.id;
    await deleteData(idSelectedItem);
};

// Function to create all items.
const createList = async (toDo) => {
    // New elemnts:div, checkBox, li, textInput, deleteButton.
    const newDiv = document.createElement("div");
    list.appendChild(newDiv);

    const checkBox = document.createElement("input");
    newDiv.appendChild(checkBox);
    checkBox.className = "checkBox";
    checkBox.setAttribute("type", "checkBox");
    checkBox.addEventListener("change", updateTask);
    checkBox.addEventListener("change", async (toDo) => {
        if (toDo.target.checked) {
            updateTask;
            textInput.className = "checked";
           
        } else {
            updateTask;
            textInput.className = "textInput";
        };
    });
    const newLi = document.createElement("li");
    newDiv.appendChild(newLi);
    newLi.id = toDo._id;

    const textInput = document.createElement("input");
    newLi.appendChild(textInput);
    textInput.id = toDo._id;
    textInput.setAttribute("type", "text");
    textInput.className = "textInput";
    textInput.innerText = inputText.value;
    textInput.value = toDo.description;
    textInput.addEventListener("change", updateTask);

    const deleteButton = document.createElement("i");
    newDiv.appendChild(deleteButton);
    deleteButton.id = toDo._id;
    deleteButton.className = "deleteBttn"
    deleteButton.setAttribute("class", "far fa-trash-alt bin");
    deleteButton.addEventListener("click", deleteTask);
};

// Add event listeren to add the new task.
button.addEventListener("click", addTask);
getList();
