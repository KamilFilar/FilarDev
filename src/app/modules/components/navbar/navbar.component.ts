import { Component, OnInit, Inject, Renderer2 } from "@angular/core";
import { Router } from "@angular/router";
import { DOCUMENT } from "@angular/common";
import {
  faGears,
  faBarsStaggered,
  IconDefinition,
} from "@fortawesome/free-solid-svg-icons";
import { TranslateService } from "@ngx-translate/core";

@Component({
  selector: "app-navbar",
  templateUrl: "./navbar.component.html",
  styleUrls: ["./navbar.component.scss"],
})
export class NavbarComponent implements OnInit {
  faBarsStaggered: IconDefinition = faBarsStaggered;
  faGears: IconDefinition = faGears;
  hrefToSections = {
    aboutMe: "AboutMe",
    portfolio: "Portfolio",
    contact: "Contact",
  };
  plFlagPath: string = "./../../../../assets/images/pl-flag.webp";
  enFlagPath: string = "./../../../../assets/images/en-flag.webp";
  toggleBtnSelected = false;
  theme: string = '';

  constructor(
    @Inject(DOCUMENT) private document: Document,
    private renderer: Renderer2,
    private translate: TranslateService,
    private router: Router
  ) {}

  setLangEN(): void {
    localStorage.setItem("lang", "en");
    this.translate.use("en");
  }

  setLangPL(): void {
    localStorage.setItem("lang", "pl");
    this.translate.use("pl");
  }

  initializeTheme(): void {
    // Get current theme
    this.theme = localStorage.getItem("theme")!;
    
    if (this.theme === undefined || this.theme === '') {
      localStorage.setItem("theme", "dark-theme");
      this.theme = "dark-theme"; // set dark-theme as default
      this.renderer.addClass(this.document.body, this.theme);
    } 
    else {
      this.renderer.addClass(this.document.body, this.theme);
    }
  }

  toggleTheme(): void {
    this.document.body.classList.replace(
      this.theme,
      this.theme === "light-theme"
        ? (this.theme = "dark-theme")
        : (this.theme = "light-theme")
    );
    return localStorage.setItem("theme", this.theme);
  }

  setToggleBtnState(): boolean {
    if (localStorage.getItem("theme") == "dark-theme") 
      return this.toggleBtnSelected = true;
    return this.toggleBtnSelected = false;
  }

  setLogoBehaviour(): void {
    this.router.url == "/" || this.router.url == ""
      ? window.scrollTo({ top: 0, behavior: "smooth" })
      : (window.location.href = "");
  }

  ngOnInit(): void {
    this.initializeTheme();
    this.setToggleBtnState();
  }
}
