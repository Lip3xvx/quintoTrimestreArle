import { Injectable } from '@nestjs/common';
import { Task, TaskStatus } from './task.entity';
import { v4 } from 'uuid'; 
import { UpdateTaskDto } from './dto/task.dto';


//simulacion de base de datos
@Injectable()
export class TasksService {

    private tasks: Task[] = [
        {
            id:'1',
            title: 'first task',
            description: "some task",
            status: TaskStatus.PENDING
}]
    getAllTasks(){
        return this.tasks;
    }
    createTask(title: string, description: string){
        const task = {
            id: v4(),
            title,
            description,
            status: TaskStatus.PENDING
        }
        this.tasks.push(task)

        return task;
    }
    updateTask(id: string, updateFields: UpdateTaskDto ): Task{
const task = this.getTaskById(id)
const newTask = Object.assign(task,updateFields)
this.tasks = this.tasks.map(task => task.id === id ? newTask : task)
return newTask;
    }
    
    getTaskById(id:string){
       return this.tasks.find(task => task.id === id) 
    }
    deleteTask(id: string){
        this.tasks = this.tasks.filter(task => task.id !==id)
    }
}
