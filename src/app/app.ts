import { Component, signal } from '@angular/core';
// import { CustomButton } from './custom-button/custom-button';

import { Human } from './human/human';

@Component({
  selector: 'app-root',
  imports: [Human],
  templateUrl: './app.html',
  styleUrl: './app.css',
})
export class App {
  protected readonly title = signal('components');
  cities = ['Tbilisi', 'New York'];
  defaultCity = 'Tbilisi';
}
