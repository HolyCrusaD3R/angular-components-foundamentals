import { Component, signal } from '@angular/core';
import { CustomButton } from './custom-button/custom-button';

@Component({
  selector: 'app-root',
  imports: [CustomButton],
  templateUrl: './app.html',
  styleUrl: './app.css',
})
export class App {
  protected readonly title = signal('components');
}
