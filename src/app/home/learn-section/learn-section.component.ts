import { Component } from '@angular/core';
import { TranslateModule } from '@ngx-translate/core';

@Component({
  selector: 'app-learn-section',
  standalone: true,
  imports: [TranslateModule],
  templateUrl: './learn-section.component.html',
  styleUrl: './learn-section.component.css',
})
export class LearnSectionComponent {
  items = ['Understanding', 'Types', 'How'];
}
