import { Routes } from '@angular/router';
import { DashboardPageComponent } from './dashboard/pages/dashboard-page/dashboard-page.component';
//import { tasksResolver } from './task/shared/resolvers/tasks.resolver';

export const routes: Routes = [
    { path: '**', redirectTo: '' },
    {
        path: '',
        component: DashboardPageComponent,
        resolve: {
            //task: tasksResolver,
        },
    }
];
