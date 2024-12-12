import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';

@Component({
  selector: 'app-our-services-section',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './our-services-section.component.html',
  styleUrl: './our-services-section.component.css',
})
export class OurServicesSectionComponent {
  motionGraphic = true;
  infographic = false;
  whiteboard = false;

  onMotionGraphic() {
    this.motionGraphic = true;
    this.infographic = false;
    this.whiteboard = false;
  }
  onInfographic() {
    this.motionGraphic = false;
    this.infographic = true;
    this.whiteboard = false;
  }
  onWhiteboard() {
    this.motionGraphic = false;
    this.infographic = false;
    this.whiteboard = true;
  }
}
