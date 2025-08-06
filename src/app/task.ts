import { Injectable, signal, computed } from '@angular/core';
import { Task } from './interface/task';

@Injectable({
  providedIn: 'root',
})
export class TaskService {
  private tasks = signal<Task[]>([
    { description: 'Buy Groceries', priority: 'High' as const, id: 0 },
    { description: 'Buy a Bicycle', priority: 'High' as const, id: 1 },
    { description: 'Fix the Computer', priority: 'Low' as const, id: 2 },
    { description: 'Attend a Party', priority: 'High' as const, id: 3 },
    { description: 'Study for Exams', priority: 'Low' as const, id: 4 },
    { description: 'Feed the Dog', priority: 'High' as const, id: 5 },
  ]);

  public readonly allTasks = this.tasks.asReadonly();

  getTask(id: number): Task | undefined {
    return this.tasks().find((task) => task.id === id);
  }

  flipPriority(id: number): void {
    this.tasks.update((tasks) =>
      tasks.map((task) => {
        if (task.id !== id) return task;

        return {
          ...task,
          priority:
            task.priority === 'High' ? ('Low' as const) : ('High' as const),
        };
      })
    );
  }

  addTask(description: string, priority: 'High' | 'Low'): void {
    const newId = Math.max(...this.tasks().map((t) => t.id)) + 1;
    this.tasks.update((tasks) => [
      ...tasks,
      { id: newId, description, priority },
    ]);
  }

  deleteTask(id: number): void {
    this.tasks.update((tasks) => tasks.filter((task) => task.id !== id));
  }

  updateTask(id: number, updates: Partial<Omit<Task, 'id'>>): void {
    this.tasks.update((tasks) =>
      tasks.map((task) => (task.id === id ? { ...task, ...updates } : task))
    );
  }
}
