import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
// import font-awasome
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';
// import ngx-translate
import { TranslateLoader, TranslateModule } from '@ngx-translate/core';
import { TranslateHttpLoader } from '@ngx-translate/http-loader';
// import http-loader
import { HttpClient, HttpClientModule, HTTP_INTERCEPTORS } from '@angular/common/http';
// import sweet-alerts2
import { SweetAlert2Module } from '@sweetalert2/ngx-sweetalert2';
// import pages
import { PageNotFoundComponent } from './modules/pages/page-not-found/page-not-found.component';
import { HomeComponent } from './modules/pages/home/home.component';
import { HomeWelcomeComponent } from './modules/pages/home/home-welcome/home-welcome.component';
import { HomeAboutMeComponent } from './modules/pages/home/home-about-me/home-about-me.component';
import { AboutMeAvatarComponent } from './modules/pages/home/home-about-me/about-me-avatar/about-me-avatar.component';
import { AboutMeSkillsComponent } from './modules/pages/home/home-about-me/about-me-skills/about-me-skills.component';
import { HomeContactComponent } from './modules/pages/home/home-contact/home-contact.component';
import { HomeContactFormComponent } from './modules/pages/home/home-contact/home-contact-form/home-contact-form.component';
import { HomePortfolioComponent } from './modules/pages/home/home-portfolio/home-portfolio.component';
import { PortfolioItemComponent } from './modules/pages/home/home-portfolio/portfolio-item/portfolio-item.component';
import { ReversePortfolioItemComponent } from './modules/pages/home/home-portfolio/reverse-portfolio-item/reverse-portfolio-item.component';
// import components
import { FooterComponent } from './modules/components/footer/footer.component';
import { FooterSocialMediaComponent } from './modules/components/footer/footer-social-media/footer-social-media.component';
import { FooterCopyrightComponent } from './modules/components/footer/footer-copyright/footer-copyright.component';
import { NavbarComponent } from './modules/components/navbar/navbar.component';
import { NavbarItemComponent } from './modules/components/navbar/navbar-item/navbar-item.component';
import { ButtonComponent } from './modules/components/button/button.component';
import { ButtonWithoutHrefComponent } from './modules/components/button-without-href/button-without-href.component';
// import angular material
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MaterialModule } from './modules/angular-material/material.module';
import { PnfGameComponent } from './modules/pages/page-not-found/pnf-game/pnf-game.component';
import { LoadingPageComponent } from './modules/components/loading-page/loading-page.component';
import { InterceptorService } from './shared/services/interceptor.service';
import { HomeWelcomeGalleryComponent } from './modules/pages/home/home-welcome/home-welcome-gallery/home-welcome-gallery.component';

@NgModule({
  declarations: [
    AppComponent,
    // Pages
    PageNotFoundComponent,
    HomeComponent,
    HomeWelcomeComponent,
    // Components
    FooterComponent,
    FooterSocialMediaComponent,
    FooterCopyrightComponent,
    NavbarComponent,
    NavbarItemComponent,
    ButtonComponent,
    ButtonWithoutHrefComponent,
    HomePortfolioComponent,
    PortfolioItemComponent,
    ReversePortfolioItemComponent,
    HomeAboutMeComponent,
    AboutMeAvatarComponent,
    AboutMeSkillsComponent,
    HomeContactFormComponent,
    HomeContactComponent,
    // Modals
    PnfGameComponent,
    LoadingPageComponent,
    HomeWelcomeGalleryComponent 
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FontAwesomeModule,
    // angular material
    BrowserAnimationsModule,
    MaterialModule,
    // sweetalert2
    SweetAlert2Module.forRoot(),
    // ngx-translate and the loader modul
    HttpClientModule,
    TranslateModule.forRoot({
      loader: {
        provide: TranslateLoader,
        useFactory: HttpLoaderFactory,
        deps: [HttpClient],
      },
    })
  ],
  providers: [
    {provide: HTTP_INTERCEPTORS, useClass: InterceptorService, multi: true}
  ],
  bootstrap: [AppComponent],
})
export class AppModule {}

// required for AOT compilation
export function HttpLoaderFactory(http: HttpClient): TranslateHttpLoader {
  return new TranslateHttpLoader(http);
}
