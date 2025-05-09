import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterLink } from '@angular/router';

@Component({
  selector: 'app-footer',
  standalone: true,
  imports: [CommonModule, RouterLink],
  template: `
    <footer>
      <div class="container">
        <div class="footer-grid">
          <div class="footer-column">
            <h3 class="footer-title">ANRSI</h3>
            <p>Agence nationale de la recherche scientifique et de l'innovation - Faire progresser la connaissance.</p>
            <div class="social-icons">
              <a href="#" aria-label="Twitter">
                <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round">
                  <path d="M22 4s-.7 2.1-2 3.4c1.6 10-9.4 17.3-18 11.6 2.2.1 4.4-.6 6-2C3 15.5.5 9.6 3 5c2.2 2.6 5.6 4.1 9 4-.9-4.2 4-6.6 7-3.8 1.1 0 3-1.2 3-1.2z"/>
                </svg>
              </a>
              <a href="#" aria-label="Facebook">
                <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round">
                  <path d="M18 2h-3a5 5 0 0 0-5 5v3H7v4h3v8h4v-8h3l1-4h-4V7a1 1 0 0 1 1-1h3z"/>
                </svg>
              </a>
              <a href="#" aria-label="LinkedIn">
                <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round">
                  <path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6z"/>
                  <rect x="2" y="9" width="4" height="12"/>
                  <circle cx="4" cy="4" r="2"/>
                </svg>
              </a>
              <a href="#" aria-label="YouTube">
                <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round">
                  <path d="M22.54 6.42a2.78 2.78 0 0 0-1.94-2C18.88 4 12 4 12 4s-6.88 0-8.6.46a2.78 2.78 0 0 0-1.94 2A29 29 0 0 0 1 11.75a29 29 0 0 0 .46 5.33A2.78 2.78 0 0 0 3.4 19c1.72.46 8.6.46 8.6.46s6.88 0 8.6-.46a2.78 2.78 0 0 0 1.94-2 29 29 0 0 0 .46-5.25 29 29 0 0 0-.46-5.33z"/>
                  <polygon points="9.75 15.02 15.5 11.75 9.75 8.48 9.75 15.02"/>
                </svg>
              </a>
            </div>
          </div>
          
          <div class="footer-column">
            <h4>Liens Rapides</h4>
            <ul class="footer-links">
              <li><a routerLink="/">Acceuil</a></li>
              <li><a routerLink="/categories">Recherche</a></li>
              <li><a routerLink="/about">A Propos</a></li>
              <li><a routerLink="/contact">Contact</a></li>
            </ul>
          </div>
          
      
          
          <div class="footer-column">
            <h4>Newsletter</h4>
            <p>S'abonner à notre newsletter pour les dernières mises à jour de la recherche.</p>
            <form class="newsletter-form">
              <input type="email" placeholder="Your email address" required>
              <button type="submit" class="btn btn-accent">S'inscrire</button>
            </form>
          </div>
        </div>
        
        <div class="footer-bottom">
          <p>&copy; {{ currentYear }} ANRSI. All rights reserved.</p>
          <div class="footer-bottom-links">
            <a href="#">Privacy Policy</a>
            <a href="#">Terms of Use</a>
            <a href="#">Accessibility</a>
          </div>
        </div>
      </div>
    </footer>
  `,
  styles: [`
    footer {
      background-color: #083515;
      color: var(--neutral-300);
      padding: var(--space-12) 0 var(--space-4) 0;
    }
    
    .footer-grid {
      display: grid;
      grid-template-columns: repeat(1, 1fr);
      gap: var(--space-8);
      margin-bottom: var(--space-8);
    }
    
    @media (min-width: 768px) {
      .footer-grid {
        grid-template-columns: repeat(2, 1fr);
      }
    }
    
    @media (min-width: 1024px) {
      .footer-grid {
        grid-template-columns: 2fr 1fr 1fr 2fr;
      }
    }
    
    .footer-column h3, .footer-column h4 {
      color: white;
      margin-bottom: var(--space-4);
    }
    
    .footer-links {
      list-style: none;
      padding: 0;
      margin: 0;
    }
    
    .footer-links li {
      margin-bottom: var(--space-2);
    }
    
    .footer-links a {
      color: var(--neutral-300);
      text-decoration: none;
      transition: color 0.2s ease;
    }
    
    .footer-links a:hover {
      color: white;
      text-decoration: none;
    }
    
    .social-icons {
      display: flex;
      gap: var(--space-3);
      margin-top: var(--space-4);
    }
    
    .social-icons a {
      display: flex;
      align-items: center;
      justify-content: center;
      width: 36px;
      height: 36px;
      background-color: rgba(255, 255, 255, 0.1);
      border-radius: 50%;
      color: white;
      transition: all 0.2s ease;
    }
    
    .social-icons a:hover {
      background-color: var(--secondary-500);
      transform: translateY(-3px);
    }
    
    .newsletter-form {
      display: flex;
      flex-direction: column;
      gap: var(--space-2);
      margin-top: var(--space-4);
    }
    
    .newsletter-form input {
      padding: var(--space-2) var(--space-3);
      border: 1px solid var(--neutral-700);
      border-radius: 4px;
      background-color: var(--primary-800);
      color: white;
    }
    
    .newsletter-form button {
      align-self: flex-start;
    }
    
    .footer-bottom {
      border-top: 1px solid var(--neutral-700);
      padding-top: var(--space-4);
      margin-top: var(--space-8);
      display: flex;
      flex-direction: column;
      gap: var(--space-4);
    }
    
    .footer-bottom-links {
      display: flex;
      flex-wrap: wrap;
      gap: var(--space-4);
    }
    
    .footer-bottom-links a {
      color: var(--neutral-400);
      text-decoration: none;
      font-size: var(--text-sm);
    }
    
    .footer-bottom-links a:hover {
      color: white;
    }
    
    @media (min-width: 768px) {
      .footer-bottom {
        flex-direction: row;
        justify-content: space-between;
        align-items: center;
      }
      
      .newsletter-form {
        flex-direction: row;
      }
    }
  `]
})
export class FooterComponent {
  currentYear = new Date().getFullYear();
}