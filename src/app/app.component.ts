import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { CommonModule } from '@angular/common';
import { HeaderComponent } from './components/header/header.component';
import { FooterComponent } from './components/footer/footer.component';
import { HomeComponent } from './pages/home/home.component';
import { HttpClientModule, HttpClient } from '@angular/common/http';
import { TranslateModule, TranslateService, TranslateLoader } from '@ngx-translate/core';
import { TranslateHttpLoader } from '@ngx-translate/http-loader';
import * as AOS from 'aos';
export function HttpLoaderFactory(http: HttpClient) {
  return new TranslateHttpLoader(http, './assets/i18n/', '.json');
}

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [
    CommonModule,
    RouterOutlet,
    HeaderComponent,
    FooterComponent,
    HomeComponent,
    HttpClientModule,
    TranslateModule
  ],
  template: `
    <div class="app-container">
      <app-header></app-header>
      <main>
        <router-outlet></router-outlet>
      </main>
      <app-footer></app-footer>
    </div>
  `,
  styles: [`
    .app-container {
      display: flex;
      flex-direction: column;
      min-height: 100vh;
    }
    main {
      flex: 1;
    }
    .lang-switcher {
      display: flex;
      gap: 1rem;
      justify-content: flex-end;
      padding: 1rem;
    }
    .lang-switcher button {
      padding: 0.5rem 1rem;
      border: none;
      background: #1976d2;
      color: white;
      border-radius: 4px;
      cursor: pointer;
    }
    .lang-switcher button:hover {
      background: #125ea2;
    }
  `]
})
export class App {
  constructor(public translate: TranslateService) {
    translate.addLangs(['fr', 'ar']);
    translate.setDefaultLang('fr');
    translate.use('fr');
  }
  switchLang(lang: string) {
    this.translate.use(lang);
    document.body.dir = lang === 'ar' ? 'rtl' : 'ltr';
  }

  ngOnInit() {
    AOS.init({
      duration: 3000,
      once: false, // animation occurs only once
    });
  }
}