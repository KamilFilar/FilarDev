import { Component, HostListener, OnInit } from '@angular/core';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
})
export class HomeComponent implements OnInit {
  
  private animationDone = {
    portfolio: false,
    contact: false
  };

  private shouldScroll(): void {
    if (localStorage.getItem('force-scroll-portfolio') == 'true') {
      const portfolioPosition: number = document.getElementById('Portfolio')?.offsetTop! - 80;
      localStorage.setItem('force-scroll-portfolio', 'false');
      window.scrollTo({top: portfolioPosition, behavior: 'smooth'});
    }
    else if (localStorage.getItem('force-scroll-aboutme') == 'true') {
      const aboutMePosition: number = document.getElementById('AboutMe')?.offsetTop! - 150;
      localStorage.setItem('force-scroll-aboutme', 'false');
      window.scrollTo({top: aboutMePosition, behavior: 'smooth'});
    }
    else if (localStorage.getItem('force-scroll-contact') == 'true') {
      const contactPosition: number = document.getElementById('Contact')?.offsetTop! + 50;
      localStorage.setItem('force-scroll-contact', 'false');
      window.scrollTo({top: contactPosition, behavior: 'smooth'});
    }
  }

  @HostListener('window:scroll', [])
  private onWindowScroll(): void {
    let currentPosition: number = window.scrollY;
    let portfolioPosition: number = document.getElementById('Portfolio')?.offsetTop! - 700;
    let contactPosition: number = document.getElementById('Contact')?.offsetTop! - 900;  

    if (
      currentPosition >= portfolioPosition &&
      this.animationDone.portfolio == false
    ) {
      this.animationDone.portfolio = true;
      localStorage.setItem('portfolio-animation', 'true');
    }  
    else if (
      currentPosition >= contactPosition &&
      this.animationDone.contact == false
    ) {
      this.animationDone.contact = true;
      localStorage.setItem('contact-animation', 'true');
    }
  }

  ngOnInit(): void {
    localStorage.setItem('portfolio-animation', 'false');
    localStorage.setItem('contact-animation', 'false');
    this.shouldScroll();
  }
}
