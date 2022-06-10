import { Component, Input } from '@angular/core';
import { IconProp } from '@fortawesome/fontawesome-svg-core';

@Component({
  selector: 'app-footer-social-media',
  templateUrl: './footer-social-media.component.html',
  styleUrls: ['./footer-social-media.component.scss']
})
export class FooterSocialMediaComponent {
  
  @Input() socialIcon!: IconProp;
  @Input() socialHref: string = '';
  @Input() socialText: string = '';

}
