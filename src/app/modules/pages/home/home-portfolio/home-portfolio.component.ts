import { Component, HostListener } from '@angular/core';

@Component({
  selector: 'app-home-portfolio',
  templateUrl: './home-portfolio.component.html',
  styleUrls: [
    './../../../../../assets/styling/animation.scss'
  ],
})
export class HomePortfolioComponent {

  slideOff: boolean = false;

  projects = {
    silverGlobe: {
      projectImg: './../../../../../assets/images/projects/SilverGlobeINZ.webp',
      projectRepository: 'https://github.com/KamilFilar/Silver-Globe-FRONT',
      projectLink: ''
    },
    filarDev: {
      projectImg: './../../../../../assets/images/projects/Filardev.webp',
      projectRepository: 'https://github.com/KamilFilar/FilarDev',
      projectLink: 'https://kamilfilar.herokuapp.com'
    },
    borys: {
      projectImg: './../../../../../assets/images/projects/BorysDev.webp',
      projectRepository: 'https://github.com/KamilFilar/BORYS-Developer-FRONT',
      projectLink: 'https://borysnieruchomosci.pl'
    },
    silverGlobeINZ: {
      projectImg: './../../../../../assets/images/projects/SilverGlobe.webp',
      projectRepository: 'https://github.com/KamilFilar/INZ-SilverGlobe-FRONT',
      projectLink: ''
    },
    pokedex: {
      projectImg: './../../../../../assets/images/projects/Pokedex.webp',
      projectRepository: 'https://github.com/KamilFilar/Pokedex',
      projectLink: ''
    },
    boredapp: {
      projectImg: './../../../../../assets/images/projects/Boredapp.webp',
      projectRepository: 'https://github.com/KamilFilar/BoredApp',
      projectLink: ''
    },
    mapApp: {
      projectImg: './../../../../../assets/images/projects/MapApp.webp',
      projectRepository: 'https://github.com/KamilFilar/Map-APP',
      projectLink: ''
    },
    loginApp: {
      projectImg: './../../../../../assets/images/projects/LoginApp.webp',
      projectRepository: 'https://github.com/KamilFilar/Login-App',
      projectLink: ''
    }
  };

  showAnimation(): boolean {
    return this.slideOff = JSON.parse(localStorage.getItem('portfolio-animation')!);
  }

  @HostListener('window:scroll', [])
  private onWindowScroll(): void {
    this.showAnimation();
  }
}
