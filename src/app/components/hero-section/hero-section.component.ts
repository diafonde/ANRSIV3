import { Component, OnInit, OnDestroy } from '@angular/core';
import { CommonModule } from '@angular/common';


@Component({
  selector: 'app-hero-section',
  standalone: true,
  imports: [CommonModule],
  template: `
  
    <section class="hero-section" [ngStyle]="{'background-image': 'url(assets/images/backgr.jpeg)'}">
    
      <div class="hero-content">
      <h1 style="text-align: center; font-size: 2.5rem; font-weight: bold; color: white;" class="no-wap">Agence Nationale de la Recherche Scientifique et de l'innovation</h1>  
      <br><br><br><br><br><br><br>

      <!-- <p class="slide-up">La création de l'Agence Nationale de la Recherche Scientifique et de l'Innovation traduit clairement la volonté du Gouvernement de la République Islamique de Mauritanie.</p> -->
        
        
        <div class="hero-buttons slide-up">
          <a (click)="scrollToSection('slideshow-section')" class="btn btn-primary">Voir le slideshow</a>
          <a (click)="scrollToSection('featured')" class="btn btn-secondary">Explorer la recherche</a>
        </div>
      </div>
      <div class="hero-statistics slide-up">
        <div class="stat-item">
          <div class="stat-number">500+</div>
          <div class="stat-label">Projets de recherche</div>
        </div>
        <div class="stat-item">
          <div class="stat-number">50+</div>
          <div class="stat-label">Institutions partenaires</div>
        </div>
        <div class="stat-item">
          <div class="stat-number">2000+</div>
          <div class="stat-label">Articles publiés</div>
        </div>
        <div class="stat-item">
          <div class="stat-number">250M MRU</div>
          <div class="stat-label">Financement de la recherche</div>
        </div>
        
      </div>
      
      <div class="hero-overlay"></div>
    </section>
    <section class="slideshow-section">
      <div class="slideshow-container">
        <button class="slide-nav prev" (click)="prevSlide()">&#10094;</button>
        <img [src]="slides[currentSlide].url" [alt]="slides[currentSlide].caption" class="slide-image">
        <button class="slide-nav next" (click)="nextSlide()">&#10095;</button>
      </div>
      <div class="slide-caption">{{ slides[currentSlide].caption }}</div>
      <div class="slide-dots">
        <span *ngFor="let slide of slides; let i = index" class="dot" [class.active]="i === currentSlide" (click)="goToSlide(i)"></span>
      </div>
    </section>
  `,
  styles: [`
    .hero-section {
      
      position: relative;
      height: 100vh;
      width: 100%;
      min-height: 600px;
      /* ... background-image: url('https://images.pexels.com/photos/256262/pexels-photo-256262.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2');*/
      /* background-image: url('assets/images/backgr.jpeg'); */
      background-size: cover;
      background-position: center;
      color: white;
      display: flex;
      flex-direction: column;
      justify-content: center;
    }
    .no-wrap {
      font-size: 3.0rem;
      font-weight: bold;
      color: white;
      text-align: center;
   
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
    .slideshow-section {
      width: 100vw;
      left: 50%;
      right: 50%;
      margin-left: -50vw;
      margin-right: -50vw;
      position: relative;
      background: #f8f9fa;
      padding: 2rem 0 3rem 0;
      display: flex;
      flex-direction: column;
      align-items: center;
    }
    .slideshow-container {
      position: relative;
      width: 100vw;
      max-width: 100vw;
      margin: 0 auto;
      display: flex;
      align-items: center;
      justify-content: center;
    }
    .slide-image {
      width: 100vw;
      max-width: 100vw;
      max-height: 550px;
      object-fit: cover;
      border-radius: 0;
      box-shadow: 0 2px 8px rgba(0,0,0,0.08);
    }
    .slide-nav {
      background: rgba(25, 118, 210, 0.7);
      color: white;
      border: none;
      border-radius: 50%;
      width: 40px;
      height: 40px;
      font-size: 2rem;
      cursor: pointer;
      position: absolute;
      top: 50%;
      transform: translateY(-50%);
      z-index: 2;
      transition: background 0.2s;
    }
    .slide-nav.prev { left: 10px; }
    .slide-nav.next { right: 10px; }
    .slide-nav:hover { background: #1976d2; }
    .slide-caption {
      margin-top: 1rem;
      font-size: 1.1rem;
      color: #333;
      text-align: center;
    }
    .slide-dots {
      margin-top: 0.5rem;
      text-align: center;
    }
    .dot {
      height: 12px;
      width: 12px;
      margin: 0 4px;
      background-color: #bbb;
      border-radius: 50%;
      display: inline-block;
      transition: background 0.3s;
      cursor: pointer;
    }
    .dot.active {
      background-color: #1976d2;
    }
  `]
})
export class HeroSectionComponent implements OnInit, OnDestroy {
  imageUrl = 'assets/images/backgr.jpeg';
  slides = [
    { url: 'https://img.freepik.com/free-vector/blue-futuristic-networking-technology_53876-100679.jpg?t=st=1746820066~exp=1746823666~hmac=14286607480fddbddb056c30dd4ee52300eb22a59e89bcf448d3e1ac15830e63&w=2000'},
    { url: 'https://img.freepik.com/free-photo/man-using-digital-tablet-psd-mockup-smart-technology_53876-110815.jpg?t=st=1746821134~exp=1746824734~hmac=756f2ba2ad8c02ad4d1cc56d54243e67bbf339279e2da043aa8fea5a500f36d5&w=2000'},
    { url: 'https://plus.unsplash.com/premium_photo-1661963874418-df1110ee39c1?q=80&w=3372&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D', caption: '' }
  ];
  currentSlide = 0;
  private slideInterval: any;

  ngOnInit() {
    this.slideInterval = setInterval(() => this.nextSlide(), 4000); // 4 seconds
  }
  ngOnDestroy() {
    if (this.slideInterval) {
      clearInterval(this.slideInterval);
    }
  }
  prevSlide() { this.currentSlide = (this.currentSlide - 1 + this.slides.length) % this.slides.length; }
  nextSlide() { this.currentSlide = (this.currentSlide + 1) % this.slides.length; }
  goToSlide(i: number) { this.currentSlide = i; }
  scrollToSection(sectionId: string) {
    const el = document.getElementById(sectionId);
    if (el) {
      el.scrollIntoView({ behavior: 'smooth' });
    }
  }
}