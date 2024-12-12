import { Component } from '@angular/core';

@Component({
  selector: 'app-users-section',
  standalone: true,
  imports: [],
  templateUrl: './users-section.component.html',
  styleUrl: './users-section.component.css',
})
export class UsersSectionComponent {
  items = [0, 1, 2, 3];
}
