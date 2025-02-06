import { ResolveFn } from '@angular/router';
import { Observable, tap } from 'rxjs';
import { inject } from '@angular/core';
import { Task } from '../../models/task.class';
import { Crud } from '../../../shared/interface/crud.interface';
import { TASK_SERVICE_TOKEN } from '../tokens/task-service.token';

export const tasksResolver: ResolveFn<Task[]> = (): Observable<Task[]> => {
    const userService = inject<Crud<Task>>(TASK_SERVICE_TOKEN);
    return userService.getAll();
};