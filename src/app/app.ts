import { Component, signal } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { AllTasks } from './all-tasks/all-tasks';

@Component({
  selector: 'app-root',
  imports: [AllTasks, RouterOutlet],
  templateUrl: './app.html',
  styleUrl: './app.css',
})
export class App {}
