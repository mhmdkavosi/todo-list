let lsName='todo';
class Todo {
    static init(){
        if (!Ls.has(lsName)) {
            this.set([]);
        }
    }
    static addTask(value,isDone=false,isDelete=false){
        Ls.push(lsName,{
            id:this.id(),
            value:value,
            isDone:isDone,
            isDelete:isDelete
        });
    }
    static id(){
        return Helpers.size(Todo.tasks())+1;
    }
    static tasks(){
        return Ls.get(lsName);
    }
    static find(id){
        let find=Todo.tasks().filter(task =>{
            if (task.id==id)
                return task;
        });
        if (Helpers.isNotEmpty(find))
            return find[0];
        return {};
    }
    static edit(id,editedTask){
        let putTask=Todo.tasks().map(task =>{
            if (task.id==id)
                task=editedTask;
            return task;
        });
        this.set(putTask);
    }
    static getDeleted(){
        return  Todo.tasks().filter(task =>{
            if (task.isDelete && task.value.match(this.keyWord))
                return task;
        });
    }
    static getDone(){
        return  Todo.tasks().filter(task =>{
            if (task.isDone && !task.isDelete && task.value.match(this.keyWord))
                return task;
        });
    }
    static getCurrentTasks(){
        return  Todo.tasks().filter(task =>{
            if (task.isDone==false && task.isDelete==false && task.value.match(this.keyWord))
                return task;
        });
    }
    static set(todo){
        Ls.set(lsName, todo);
    }
    static setSearch(keyWord){
        this.keyWord=keyWord;
    }
}