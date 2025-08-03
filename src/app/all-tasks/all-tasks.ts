import { Component, signal } from '@angular/core';
import { TaskComponent } from '../task/task';
import { RouterLink } from '@angular/router';

import { Task } from '../interface/task';

@Component({
  selector: 'app-all-tasks',
  imports: [TaskComponent, RouterLink],
  templateUrl: './all-tasks.html',
  styleUrl: './all-tasks.css',
})
export class AllTasks {
  tasks = signal<Task[]>([
    { description: 'Buy Groceries', priority: 'High' as const, id: 0 },
    { description: 'Buy a Bicycle', priority: 'High' as const, id: 1 },
    { description: 'Fix the Computer', priority: 'Low' as const, id: 2 },
    { description: 'Attend a Party', priority: 'High' as const, id: 3 },
    { description: 'Study for Exams', priority: 'Low' as const, id: 4 },
    { description: 'Feed the Dog', priority: 'High' as const, id: 5 },
  ]);
  // flipPriority(id: number) {
  //   this.tasks.update((tasks) =>
  //     tasks.map((t) => {
  //       if (t.id !== id) {
  //         return t;
  //       } else {
  //         if (t.priority === 'High') {
  //           t.priority = 'Low';
  //         } else {
  //           t.priority = 'High';
  //         }
  //         return t;
  //       }
  //     })
  //   );
  // }
}
