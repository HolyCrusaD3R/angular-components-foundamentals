import { Component, input } from '@angular/core';

@Component({
  selector: 'app-human',
  imports: [],
  templateUrl: './human.html',
  styleUrl: './human.css',
})
export class Human {
  firstName = input<string>();
  lastName = input<string>();
  birthCity = input<string>();
}
