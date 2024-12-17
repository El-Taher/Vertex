import { Component } from '@angular/core';
import { TranslateModule } from '@ngx-translate/core';

@Component({
  selector: 'app-users-section',
  standalone: true,
  imports: [TranslateModule],
  templateUrl: './users-section.component.html',
  styleUrl: './users-section.component.css',
})
export class UsersSectionComponent {
  items = [0, 1, 2, 3];
}
