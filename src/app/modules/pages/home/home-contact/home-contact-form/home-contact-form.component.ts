import { Component, ViewChild } from "@angular/core";
import { CdkTextareaAutosize } from "@angular/cdk/text-field";
import { TranslateService } from "@ngx-translate/core";
import Swal from "sweetalert2";
import { faEnvelopeOpenText , faXmark, IconDefinition} from "@fortawesome/free-solid-svg-icons";
import { EmailService } from "src/app/shared/services/email.service";

@Component({
  selector: "app-home-contact-form",
  templateUrl: "./home-contact-form.component.html",
  styleUrls: [
    "./home-contact-form.component.scss",
    "./../../../../../../assets/styling/materialStyles.scss",
  ],
})
export class HomeContactFormComponent {

  faEnvelopeOpenText: IconDefinition = faEnvelopeOpenText;
  faXmark: IconDefinition = faXmark;
  private typeOfEmail!: string;

  @ViewChild("autosize") autosize!: CdkTextareaAutosize;

  constructor(
    private emailService: EmailService,
    private translateService: TranslateService
  ) { }

  getCasue(value: string): string {
    if (value == 'one') return this.typeOfEmail = 'Oferta pracy';
    if (value == 'two') return this.typeOfEmail = 'Oferta współpracy';
    if (value == 'three') return this.typeOfEmail = 'Pomoc w projekcie';
    if (value == 'four') return this.typeOfEmail = 'Zwykła wiadomość';
    return this.typeOfEmail = 'undefined';
  }

  sendEamilFromUser(): void {
    const regexEmail: RegExp = /^(([^<>()[\]\.,;:\s@\"]+(\.[^<>()[\]\.,;:\s@\"]+)*)|(\".+\"))@(([^<>()[\]\.,;:\s@\"]+\.)+[^<>()[\]\.,;:\s@\"]{2,})$/i;

    let nameValueInput: string = document.getElementsByTagName('input')[1].value;
    let emailValueInput: string = document.getElementsByTagName('input')[2].value;
    let msgValueInput: string = document.getElementsByTagName('textarea')[0].value;
    
    // Valid email
    if (!emailValueInput.toLocaleLowerCase().match(regexEmail)) {
      // Open sweet alert
      Swal.fire({
        customClass: {
          confirmButton: 'sweet-alert-button-wrong',
          popup: "sweet-alert-popup-wrong"
        },
        titleText: this.translateService.instant('alert.wrong'),
        text: this.translateService.instant('alert.email'),
        buttonsStyling: false,
        icon: 'error',
        iconColor: 'rgb(220, 0, 0)',
        confirmButtonText: this.translateService.instant('alert.close')
      });

      return;
    }
    
    // If ok, send emial
    this.emailService.sendEmail(nameValueInput, emailValueInput, this.typeOfEmail, msgValueInput).subscribe({
      error: () => {
        Swal.fire({
          customClass: {
            confirmButton: 'sweet-alert-button-wrong',
            popup: "sweet-alert-popup-wrong"
          },
          titleText: this.translateService.instant('alert.wrong'),
          text: this.translateService.instant('alert.msgWrong'),
          buttonsStyling: false,
          icon: 'error',
          iconColor: 'rgb(220, 0, 0)',
          confirmButtonText: this.translateService.instant('alert.close')
        });
      },
      complete: () => {
        Swal.fire({
          customClass: {
            confirmButton: 'sweet-alert-button',
            popup: "sweet-alert-popup"
          },
          titleText: this.translateService.instant('alert.good'),
          text: this.translateService.instant('alert.msgGood'),
          buttonsStyling: false,
          icon: 'success',
          iconColor: 'rgb(110, 160, 0)',
          confirmButtonText: this.translateService.instant('alert.close')
        });
      } 
    })
  }
}
