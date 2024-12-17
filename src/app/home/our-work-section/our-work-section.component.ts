import { Component } from '@angular/core';
import { TranslateModule } from '@ngx-translate/core';

@Component({
  selector: 'app-our-work-section',
  standalone: true,
  imports: [TranslateModule],
  templateUrl: './our-work-section.component.html',
  styleUrl: './our-work-section.component.css',
})
export class OurWorkSectionComponent {
  items = [0, 1, 2, 3, 4];
}
