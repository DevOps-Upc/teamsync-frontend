export class Task{
    constructor(id,name,state,date,id_integrate,id_project) {
        this.id=id;
        this.name=name;
        this.state=state;
        this.date=date
        this.id_integrate=id_integrate;
        this.id_project=id_project;
    }
    static fromDisplayTask(displayableTask){
        return new Task(
            displayableTask.id,
            displayableTask.name,
            displayableTask.state,
            displayableTask.date,
            displayableTask.id_integrate,
            displayableTask.id_project
        )

    }
    static toDisplayableTask(task){
        return{
            id:task.id,
            name:task.name,
            state:task.state,
            id_integrate: task.id_integrate,
            id_project:task.id_project
        }
    }
}
