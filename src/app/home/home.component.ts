import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';

import { HomeHeaderComponent } from './home-header/home-header.component';
import { OurVisionSectionComponent } from './our-vision-section/our-vision-section.component';
import { OurServicesSectionComponent } from './our-services-section/our-services-section.component';
import { OurWorkSectionComponent } from './our-work-section/our-work-section.component';
import { UsersSectionComponent } from './users-section/users-section.component';
import { WhyUsSectionComponent } from './why-us-section/why-us-section.component';
import { LearnSectionComponent } from './learn-section/learn-section.component';
import { RequestSectionComponent } from './request-section/request-section.component';
import { TranslationService } from '../../shared/translation.service';

@Component({
  selector: 'app-home',
  standalone: true,
  imports: [
    HomeHeaderComponent,
    OurVisionSectionComponent,
    OurServicesSectionComponent,
    OurWorkSectionComponent,
    UsersSectionComponent,
    WhyUsSectionComponent,
    LearnSectionComponent,
    RequestSectionComponent,
    CommonModule,
  ],
  templateUrl: './home.component.html',
  styleUrl: './home.component.css',
})
export class HomeComponent implements OnInit {
  isRtl: boolean = false;

  constructor(private translationService: TranslationService) {}

  ngOnInit() {
    this.translationService.language$.subscribe((lang) => {
      this.isRtl = lang === 'ar';
    });
    this.isRtl = this.translationService.currentLanguage === 'ar';
  }
}
