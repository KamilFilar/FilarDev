import { Component, Input, OnInit } from '@angular/core';
import { faGithub } from '@fortawesome/free-brands-svg-icons';
import { faEarthEurope } from '@fortawesome/free-solid-svg-icons';

@Component({
  selector: 'app-reverse-portfolio-item',
  templateUrl: './reverse-portfolio-item.component.html',
  styleUrls: ['./reverse-portfolio-item.component.scss']
})

export class ReversePortfolioItemComponent implements OnInit {
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
    engineerAPIGit: 'https://github.com/KamilFilar/INZ-SilverGlobe-API'
  }

  constructor() { }

  isEngineerThesisProject() {
    return this.projectTitle == 'SrebrnyGlob - praca inżynierska' ? true : false;
  }

  isProjectWithoutHostnig() {
    return this.projectLink == '' ? true : false;
  }

  ngOnInit(): void {
  }

}
