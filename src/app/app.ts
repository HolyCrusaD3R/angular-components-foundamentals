import { Component, signal } from '@angular/core';
import { Task } from './task/task';

@Component({
  selector: 'app-root',
  imports: [Task],
  templateUrl: './app.html',
  styleUrl: './app.css',
})
export class App {
  tasks = signal([
    {
      description: 'Buy Groceries',
      priority: 'High',
      id: 0,
    },
    {
      description: 'Buy a Bicycle',
      priority: 'High',
      id: 1,
    },
    {
      description: 'Fix the Computer',
      priority: 'Low',
      id: 2,
    },
    {
      description: 'Attend a Party',
      priority: 'High',
      id: 3,
    },
    {
      description: 'Study for Exams',
      priority: 'Low',
      id: 4,
    },
    {
      description: 'Feed the Dog',
      priority: 'High',
      id: 5,
    },
  ]);

  flipPriority(id: number) {
    this.tasks.update((tasks) =>
      tasks.map((t) => {
        if (t.id !== id) {
          return t;
        } else {
          if (t.priority === 'High') {
            t.priority = 'Low';
          } else {
            t.priority = 'High';
          }
          return t;
        }
      })
    );
  }
}
