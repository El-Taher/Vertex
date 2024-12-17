import { Component } from '@angular/core';
import { TranslateModule } from '@ngx-translate/core';

@Component({
  selector: 'app-request-section',
  standalone: true,
  imports: [TranslateModule],
  templateUrl: './request-section.component.html',
  styleUrl: './request-section.component.css',
})
export class RequestSectionComponent {}
