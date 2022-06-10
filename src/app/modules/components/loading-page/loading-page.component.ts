import { Component } from '@angular/core';

@Component({
  selector: 'app-loading-page',
  templateUrl: './loading-page.component.html',
  styleUrls: ['./loading-page.component.scss']
})
export class LoadingPageComponent {

  numberOfPoints: Array<any> = [];
  loadingArr: Array<string> = ['L', 'O', 'A', 'D', 'I', 'N', 'G'];

  constructor() {
    this.numberOfPoints.length = 20;
  }

}
