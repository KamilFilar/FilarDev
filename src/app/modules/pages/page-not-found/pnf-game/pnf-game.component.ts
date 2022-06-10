import { Component, OnInit, Renderer2 } from '@angular/core';
import { faAngleDoubleLeft, faArrowsRotate, IconDefinition } from '@fortawesome/free-solid-svg-icons';

@Component({
  selector: 'app-pnf-game',
  templateUrl: './pnf-game.component.html',
  styleUrls: ['./pnf-game.component.scss'],
})
export class PnfGameComponent implements OnInit {
  
  faArrowsRotate: IconDefinition = faArrowsRotate;
  faAngleDoubleLeft: IconDefinition = faAngleDoubleLeft;
  arrayValues: Array<number> = []; // there is shuffle values of arrayIndex
  arrayImages: Array<string> = [
    './../../../../../assets/images/game/angular.webp',
    './../../../../../assets/images/game/angular.webp',
    './../../../../../assets/images/game/vs.webp',
    './../../../../../assets/images/game/vs.webp',
    './../../../../../assets/images/game/vue.webp',
    './../../../../../assets/images/game/vue.webp',
    './../../../../../assets/images/game/js.webp',
    './../../../../../assets/images/game/js.webp',
    './../../../../../assets/images/game/react.webp',
    './../../../../../assets/images/game/react.webp',
    './../../../../../assets/images/game/scss.webp',
    './../../../../../assets/images/game/scss.webp',
  ];
  btnArrayDisbaled: Array<boolean> = [
    false, false, false, false, false, false, 
    false, false, false, false, false, false
  ];
  returnBtn = {
    href: '',
    show: false
  };

  private arrayIndex: Array<number> = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11];
  private selectedBtnIndex: Array<number> = [];
  private counter: number = 0;
  private valueCard = {
    first: '',
    second: '',
  };

  constructor(
    private renderer: Renderer2
  ) {}

  ngOnInit(): void {
    this.shuffleArray(this.arrayIndex);
  }

  resetGame(): void {
    this.resetAnimation();    
    // Get "random" order of cards
    this.shuffleArray(this.arrayIndex);
    // Set default value of cards to compare
    this.valueCard.first = '';
    this.valueCard.second = '';
    this.counter = 0;
    // Set stats to default
    for (let i = 0; i < this.btnArrayDisbaled.length; i++) {
      // Reset state
      this.btnArrayDisbaled[i] = false;
      // Remove hide from cards
      this.renderer.removeClass(
        document.getElementById(i.toString()),
        'hideButton'
      );
      // Remove visible
      this.renderer.removeClass(
        document.getElementById(i.toString()),
        'displayImg'
      );
      // Remove selected class
      this.renderer.removeClass(
        document.getElementById(i.toString()),
        'selectedCard'
      );
    }
  }

  setCard(imagePath: string): string {
    if (this.valueCard.first != '' && this.valueCard.second != '') {
      this.valueCard.first = '';
      this.valueCard.second = '';
    }
    return this.valueCard.first != ''
      ? (this.valueCard.second = imagePath)
      : (this.valueCard.first = imagePath);
  }

  compareCard(card1: any, card2: any): boolean {
    if (card1 == card2) return true;
    return false;
  }

  checkSelectedCards(): void {
    // Count how many btn is triggered
    for (let i = 0; i < this.btnArrayDisbaled.length; i++) {
      if (this.btnArrayDisbaled[i] == true) {
        this.counter++;
        break;
      }
    }

    // Two card is selected
    if (this.counter == 2) {
      // Reset selected btn index
      if(this.selectedBtnIndex.length == 2) {
        this.selectedBtnIndex = [];
      }  

      // Set sekected btn index and block remaining disbaled
      for (let i = 0; i < this.btnArrayDisbaled.length; i++) {
        if ( this.btnArrayDisbaled[i] == true) {
          this.selectedBtnIndex.push(i);
        }
        this.btnArrayDisbaled[i] = true;
      }

      // Compare cards
      let compareResult = this.compareCard(
        this.valueCard.first,
        this.valueCard.second
      );

      // Set default value of cards
      this.valueCard.first = '';
      this.valueCard.second = '';
      this.counter = 0;

      if (compareResult == true) {
        for (let j = 0; j < this.btnArrayDisbaled.length; j++) {
          if(j == this.selectedBtnIndex[0] || j == this.selectedBtnIndex[1]) {
            setTimeout(() => {
              // Hide this card
              this.renderer.addClass(
                document.getElementById(j.toString()),
                'hideButton'
              );
              // Remove unusfule class
              this.renderer.removeClass(
                document.getElementById(j.toString()),
                'displayImg'
              );
              // Remove selected class
              this.renderer.removeClass(
                document.getElementById(j.toString()),
                'selectedCard'
              );
              // Set default state of btns
              for (let i = 0; i < this.btnArrayDisbaled.length; i++) {
                this.btnArrayDisbaled[i] = false;
              }
              // Chcek is end of game
              this.isEndOfGame();
            }, 600);
          }
        }
      } 
      else {
        setTimeout(() => {
          // Reset all selected card
          for (let k = 0; k < this.btnArrayDisbaled.length; k++) {
            // Reset visible off cards
            this.renderer.removeClass(
              document.getElementById(k.toString()),
              'displayImg'
            );
            // Remove selected class
            this.renderer.removeClass(
              document.getElementById(k.toString()),
              'selectedCard'
            );
            // Reset state
            this.btnArrayDisbaled[k] = false;
          }
        }, 800);
      }
    }
  }

  // Trigger methods =(
  triggerBTN0(value: string): void {
    const element: HTMLElement = document.getElementById('0')!;
    this.renderer.addClass(element, 'displayImg');
    this.renderer.addClass(element, 'selectedCard');
    this.btnArrayDisbaled[0] = true;
    this.setCard(value);
    this.checkSelectedCards();
  }

  triggerBTN1(value: string): void {
    const element: HTMLElement = document.getElementById('1')!;
    this.renderer.addClass(element, 'displayImg');
    this.renderer.addClass(element, 'selectedCard');
    this.btnArrayDisbaled[1] = true;
    this.setCard(value);
    this.checkSelectedCards();
  }

  triggerBTN2(value: string): void {
    const element: HTMLElement = document.getElementById('2')!;
    this.renderer.addClass(element, 'displayImg');
    this.renderer.addClass(element, 'selectedCard');
    this.btnArrayDisbaled[2] = true;
    this.setCard(value);
    this.checkSelectedCards();
  }

  triggerBTN3(value: string): void {
    const element: HTMLElement = document.getElementById('3')!;
    this.renderer.addClass(element, 'displayImg');
    this.renderer.addClass(element, 'selectedCard');
    this.btnArrayDisbaled[3] = true;
    this.setCard(value);
    this.checkSelectedCards();
  }

  triggerBTN4(value: string): void {
    const element: HTMLElement = document.getElementById('4')!;
    this.renderer.addClass(element, 'displayImg');
    this.renderer.addClass(element, 'selectedCard');
    this.btnArrayDisbaled[4] = true;
    this.setCard(value);
    this.checkSelectedCards();
  }

  triggerBTN5(value: string): void {
    const element: HTMLElement = document.getElementById('5')!;
    this.renderer.addClass(element, 'displayImg');
    this.renderer.addClass(element, 'selectedCard');
    this.btnArrayDisbaled[5] = true;
    this.setCard(value);
    this.checkSelectedCards();
  }

  triggerBTN6(value: string): void {
    const element: HTMLElement = document.getElementById('6')!;
    this.renderer.addClass(element, 'displayImg');
    this.renderer.addClass(element, 'selectedCard');
    this.btnArrayDisbaled[6] = true;
    this.renderer.addClass(element, 'selectedCard');
    this.setCard(value);
    this.checkSelectedCards();
  }

  triggerBTN7(value: string): void {
    const element: HTMLElement = document.getElementById('7')!;
    this.renderer.addClass(element, 'displayImg');
    this.renderer.addClass(element, 'selectedCard');
    this.btnArrayDisbaled[7] = true;
    this.setCard(value);
    this.checkSelectedCards();
  }

  triggerBTN8(value: string): void {
    const element: HTMLElement = document.getElementById('8')!;
    this.renderer.addClass(element, 'displayImg');
    this.renderer.addClass(element, 'selectedCard');
    this.btnArrayDisbaled[8] = true;
    this.setCard(value);
    this.checkSelectedCards();
  }

  triggerBTN9(value: string): void {
    const element: HTMLElement = document.getElementById('9')!;
    this.renderer.addClass(element, 'displayImg');
    this.renderer.addClass(element, 'selectedCard');
    this.btnArrayDisbaled[9] = true;
    this.setCard(value);
    this.checkSelectedCards();
  }

  triggerBTN10(value: string): void {
    const element: HTMLElement = document.getElementById('10')!;
    this.renderer.addClass(element, 'displayImg');
    this.renderer.addClass(element, 'selectedCard');
    this.btnArrayDisbaled[10] = true;
    this.setCard(value);
    this.checkSelectedCards();
  }

  triggerBTN11(value: string): void {
    const element: HTMLElement = document.getElementById('11')!;
    this.renderer.addClass(element, 'displayImg');
    this.renderer.addClass(element, 'selectedCard');
    this.btnArrayDisbaled[11] = true;
    this.setCard(value);
    this.checkSelectedCards();
  }

  private shuffleArray(array: Array<number>): Array<number> {
    for (let i = array.length - 1; i > 0; i--) {
      const j = Math.floor(Math.random() * (i + 1));
      [array[i], array[j]] = [array[j], array[i]];
    }

    return this.arrayValues = array;
  }

  private isEndOfGame(): boolean {
    let counter: number = 0;
    for (let i = 0; i < this.btnArrayDisbaled.length; i++) {
      let element: HTMLElement = document.getElementById(i.toString())!;
      if(element?.classList.contains('hideButton')) {
        counter++
      }
    }
    
    return counter == 12 ? this.returnBtn.show = true : this.returnBtn.show = false;
  }

  private resetAnimation(): void {
    // Reset css animation
    const row1: HTMLElement = document.getElementById('gameRow--1')!;
    const row2: HTMLElement = document.getElementById('gameRow--2')!;
    const row3: HTMLElement = document.getElementById('gameRow--3')!;
    
    this.renderer.removeClass(row1, 'animationRow');
    this.renderer.removeClass(row2, 'animationRow');
    this.renderer.removeClass(row3, 'animationRow');
    
    setTimeout( () => {
      this.renderer.addClass(row1, 'animationRow');
      this.renderer.addClass(row2, 'animationRow');
      this.renderer.addClass(row3, 'animationRow');
    }, 50)
  }
}
