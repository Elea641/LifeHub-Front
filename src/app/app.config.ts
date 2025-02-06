import { ApplicationConfig, provideZoneChangeDetection } from '@angular/core';
import { provideRouter } from '@angular/router';

import { routes } from './app.routes';
import { provideHttpClient } from '@angular/common/http';
import { TaskService } from './task/shared/task.service';
import { TASK_SERVICE_TOKEN } from './task/shared/tokens/task-service.token';

export const appConfig: ApplicationConfig = {
  providers: [
    provideZoneChangeDetection({ eventCoalescing: true }),
    provideRouter(routes),
    provideHttpClient(),
    { provide: TASK_SERVICE_TOKEN, useClass: TaskService }
  ],
};
