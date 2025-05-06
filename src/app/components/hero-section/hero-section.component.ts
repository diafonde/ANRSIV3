import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-hero-section',
  standalone: true,
  imports: [CommonModule],
  template: `
    <section class="hero-section">
      <div class="hero-content">
        
        <h1 class="slide-up">Technologies et de l’innovation<br></h1>
        <p class="slide-up">La création de l'Agence Nationale de la Recherche Scientifique et de l'Innovation traduit clairement la volonté du Gouvernement de la République Islamique de Mauritanie .</p>
        <div class="hero-buttons slide-up">
          <a href="#featured" class="btn btn-primary">Explore Research</a>
          <a href="#newsletter" class="btn btn-secondary">Subscribe</a>
        </div>
      </div>
      <div class="hero-statistics slide-up">
        <div class="stat-item">
          <div class="stat-number">500+</div>
          <div class="stat-label">Research Projects</div>
        </div>
        <div class="stat-item">
          <div class="stat-number">50+</div>
          <div class="stat-label">Partner Institutions</div>
        </div>
        <div class="stat-item">
          <div class="stat-number">2000+</div>
          <div class="stat-label">Published Papers</div>
        </div>
        <div class="stat-item">
          <div class="stat-number">$250M</div>
          <div class="stat-label">Research Funding</div>
        </div>
      </div>
      <div class="hero-overlay"></div>
    </section>
  `,
  styles: [`
    .hero-section {
      position: relative;
      height: 100vh;
      min-height: 600px;
      /* ... background-image: url('https://images.pexels.com/photos/256262/pexels-photo-256262.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2');*/
      background-image: url('assets/images/backgr.jpeg');
      background-size: cover;
      background-position: center;
      color: white;
      display: flex;
      flex-direction: column;
      justify-content: center;
    }
    
    .hero-overlay {
      position: absolute;
      top: 0;
      left: 0;
      width: 100%;
      height: 100%;
      background: linear-gradient(to right, rgba(10, 61, 98, 0.9), rgba(10, 61, 98, 0.7));
      z-index: 1;
    }
    
    .hero-content {
      position: relative;
      z-index: 2;
      max-width: 800px;
      margin: 0 auto;
      padding: 0 var(--space-4);
      text-align: center;
    }
    
    .hero-content h1 {
      font-size: clamp(2.5rem, 5vw, 4rem);
      font-weight: 700;
      margin-bottom: var(--space-6);
      line-height: 1.1;
      color: white;
    }
    
    .hero-content p {
      font-size: clamp(1.1rem, 2vw, 1.25rem);
      margin-bottom: var(--space-8);
      max-width: 600px;
      margin-left: auto;
      margin-right: auto;
    }
    
    .hero-buttons {
      display: flex;
      gap: var(--space-4);
      justify-content: center;
      margin-bottom: var(--space-12);
    }
    
    .hero-statistics {
      position: relative;
      z-index: 2;
      display: grid;
      grid-template-columns: repeat(2, 1fr);
      gap: var(--space-4);
      max-width: 900px;
      margin: 0 auto;
      width: 100%;
      padding: 0 var(--space-4);
    }
    
    @media (min-width: 768px) {
      .hero-statistics {
        grid-template-columns: repeat(4, 1fr);
      }
    }
    
    .stat-item {
      background-color: rgba(255, 255, 255, 0.1);
      backdrop-filter: blur(5px);
      padding: var(--space-4);
      border-radius: 8px;
      text-align: center;
      transition: transform 0.3s ease, background-color 0.3s ease;
    }
    
    .stat-item:hover {
      transform: translateY(-5px);
      background-color: rgba(255, 255, 255, 0.2);
    }
    
    .stat-number {
      font-size: var(--text-3xl);
      font-weight: 700;
      margin-bottom: var(--space-2);
      color: var(--secondary-300);
    }
    
    .stat-label {
      font-size: var(--text-sm);
      text-transform: uppercase;
      letter-spacing: 1px;
    }
    
    @keyframes slideUp {
      from {
        opacity: 0;
        transform: translateY(30px);
      }
      to {
        opacity: 1;
        transform: translateY(0);
      }
    }
    
    .slide-up {
      animation: slideUp 0.6s forwards;
      opacity: 0;
    }
    
    .hero-content h1 {
      animation-delay: 0.2s;
    }
    
    .hero-content p {
      animation-delay: 0.4s;
    }
    
    .hero-buttons {
      animation-delay: 0.6s;
    }
    
    .hero-statistics {
      animation-delay: 0.8s;
    }
  `]
})
export class HeroSectionComponent {}