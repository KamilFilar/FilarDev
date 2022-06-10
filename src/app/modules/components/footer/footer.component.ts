import { Component } from '@angular/core';
import { faFacebook, faLinkedinIn, faGithub, IconDefinition } from '@fortawesome/free-brands-svg-icons';

@Component({
  selector: 'app-footer',
  templateUrl: './footer.component.html',
  styleUrls: ['./footer.component.scss']
})
export class FooterComponent {
  
  faFacebook: IconDefinition = faFacebook;
  faLinkedinIn: IconDefinition = faLinkedinIn;
  faGithub: IconDefinition = faGithub;
  socialMedia = {
    git: {
      name: 'github',
      href: 'https://github.com/KamilFilar'
    },
    fb: {
      name: 'facebook',
      href: 'https://facebook.com/kamilfilar'
    },
    linked: {
      name: 'linkedin',
      href: 'https://linkedin.com/in/kamil-filar'
    }
  }

}
