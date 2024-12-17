import { Component } from '@angular/core';
import { RouterLink, RouterModule } from '@angular/router';
import { CommonModule } from '@angular/common';
import { TranslateModule } from '@ngx-translate/core';

import { TranslationService } from '../../shared/translation.service';

@Component({
  selector: 'app-header',
  standalone: true,
  imports: [RouterLink, RouterModule, TranslateModule, CommonModule],
  templateUrl: './header.component.html',
  styleUrl: './header.component.css',
})
export class HeaderComponent {
  isRtl: boolean = false;
  isArabic: boolean = false;
  constructor(private translationService: TranslationService) {}

  ngOnInit() {
    this.translationService.language$.subscribe((lang) => {
      this.isRtl = lang === 'ar';
      this.isArabic = lang === 'ar';
    });
    this.isRtl = this.translationService.currentLanguage === 'ar';
    this.isArabic = this.translationService.currentLanguage === 'ar';
  }

  switchLanguage(lang: string) {
    this.translationService.setLanguage(lang);
  }
}
