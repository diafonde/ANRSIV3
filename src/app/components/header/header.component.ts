import { Component, HostListener } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterLink, RouterLinkActive } from '@angular/router';
import { TranslateService, TranslateModule } from '@ngx-translate/core';

@Component({
  selector: 'app-header',
  standalone: true,
  imports: [CommonModule, RouterLink, RouterLinkActive, TranslateModule],
  template: `
    <header [class.scrolled]="scrolled" [class.mobile-open]="mobileMenuOpen">
      <div class="container header-container">
        <div class="logo">
          <img src="assets/images/logos.png" alt="ANRSI Logo" class="logo-image">
          <a routerLink="/">
            <!-- <span class="logo-text">ANRSI</span> -->
          </a>
          
        </div>
        
        <nav class="main-nav" [class.active]="mobileMenuOpen">
          <ul>
            <li><a routerLink="/" routerLinkActive="active" [routerLinkActiveOptions]="{exact: true}">{{ 'Accueil' | translate }}</a></li>
            <li><a routerLink="/categories" routerLinkActive="active">{{ 'Domaine de recherche' | translate }}</a></li>
            <li class="dropdown" [class.open]="dropdownOpen === 'pubs'" (mouseenter)="dropdownOpen = 'pubs'" (mouseleave)="dropdownOpen = null">
            <a href="#" (click)="$event.preventDefault()">{{ 'Publications' | translate }} <span class="arrow">▼</span></a>
            <div class="dropdown-menu">
              <a href="#">{{ 'Articles' | translate }}</a>
              <a href="#">{{ 'Thèses' | translate }}</a>
              <a href="#">{{ 'Rapports' | translate }}</a>
            </div>
          </li>
            <li><a routerLink="/about" routerLinkActive="active">{{ 'A Propos' | translate }}</a></li>
            <li><a routerLink="/contact" routerLinkActive="active">{{ 'Contact' | translate }}</a></li>            
          </ul>
        </nav>
        
        <div class="actions">
          <!-- <button class="search-btn" aria-label="Search">
            <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round">
              <circle cx="11" cy="11" r="8"></circle>
              <line x1="21" y1="21" x2="16.65" y2="16.65"></line>
            </svg>
          </button> -->
          
          <button class="language-btn" aria-label="Change Language">
            <div class="language-dropdown">
              <button class="primary-btn" (click)="toggleLanguage()">{{ currentLang }}</button>
            </div>
          </button>
          
          <button class="mobile-menu-btn" (click)="toggleMobileMenu()" aria-label="Menu">
            <span [class.open]="mobileMenuOpen"></span>
            <span [class.open]="mobileMenuOpen"></span>
            <span [class.open]="mobileMenuOpen"></span>
          </button>
        </div>
      </div>
    </header>
  `,
  styles: [`
    header {
      position: fixed;
      top: 0;
      left: 0;
      width: 100%;
      background: transparent;
      padding: var(--space-6) 0;
      max-height: 140px;
      z-index: 1000;
      transition: all 0.3s ease-in-out;
    }
    
    header.scrolled {
      background: #083515;
      box-shadow: 0 2px 10px rgba(0, 0, 0, 0.1);
      padding: var(--space-4) 0;
    }
    
    .header-container {
      
      display: flex;
      align-items: center;
      justify-content: space-between;
    }
    
    .logo a {
      display: flex;
      align-items: center;
      text-decoration: none;
    }
    
    .logo-text {
      font-size: var(--text-xl);
      font-weight: 700;
      color: white;
    }
    
    .logo {
      display: flex;
      align-items: center;
      gap: var(--space-2);
    }
    
    .logo-image {
      height: 150px;
      width: auto;
      margin-right: var(--space-2);
      display: block;
    }
    
    .main-nav ul {
      display: flex;
      list-style: none;
      gap: var(--space-6);
      position: relative;
    }
    
    .main-nav a {
      color: white;
      font-weight: 500;
      text-decoration: none;
      position: relative;
      transition: color 0.2s ease;
    }
    
    .main-nav a:hover, .main-nav a.active {
      color: var(--secondary-300);
    }
    
    .main-nav a::after {
      content: '';
      position: absolute;
      width: 0;
      height: 2px;
      bottom: -4px;
      left: 0;
      background-color: var(--secondary-300);
      transition: width 0.3s ease;
    }
    
    .main-nav a:hover::after, .main-nav a.active::after {
      width: 100%;
    }
    
    .actions {
      display: flex;
      align-items: center;
      gap: var(--space-4);
    }
    
    .search-btn, .language-btn {
      background: transparent;
      border: none;
      color: white;
      cursor: pointer;
      display: flex;
      align-items: center;
      gap: var(--space-1);
      transition: color 0.2s ease;
    }
    
    .search-btn:hover, .language-btn:hover {
      color: var(--secondary-300);
    }
    
    .language-btn {
      font-weight: 500;
    }
    
    .mobile-menu-btn {
      display: none;
      background: transparent;
      border: none;
      cursor: pointer;
      flex-direction: column;
      justify-content: space-between;
      width: 24px;
      height: 18px;
      padding: 0;
    }
    
    .mobile-menu-btn span {
      display: block;
      height: 2px;
      width: 100%;
      background-color: white;
      transition: all 0.3s ease;
    }
    
    .mobile-menu-btn span.open:nth-child(1) {
      transform: translateY(8px) rotate(45deg);
    }
    
    .mobile-menu-btn span.open:nth-child(2) {
      opacity: 0;
    }
    
    .mobile-menu-btn span.open:nth-child(3) {
      transform: translateY(-8px) rotate(-45deg);
    }
    
    @media (max-width: 768px) {
      .main-nav {
        position: fixed;
        top: 60px;
        left: 0;
        width: 100%;
        background-color: var(--primary-900);
        padding: var(--space-4);
        transform: translateY(-100%);
        opacity: 0;
        visibility: hidden;
        transition: all 0.3s ease-in-out;
      }
      
      .main-nav.active {
        transform: translateY(0);
        opacity: 1;
        visibility: visible;
      }
      
      .main-nav ul {
        flex-direction: column;
        align-items: center;
        gap: var(--space-4);
      }
      
      .mobile-menu-btn {
        display: flex;
      }
      
      header.mobile-open {
        background: var(--primary-900);
      }
    }
    
    .dropdown {
      position: relative;
    }
    
    .dropdown-menu {
      display: none;
      position: absolute;
      top: 100%;
      left: 0;
      background: var(--primary-500);
      min-width: 160px;
      box-shadow: 0 2px 8px rgba(0, 0, 0, 0.15);
      z-index: 10;
      flex-direction: column;
      padding: var(--space-2) 0;
    }
    
    .dropdown:hover .dropdown-menu,
    .dropdown:focus-within .dropdown-menu {
      display: flex;
    }
    
    .dropdown-menu li {
      width: 100%;
    }
    
    .dropdown-menu a {
      color: white;
      padding: var(--space-2) var(--space-4);
      display: block;
      text-decoration: none;
      transition: background 0.2s;
    }
    
    .dropdown-menu a:hover {
      background: var(--secondary-300);
      color: var(--primary-900);
    }
    
    .language-dropdown button {
      padding: 0.5rem 1.2rem;
      border: none;
      background:rgb(11, 131, 61);
      color: white;
      border-radius: 4px;
      cursor: pointer;
      font-weight: 600;
      font-size: 1rem;
      transition: background 0.2s;
    }
    
    .language-dropdown button:hover {
      background: #125ea2;
    }
  `]
})
export class HeaderComponent {
  scrolled = false;
  mobileMenuOpen = false;
  currentLang = 'fr';
  dropdownOpen: string | null = null;

  constructor(public translate: TranslateService) {}

  @HostListener('window:scroll')
  onWindowScroll() {
    this.scrolled = window.scrollY > 50;
  }

  toggleMobileMenu() {
    this.mobileMenuOpen = !this.mobileMenuOpen;
  }

  toggleLanguage() {
    this.currentLang = this.currentLang === 'fr' ? 'ar' : 'fr';
    this.translate.use(this.currentLang);
    document.body.dir = this.currentLang === 'ar' ? 'rtl' : 'ltr';
  }
}