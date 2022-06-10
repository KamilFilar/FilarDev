import { Component, HostListener, Input, Renderer2 } from "@angular/core";

@Component({
  selector: "app-navbar-item",
  templateUrl: "./navbar-item.component.html",
  styleUrls: ["./navbar-item.component.scss"],
})
export class NavbarItemComponent {
  
  @Input() text: string = "";
  @Input() href: string = "";
  
  currentSection: number = 0; // 0 - default, 1 - portfolio, 2 - about me, 3 - contact
  currentURL: string = "http://localhost:4200/";

  constructor(
    private renderer: Renderer2
  ) {}

  // param position = currentSection in onWindowScroll(), method set active class in navbar
  isActive(position: number): void {
    if (position == 1) {
      this.renderer.addClass(
        document.getElementsByClassName("nav-link")[0],
        "active"
      );
      this.renderer.removeClass(
        document.getElementsByClassName("nav-link")[1],
        "active"
      );
      this.renderer.removeClass(
        document.getElementsByClassName("nav-link")[2],
        "active"
      );
    }
    if (position == 2) {
      this.renderer.removeClass(
        document.getElementsByClassName("nav-link")[0],
        "active"
      );
      this.renderer.addClass(
        document.getElementsByClassName("nav-link")[1],
        "active"
      );
      this.renderer.removeClass(
        document.getElementsByClassName("nav-link")[2],
        "active"
      );
    }
    if (position == 3) {
      this.renderer.removeClass(
        document.getElementsByClassName("nav-link")[0],
        "active"
      );
      this.renderer.removeClass(
        document.getElementsByClassName("nav-link")[1],
        "active"
      );
      this.renderer.addClass(
        document.getElementsByClassName("nav-link")[2],
        "active"
      );
    }
    if (position == 0) {
      this.renderer.removeClass(
        document.getElementsByClassName("nav-link")[0],
        "active"
      );
      this.renderer.removeClass(
        document.getElementsByClassName("nav-link")[1],
        "active"
      );
      this.renderer.removeClass(
        document.getElementsByClassName("nav-link")[2],
        "active"
      );
    }
  }

  // scroll to div (to specific positon)
  scrollToSection(target: string): void {

    // Get position of sections
    const portfolioPosition: number = document.getElementById("Portfolio")?.offsetTop! - 80;
    const aboutMePosition: number = document.getElementById("AboutMe")?.offsetTop! - 150;
    const contactPosition: number = document.getElementById("Contact")?.offsetTop! - 80;

    if (window.location.href != this.currentURL) {
      if (target == "Portfolio") {
        localStorage.setItem("force-scroll-portfolio", "true");
      } 
      else if (target == "AboutMe") {
        localStorage.setItem("force-scroll-aboutme", "true");
      } 
      else if (target == "Contact") {
        localStorage.setItem("force-scroll-contact", "true");
      }
      window.location.href = "";
    }

    // Scroll to current target
    if (target == "Portfolio") {
      window.scrollTo({ top: portfolioPosition, behavior: "smooth" });
    }
    else if (target == "AboutMe") {
      window.scrollTo({ top: aboutMePosition, behavior: "smooth" });
    }  
    else if (target == "Contact") {
      window.scrollTo({ top: contactPosition, behavior: "smooth" });
    }     
  }

  @HostListener("window:scroll", [])
  private onWindowScroll(): void {
    let currentPosition: number = window.scrollY;
    const portfolioPosition = document.getElementById("Portfolio")?.offsetTop! - 200;
    const aboutMePosition = document.getElementById("AboutMe")?.offsetTop! - 230;
    const contactPosition = document.getElementById("Contact")?.offsetTop! - 200;

    if ( currentPosition >= portfolioPosition && currentPosition <= aboutMePosition) {
      this.currentSection = 1;
    } 
    else if ( currentPosition >= aboutMePosition && currentPosition <= contactPosition) {
      this.currentSection = 2;
    } 
    else if (currentPosition >= contactPosition) {
      this.currentSection = 3;
    } 
    else if (currentPosition <= portfolioPosition) {
      this.currentSection = 0;
    }

    this.isActive(this.currentSection);
  }
}
