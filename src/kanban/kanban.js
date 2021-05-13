// USER MENU DROP-DOWN
const userMenu = document.querySelector('.user__menu');
const menuArrow = document.querySelector('.menu__arrow');

let dropDownTemplate = `
    <li class="drop-down__item">Profile</li>
    <li class="drop-down__item">My tasks</li>
    <li class="drop-down__item">Log out</li>
`;

let dropDownMenu = document.createElement('ul');
dropDownMenu.className = "drop-down";
dropDownMenu.innerHTML = dropDownTemplate;

userMenu.addEventListener("click", () => {
    if (menuArrow.classList.contains('menu__arrow_shown')) {
        dropDownMenu.remove();
        menuArrow.classList.toggle('menu__arrow_shown');
    } else {
        menuArrow.classList.toggle('menu__arrow_shown');
        userMenu.appendChild(dropDownMenu);
    }
});

// TASK-BOARDS
const tasks = [
    { id: 0, name: 'Clean home', boardId: 0 },
];
const boards = [
    {
        id: 0,
        title: 'Backlog',
    },
    {
        id: 1,
        title: 'Ready',
    },
    {
        boardId: 2,
        boardTitle: 'In Progress',
    },
    {
        boardId: 3,
        boardTitle: 'Finished',
    },
];

const boardsContainer = document.querySelector('.container');
const addButtons = document.querySelectorAll('.add-task-button');
let boardId;

function createInputForm() {
    let input = document.createElement('input');
    input.type = 'text';
    input.className = 'task-input';
    input.id = 'task-input';
    input.placeholder = 'Type task name';
    input.autocomplete = 'off';
    return input;
};

function createListItem(index, task) {
    let listItem = document.createElement('li');
    listItem.className = 'list__item';
    listItem.id = index;
    listItem.innerText = task;
    return listItem;
};

function addNewTask() {
    if (taskInput.value) {
        tasks.push({ id: tasks.length, name: taskInput.value, boardId: taskInput.boardId });
        let item = createListItem(tasks.length-1, taskInput.value);
        document.querySelector(`ul[data-task-list-id="${taskInput.boardId}"]`).appendChild(item);
        taskInput.value = "";
    }
    taskInput.remove();
    addButtons[taskInput.boardId + 1].disabled = false;
    saveToLocalStorage();
};

function saveToLocalStorage() {
    localStorage.removeItem('todo');
    localStorage.setItem('todo', JSON.stringify({
        tasks: tasks,
    }));
    // console.log(localStorage.getItem('todo'));
};

const taskInput = createInputForm();
taskInput.onblur = addNewTask;

// ДОБАВЛЕНИЕ ЗАДАЧ

boardsContainer.onclick = function(event) {
    let target = event.target; 
    if (target.className !== 'add-task-button') return;
    boardId = +target.parentNode.getAttribute('data-board-id');
    if (boardId > 0) {
        // создать выпадающий список из задач предыдущей доски
        addButtons[boardId].classList.add('add-task-button-hidden');
        let taskList = target.parentNode.querySelector('.task-list');
        taskList.appendChild(createAddTaskMenu(boardId)); 
        
    } else {
        // создать input для добавления задачи на первую доску
        taskInput.boardId = boardId;
        // addButtons[boardId].disabled = true;
        document.querySelector(`ul[data-task-list-id="${boardId}"]`).appendChild(taskInput);
        taskInput.focus();
    }
};

// выпадающий список из задач предыдущей доски
function createAddTaskMenu() {
    let boardListItem= document.createElement('li');
    let addTaskMenu = document.createElement('ul');
        addTaskMenu.className = "add-task-dropdown";
    let addTaskMenuItem = `<li class="add-task-dropdown__item">Выберите задачу из списка</li>`;
    
    tasks.filter(item => item.boardId === boardId - 1).forEach(item => {
        addTaskMenuItem +=`<li class="add-task-dropdown__item">${item.name}<input class="checkbox" type="checkbox"></li>`;
    });
    addTaskMenu.innerHTML = addTaskMenuItem;
    boardListItem.appendChild(addTaskMenu);

    let submit = createSubmitButton();
    boardListItem.appendChild(submit);
    
    return boardListItem;
};
// кнопка "добавить" в выпадающем списке из задач предыдущей доски
function createSubmitButton() {
    submitButton = document.createElement('button');
    submitButton.className = 'submit';
    submitButton.innerHTML= 'Add';
    submitButton.onclick = moveTasks;
    return submitButton;
};

// перемещение задачи
function moveTasks() {
    let checkbox = document.querySelectorAll('.checkbox');
    let listToAdd = document.querySelector(`ul[data-task-list-id="${boardId}"]`);
    checkbox.forEach(element => {
        if (element.checked) {
            let taskToMove = tasks.find(item => item.name === element.parentNode.innerText);
            taskToMove.boardId++;
            document.querySelector(`li[id='${taskToMove.id}']`).remove();
            let item = createListItem(taskToMove.id, taskToMove.name);
            listToAdd.appendChild(item);
        }
    });
    document.querySelector('.add-task-dropdown').remove();
    document.querySelector('.submit').remove();
    addButtons[boardId].classList.remove('add-task-button-hidden');
    checkEmptyLists();
};

function checkEmptyLists() {
    boards.forEach((element, index) => {
        let filtered = tasks.filter(item => item.boardId === index);
        if (index < boards.length-1) {
            if (filtered.length) {
                addButtons[index + 1].disabled = false;
                return;
            }        
             addButtons[index + 1].disabled = true;
        }
    });
}ж

