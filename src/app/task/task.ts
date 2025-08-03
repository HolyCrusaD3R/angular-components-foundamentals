import { Component, input, output } from '@angular/core';
import { Task } from '../interface/Task';

@Component({
  selector: 'app-task',
  imports: [],
  templateUrl: './task.html',
  styleUrl: './task.css',
})
export class TaskComponent {
  task = input<Task>();

  taskClick = output<number>();

  onTaskClick() {
    const currentTask = this.task();
    console.log('Clicked Task With ID: ', currentTask?.id);
    if (currentTask?.id !== undefined) {
      this.taskClick.emit(currentTask.id);
    }
  }
}
