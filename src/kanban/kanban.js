// USER MENU DROP-DOWN
const userMenu = document.querySelector('.user__menu');
const menuArrow = document.querySelector('.menu__arrow');

let dropDownTemplate = `
    <li class="drop-down__item">Profile</li>
    <li class="drop-down__item">My tasks</li>
    <li class="drop-down__item">Log out</li>
`;

let dropDownMenu = document.createElement('ul');
dropDownMenu.className = 'drop-down';
dropDownMenu.innerHTML = dropDownTemplate;

userMenu.addEventListener('click', () => {
    if (menuArrow.classList.contains('menu__arrow_shown')) {
        dropDownMenu.remove();
        menuArrow.classList.remove('menu__arrow_shown');
    } else {
        menuArrow.classList.add('menu__arrow_shown');
        userMenu.appendChild(dropDownMenu);
    }
});

// ПЕРЕМЕННЫЕ
const boards = [
    {
        id: 0,
        title: 'Backlog',
        tasks: [
            { 
                id: 0, 
                name: 'Clean home',
            }
        ],
    },
    {
        id: 1,
        title: 'Ready',
        tasks: [],
    },
    {
        id: 2,
        title: 'In Progress',
        tasks: [],
    },
    {
        id: 3,
        title: 'Finished',
        tasks: [],
    },
];

const boardsContainer = document.querySelector('.container');
const addButtons = document.querySelectorAll('.add-task-button');
let boardId;
const taskInput = createInputForm();
taskInput.onblur = addNewTask;

// создание input-элемента для ввода новой задачи 
function createInputForm() {
    let input = document.createElement('input');
    input.type = 'text';
    input.className = 'task-input';
    input.id = 'task-input';
    input.placeholder = 'Type task name';
    input.autocomplete = 'off';
    return input;
};

// создание новой задачи (элемента) в списке с именем из INPUT
function createListItem(index, task) {
    let listItem = document.createElement('li');
    listItem.className = 'list__item';
    listItem.id = index;
    listItem.innerText = task;
    return listItem;
};

// выпадающий список из задач предыдущей доски
function createAddTaskMenu() {
    let boardListItem = document.createElement('li');
    let addTaskMenu = document.createElement('ul');
    addTaskMenu.className = 'add-task-dropdown';
    let addTaskMenuItems = `<li class="add-task-dropdown__item">
    Выберите задачу из списка</li>`;
    
    boards[boardId - 1].tasks.forEach(item => {
        addTaskMenuItems += `<li class="add-task-dropdown__item">${item.name}
        <input class="checkbox" type="checkbox"></li>`;
    });
    addTaskMenu.innerHTML = addTaskMenuItems;
    boardListItem.appendChild(addTaskMenu);

    let submit = createSubmitButton();
    boardListItem.appendChild(submit);
    
    return boardListItem;
};

// кнопка "добавить" в выпадающем списке задач 
function createSubmitButton() {
    submitButton = document.createElement('button');
    submitButton.className = 'submit';
    submitButton.innerHTML= 'Add';
    submitButton.addEventListener('click', moveTasks);
    return submitButton;
};

// функция добавления новой задачи в первый список (имя берется из input)
function addNewTask() {
    if (taskInput.value) {
        boards[boardId].tasks.push({ 
            id: boards[boardId].tasks.length, 
            name: taskInput.value 
        });
        let item = createListItem(boards[boardId].tasks.length - 1, taskInput.value);
        document.querySelector(`ul[data-task-list-id='${taskInput.boardId}']`).appendChild(item);
        taskInput.value = '';
    }
    taskInput.remove();
    addButtons[taskInput.boardId + 1].disabled = false;
};

// КЛИК ПО КНОПКЕ "ADD"
boardsContainer.addEventListener('click', (event) => {
    let target = event.target; 
    if (target.className !== 'add-task-button') return;
    boardId = +target.parentNode.getAttribute('data-board-id');
    if (boardId > 0) {                                                     // создать выпадающий список из задач предыдущей доски
        addButtons[boardId].classList.add('add-task-button-hidden');
        let taskList = target.parentNode.querySelector('.task-list');
        taskList.appendChild(createAddTaskMenu(boardId)); 
        
    } else {                                                                // создать input для добавления задачи на первую доску
        taskInput.boardId = boardId;
        document.querySelector(`ul[data-task-list-id='${boardId}']`).appendChild(taskInput);
        taskInput.focus();
    }
});

// ПЕРЕМЕЩЕНИЕ ЗАДАЧ
function moveTasks() {
    let checkbox = document.querySelectorAll('.checkbox');
    let listToAdd = document.querySelector(`ul[data-task-list-id='${boardId}']`);
    checkbox.forEach(element => {
        if (element.checked) {
            let taskToMove = boards[boardId - 1].tasks.find(item => 
                item.name === element.parentNode.innerText);
            boards[boardId - 1].tasks = boards[boardId - 1].tasks.filter(item => 
                item.name !== taskToMove.name);
            boards[boardId].tasks.push(taskToMove);
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

//проверка на пустой список
function checkEmptyLists() {
    boards.forEach((element, index) => {
        if (index < boards.length - 1) {
            if (element.tasks.length) {
                addButtons[index + 1].disabled = false;
                return;
            }        
            addButtons[index + 1].disabled = true;
        }
    });
};