import { Task, TaskStatus } from './task.entity';
import { UpdateTaskDto } from './dto/task.dto';
export declare class TasksService {
    private tasks;
    getAllTasks(): Task[];
    createTask(title: string, description: string): {
        id: string;
        title: string;
        description: string;
        status: TaskStatus;
    };
    updateTask(id: string, updateFields: UpdateTaskDto): Task;
    getTaskById(id: string): Task;
    deleteTask(id: string): void;
}
