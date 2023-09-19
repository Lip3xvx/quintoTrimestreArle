import { TasksService } from './tasks.service';
import { UpdateTaskDto, createTaskDto } from './dto/task.dto';
export declare class TasksController {
    private tasksService;
    constructor(tasksService: TasksService);
    getAllTasks(): import("./task.entity").Task[];
    createTask(newTask: createTaskDto): void;
    deleteTask(id: string): void;
    updateTask(id: string, updateFields: UpdateTaskDto): import("./task.entity").Task;
}
