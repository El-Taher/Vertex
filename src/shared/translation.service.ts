import { Injectable } from '@angular/core';
import { TranslateService } from '@ngx-translate/core';
import { BehaviorSubject, Observable } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class TranslationService {
  private currentLangSubject: BehaviorSubject<string> =
    new BehaviorSubject<string>('en');

  constructor(private translate: TranslateService) {
    this.translate.setDefaultLang('en');
    this.currentLangSubject.next('en');
  }

  setLanguage(lang: string) {
    this.translate.use(lang);
    document.documentElement.setAttribute('lang', lang);
    this.currentLangSubject.next(lang);
  }

  get language$(): Observable<string> {
    return this.currentLangSubject.asObservable();
  }

  get currentLanguage(): string {
    return this.currentLangSubject.value;
  }
}
