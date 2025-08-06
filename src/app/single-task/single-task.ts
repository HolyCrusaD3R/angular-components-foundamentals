import { Component, OnInit, inject, signal, computed } from '@angular/core';
import { ActivatedRoute, Router, RouterLink } from '@angular/router';
import { CommonModule } from '@angular/common';
import { TaskService } from '../task';
// import { Task } from '../task/task';

@Component({
  selector: 'app-single-task',
  standalone: true,
  imports: [CommonModule, RouterLink],
  templateUrl: './single-task.html',
  styleUrl: './single-task.css',
})
export class SingleTaskComponent implements OnInit {
  private route = inject(ActivatedRoute);
  private taskService = inject(TaskService);

  private taskId = signal<number | null>(null);

  task = computed(() => {
    const id = this.taskId();
    return id !== null ? this.taskService.getTask(id) : null;
  });

  ngOnInit() {
    const id = Number(this.route.snapshot.paramMap.get('id'));
    this.taskId.set(id);
  }

  togglePriority() {
    const currentTask = this.task();
    if (currentTask) {
      this.taskService.flipPriority(currentTask.id);
    }
  }
}
