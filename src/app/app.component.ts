import { Component, OnInit } from '@angular/core';
import { TranslateService } from '@ngx-translate/core';
import { LoaderService } from './shared/services/loader.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
})
export class AppComponent implements OnInit {

  constructor(
    public translate: TranslateService,
    public loadService: LoaderService
  ) {
    translate.addLangs(['pl', 'en']);
    // Set default lang (PL)
    if (!localStorage.getItem('lang')) {
      localStorage.setItem('lang', 'pl');
      translate.setDefaultLang('pl');
    } 
    else if (localStorage.getItem('lang') != 'en' && localStorage.getItem('lang') != 'pl') {
      localStorage.setItem('lang', 'pl');
      translate.setDefaultLang('pl');
    } 
    else {
      translate.setDefaultLang(localStorage.getItem('lang')!);
    }
  }

  ngOnInit(): void {
    this.initAboutMe();
  }

  private initAboutMe(): void {
    if (!localStorage.getItem('aboutMe')) {
      localStorage.setItem('aboutMe', 'short');
    }
    else if (
      localStorage.getItem('aboutMe') != 'short' &&
      localStorage.getItem('aboutMe') != 'long' &&
      localStorage.getItem('aboutMe') != 'skills'
    ) {
      localStorage.setItem('aboutMe', 'short');
    }
  }
}
