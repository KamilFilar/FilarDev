import { Component, Input, OnInit } from '@angular/core';
import { faGithub } from '@fortawesome/free-brands-svg-icons';
import { faEarthEurope } from '@fortawesome/free-solid-svg-icons';

@Component({
  selector: 'app-portfolio-item',
  templateUrl: './portfolio-item.component.html',
  styleUrls: ['./portfolio-item.component.scss']
})

export class PortfolioItemComponent implements OnInit {
  @Input() projectTitle = '';
  @Input() projectDescription = '';
  @Input() projectStack = '';
  @Input() projectImg = '';
  @Input() projectRepository = '';
  @Input() projectLink = '';
  faGithub = faGithub;
  faEarthEurope = faEarthEurope;
  btn = {
    nameGit: 'Github',
    nameGitAPI: 'Github API',
    nameSite: 'Strona projektu',
    target: '_blank',
    engineerAPIGit: 'https://github.com/KamilFilar/INZ-SilverGlobe-API',
    silverGlobeAPIGit: 'https://github.com/KamilFilar/Silver-Globe-API'
  }

  constructor() { }

  isEngineerThesisProject() {
    return (this.projectTitle == 'SrebrnyGlob - praca inżynierska' || this.projectTitle == 'SilverGlob - engineering work') ? true : false;;
  }

  isSilverGlobProject() {
    return (this.projectTitle == 'SilverGlob' || this.projectTitle == 'SrebrnyGlob') ? true : false;
  }

  ngOnInit(): void {
  }

}
