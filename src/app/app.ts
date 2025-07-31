import { Component, signal } from '@angular/core';
// import { CustomButton } from './custom-button/custom-button';

import { Human } from './human/human';
import { Task } from './task/task';
import { Counter } from './counter/counter';

@Component({
  selector: 'app-root',
  imports: [Task],
  templateUrl: './app.html',
  styleUrl: './app.css',
})
export class App {
  // cities = ['Tbilisi', 'New York'];
  // defaultCity = 'Tbilisi';
  tasks = [
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
  ];
  flipTaskPriority(taskId: number) {
    const task = this.tasks.find((t) => t.id === taskId);
    if (task) {
      task.priority = task.priority === 'High' ? 'Low' : 'High';
    }
  }
}
