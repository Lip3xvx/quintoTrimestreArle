import { TaskStatus } from "../task.entity";
export declare class createTaskDto {
    title: string;
    description: string;
    status: TaskStatus;
}
export declare class UpdateTaskDto {
    title?: string;
    description?: string;
    status?: TaskStatus;
}
