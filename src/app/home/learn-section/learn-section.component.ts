import { Component } from '@angular/core';

@Component({
  selector: 'app-learn-section',
  standalone: true,
  imports: [],
  templateUrl: './learn-section.component.html',
  styleUrl: './learn-section.component.css',
})
export class LearnSectionComponent {
  items = [
    'Understanding 2D motion graphics.',
    'Types of 2D motion graphics.',
    'How 2D motion graphics improve brand awareness.',
  ];
}
