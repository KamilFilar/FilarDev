import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-button-without-href',
  templateUrl: './button-without-href.component.html',
  styleUrls: ['./../button/button.component.scss']
})
export class ButtonWithoutHrefComponent {
  
  @Input() btnName: string  = '';

}
