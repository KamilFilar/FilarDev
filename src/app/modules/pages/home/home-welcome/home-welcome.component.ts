import { Component } from '@angular/core';

@Component({
  selector: 'app-home-welcome',
  templateUrl: './home-welcome.component.html',
  styleUrls: [
    './home-welcome.component.scss',
    './../../../../../assets/styling/animation.scss'
  ],
})
export class HomeWelcomeComponent {
  
  btn = {
    aboutMe: "AboutMe",
    portfolio: "Portfolio"
  }

  scrollToSection(target: string): void {
    const portfolioPosition: number = document.getElementById('Portfolio')?.offsetTop! - 80;
    const aboutMePosition: number = document.getElementById('AboutMe')?.offsetTop! - 150;
    
    if(target == 'Portfolio')
      window.scrollTo({top: portfolioPosition, behavior: 'smooth'});
    if(target == 'AboutMe') 
      window.scrollTo({top: aboutMePosition, behavior: 'smooth'});
  }
}
