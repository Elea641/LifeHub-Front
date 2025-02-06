import { InjectionToken } from '@angular/core';
import { Crud } from '../../../shared/interface/crud.interface';
import { Task } from '../../models/task.class';

export const TASK_SERVICE_TOKEN = new InjectionToken<Crud<Task>>('TaskServiceToken');
