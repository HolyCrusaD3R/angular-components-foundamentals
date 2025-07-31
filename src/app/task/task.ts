import { Component, input, output } from '@angular/core';

@Component({
  selector: 'app-task',
  imports: [],
  templateUrl: './task.html',
  styleUrl: './task.css',
})
export class Task {
  priority = input<string>();
  description = input<string>();
  taskId = input<number>();

  taskClick = output<number>();

  onTaskClick() {
    const id = this.taskId();
    if (id !== undefined) {
      console.log('Task clicked, ID:', id);
      this.taskClick.emit(id);
    }
  }
}
