// make new task
const newTask=()=>{
    let taskValue=taskInput.getVal();
    Todo.addTask(taskValue);
    taskInput.changeVal('');
    renderItem();
};

// toggle done task
const changeStateDone=(id)=>{
    let editedTask=Todo.find(id);
    editedTask.isDone=!editedTask.isDone;
    Todo.edit(id,editedTask);
    renderItem();
};

// toggle remove task
const removeTask=(id)=>{
    let editedTask=Todo.find(id);
    editedTask.isDelete=!editedTask.isDelete;
    Todo.edit(id,editedTask);
    renderItem();
};

// render doing tasks
const renderTask = () => {
    parent_task_item.html('');
    let tasks = Todo.getCurrentTasks();
    let size = Helpers.size(tasks);
    tasks.map((eachTask) => parent_task_item.append(generateElement(eachTask)));
    count_doing_task.html(size);
};

// render done tasks
const renderDoneTask=()=>{
    done_tasks.html('');
    let tasks=Todo.getDone();
    let size=Helpers.size(tasks);
    tasks.map((eachTask) => done_tasks.append(generateElement(eachTask)));
    count_done_task.html(size);
};

// render deleted tasks
const renderDeletedTask=()=>{
    deleted_tasks.html('');
    let tasks=Todo.getDeleted();
    let size=Helpers.size(tasks);
    tasks.map((eachTask) => deleted_tasks.append(generateElement(eachTask)));
    count_deleted_task.html(size);
};

// generate html element task
const generateElement=(task)=>{
    return `
                                <li class="${(task.isDone) ? 'completed' : ''}">
                                    <div class="form-check">
                                     <label class="form-check-label">
                                      <input class="checkbox" type="checkbox" onclick="changeStateDone(${task.id})" name="todo-${task.id}"
                                      ${(task.isDone) ? 'checked' : ''}
                                      >
                                      ${task.value}
                                      <i class="input-helper"></i>
                                      </label>
                                       </div>
                                        <i onclick="removeTask(${task.id})" class="remove mdi mdi-close-circle-outline"></i>
                                </li>`;
};


const search=()=>{
    Todo.setSearch(searchInout.getVal());
    renderItem();
};