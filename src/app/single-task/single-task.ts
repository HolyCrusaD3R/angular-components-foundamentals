import { Component, OnInit, inject, signal } from '@angular/core';
import { ActivatedRoute, RouterLink } from '@angular/router';
import { TaskComponent } from '../task/task';
import { Task } from '../interface/task';

@Component({
  selector: 'app-single-task',
  standalone: true,
  imports: [RouterLink, TaskComponent],
  template: `
    @if (task()) {
    <div class="single-task">
      <h2>Task Details</h2>

      <app-task [task]="task()" />
      <button [routerLink]="'/'">Back to All Tasks</button>
    </div>
    } @else {
    <h2>Task not found</h2>
    }
  `,
})
export class SingleTask implements OnInit {
  private route = inject(ActivatedRoute);

  task = signal<any>(null);
  tasks = signal<Task[]>([
    { description: 'Buy Groceries', priority: 'High' as const, id: 0 },
    { description: 'Buy a Bicycle', priority: 'High' as const, id: 1 },
    { description: 'Fix the Computer', priority: 'Low' as const, id: 2 },
    { description: 'Attend a Party', priority: 'High' as const, id: 3 },
    { description: 'Study for Exams', priority: 'Low' as const, id: 4 },
    { description: 'Feed the Dog', priority: 'High' as const, id: 5 },
  ]);

  ngOnInit() {
    const id = Number(this.route.snapshot.paramMap.get('id'));
    const foundTask = this.tasks().find((t) => t.id === id);
    this.task.set(foundTask || null);
  }
}
