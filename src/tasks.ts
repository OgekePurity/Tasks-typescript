const taskForm = document.querySelector<HTMLFormElement>('.form');
const formInput = document.querySelector<HTMLInputElement>('.form-input');
const taskListElement = document.querySelector<HTMLUListElement>('.list');

// task type
type Task = {
  description: string;
  isCompleted: boolean;
};

// Retrieve tasks from localStorage
const tasks: Task[] = loadTasks();

// Load tasks from localStorage
function loadTasks(): Task[] {
  const storedTasks = localStorage.getItem('tasks');
  return storedTasks ? JSON.parse(storedTasks) : [];
}

// tasks.forEach((task) => renderTask(task));
tasks.forEach(renderTask);

function createTask(event: SubmitEvent) {
    event.preventDefault();
    const taskDescription = formInput?.value;
    if (taskDescription) {
        const task: Task = {
            description: taskDescription,
            isCompleted: false,
          };
      // add task to list
      addTask(task)
      // render tasks
      renderTask(task)
      // update local storage
      updateStorage()
  
      formInput.value = '';
      return;
    }
    alert('Please enter a task description');
  }
  function addTask(task: Task): void {
    tasks.push(task);
    console.log(tasks);
  }

  function renderTask(task: Task): void {
    const taskElement = document.createElement('li');
    taskElement.textContent = task.description;

    // checkbox
  const taskCheckbox = document.createElement('input');
  taskCheckbox.type = 'checkbox';
  taskCheckbox.checked = task.isCompleted;

  // toggle checkbox
  taskCheckbox.addEventListener('change', () => {
    task.isCompleted = !task.isCompleted;
    updateStorage();
  });

  taskElement.appendChild(taskCheckbox);
  taskListElement?.appendChild(taskElement);

  }
  function updateStorage(): void {
    localStorage.setItem('tasks', JSON.stringify(tasks));
  }
  
  taskForm?.addEventListener('submit', createTask);