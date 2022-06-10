import { Component, OnInit } from '@angular/core';
import { faCheck, IconDefinition } from '@fortawesome/free-solid-svg-icons';

@Component({
  selector: 'app-home-about-me',
  templateUrl: './home-about-me.component.html',
  styleUrls: ['./home-about-me.component.scss']
})
export class HomeAboutMeComponent implements OnInit {

  faCheck: IconDefinition = faCheck;
  aboutMeVersion: string = '';

  ngOnInit(): void {
    this.checkVersionAboutMe();
  }

  checkVersionAboutMe(): string {
    return this.aboutMeVersion = localStorage.getItem('aboutMe')!;
  }

  // 3 methods to changing version of 'about me'
  setShort(): string {
    localStorage.setItem('aboutMe', 'short')
    return this.aboutMeVersion = 'short';
  }

  setSkills(): string {
    localStorage.setItem('aboutMe', 'skills')
    return this.aboutMeVersion = 'skills';
  }

  setLong(): string {
    localStorage.setItem('aboutMe', 'long')
    return this.aboutMeVersion = 'long';
  }
}
