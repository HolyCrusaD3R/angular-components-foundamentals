import { Component, inject } from '@angular/core';
import { Router, RouterLink } from '@angular/router';
import { TaskComponent } from '../task/task';
import { TaskService } from '../task';

@Component({
  selector: 'app-all-tasks',
  imports: [TaskComponent, RouterLink],
  templateUrl: './all-tasks.html',
  styleUrl: './all-tasks.css',
})
export class AllTasks {
  private taskService = inject(TaskService);

  tasks = this.taskService.allTasks;
}
