import { Component, OnInit } from '@angular/core';
import { faScrewdriverWrench, faLaptopCode, IconDefinition } from '@fortawesome/free-solid-svg-icons';
import { faSketch } from '@fortawesome/free-brands-svg-icons';

@Component({
  selector: 'app-about-me-skills',
  templateUrl: './about-me-skills.component.html',
  styleUrls: ['./about-me-skills.component.scss']
})
export class AboutMeSkillsComponent {
  
  faScrewdriverWrench: IconDefinition = faScrewdriverWrench;
  faSketch: IconDefinition = faSketch;
  faLaptopCode: IconDefinition = faLaptopCode;
  
  frontEndArr: Array<string> = ['HTML', 'CSS / SCSS', 'Angular', 'Angular Material', 'Vue', 'React', 'RWD', 'Pixel perfect', 'Bootstrap'];
  backEndArr: Array<string> = ['JavaScript', 'TypeScript', 'NodeJS', 'Express', 'REST API', 'SQL', 'NPM'];
  otherArr: Array<string> = ['Webpack', 'GitHub / GitLab', 'Figma', 'AdobeXD', 'Gimp', 'SEO 🤔', 'Soft skills'];
}
