import { TaskStatus } from "../task.entity";

export class createTaskDto {
    title: string
    description: string
    status: TaskStatus
}

export class UpdateTaskDto {
    title?: string;
    description?: string;
    status?: TaskStatus;
}