import { Routes } from '@angular/router';
import { AllTasks } from './all-tasks/all-tasks';
import { SingleTask } from './single-task/single-task';

export const routes: Routes = [
  {
    path: '',
    title: 'Home',
    component: AllTasks,
  },
  {
    path: 'task/:id',
    title: 'Task Details',
    component: SingleTask,
  },
];
