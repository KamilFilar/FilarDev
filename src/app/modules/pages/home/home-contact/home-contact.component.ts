import { Component, HostListener, OnInit } from '@angular/core';
import { faMailBulk, faPhone, faMapLocationDot, IconDefinition } from '@fortawesome/free-solid-svg-icons';

@Component({
  selector: 'app-home-contact',
  templateUrl: './home-contact.component.html',
  styleUrls: [
    './home-contact.component.scss',
    './../../../../../assets/styling/animation.scss'
  ]
})
export class HomeContactComponent implements OnInit {
  
  faMapLocationDot: IconDefinition = faMapLocationDot;
  faMailBulk: IconDefinition = faMailBulk;
  faPhone: IconDefinition = faPhone;
  
  imgPath: string = './../../../../../assets/images/other/two-dice.webp';
  
  slideOff: boolean = false;

  ngOnInit(): void {
    this.showAnimation();
  }

  @HostListener('window:scroll', [])
  private onWindowScroll(): void {
    this.showAnimation();
  }

  private showAnimation(): boolean {
    return this.slideOff = JSON.parse(localStorage.getItem('contact-animation')!);
  }
}
