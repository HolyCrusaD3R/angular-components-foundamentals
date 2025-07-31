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
  id = input<number>();

  taskClick = output<number>();

  onTaskClick() {
    const id = this.id();
    console.log('Clicked Task With ID: ', id);
    if (id !== undefined) {
      this.taskClick.emit(id);
    }
  }
}
