import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterLink } from '@angular/router';
import { HeroSectionComponent } from '../../components/hero-section/hero-section.component';
import { ArticleCardComponent } from '../../components/article-card/article-card.component';
import { ArticleService } from '../../services/article.service';
import { Article } from '../../models/article.model';
import * as AOS from 'aos';

@Component({
  selector: 'app-home',
  standalone: true,
  imports: [CommonModule, RouterLink, HeroSectionComponent, ArticleCardComponent],
  template: `
    <app-hero-section></app-hero-section>
    
    <section id="featured" class="section featured-section" data-aos="flip-up">
      <div class="container">
        <h2 class="section-title">Dernières actualités</h2>
        <div class="grid grid-3">
          <app-article-card 
            *ngFor="let article of latestArticles" 
            [article]="article">
          </app-article-card>
        </div>
        <div class="text-center" style="margin-top: var(--space-8);">
          <a routerLink="/categories" class="btn btn-primary">Voir toutes les actualités</a>
        </div>
      </div>
    </section>

    <section id="featured" class="section featured-section" data-aos="fade-up-right">
      <div class="container">
        <h2 class="section-title">Recherches mises en avant</h2>
        <div class="grid grid-3">
          <app-article-card 
            *ngFor="let article of featuredArticles" 
            [article]="article" 
            [isFeatured]="true">
          </app-article-card>
        </div>
      </div>
    </section>
    
    <section class="section research-areas-section" data-aos="fade-right" data-aos="zoom-up">
      <div class="container">
        <h2 class="section-title">Research Fields</h2>
        <div class="grid grid-4">
          <div class="research-area-card" *ngFor="let area of researchAreas">
            <div class="research-area-icon" [innerHTML]="area.icon"></div>
            <h3>{{ area.name }}</h3>
            <p>{{ area.description }}</p>
            <a href="#" class="btn btn-outline">Explore</a>
          </div>
        </div>
      </div>
    </section>
    
    <section class="section map-section" data-aos="fade-up">
      <div class="container">
        <h2 class="section-title">Notre Localisation</h2>
        <div class="map-container">
          <iframe 
            src="https://www.google.com/maps?q=18.099534477533627,-15.979605442328959&z=15&output=embed" 
            width="100%" 
            height="450" 
            style="border:0;" 
            allowfullscreen="" 
            loading="lazy">
          </iframe>
        </div>
        <div class="map-info">
          <div class="info-item">
            <i class="fas fa-map-marker-alt"></i>
            <span>Nouakchott, Mauritanie</span>
          </div>
          <div class="info-item">
            <i class="fas fa-phone"></i>
            <span>+222 45 24 24 24</span>
          </div>
          <div class="info-item">
            <i class="fas fa-envelope"></i>
            <span>contact&#64;anrsi.mr</span>
          </div>
        </div>
      </div>
    </section>
    
    <section class="section partners-section" data-aos="flip-left" data-aos-easing="ease-out-cubic" data-aos-duration="2000">
      <div class="container">
        <h2 class="section-title">Nos Partenaires</h2>
        <div class="partners-grid">
          <div class="partner-card" *ngFor="let partner of partners">
            <img [src]="partner.logo" [alt]="partner.name" class="partner-logo">
            <div class="partner-name">{{ partner.name }}</div>
          </div>
        </div>
      </div>
    </section>
    
  `,
  styles: [`
    .featured-section {
      margin-top: -80px;
      position: relative;
      z-index: 10;
    }
    
    .research-areas-section {
      background-color: var(--neutral-100);
    }
    
    .research-area-card {
      background-color: white;
      padding: var(--space-6);
      border-radius: 8px;
      box-shadow: 0 4px 6px rgba(0, 0, 0, 0.05);
      text-align: center;
      transition: transform 0.3s ease, box-shadow 0.3s ease;
    }
    
    .research-area-card:hover {
      transform: translateY(-5px);
      box-shadow: 0 10px 20px rgba(0, 0, 0, 0.1);
    }
    
    .research-area-icon {
      width: 64px;
      height: 64px;
      margin: 0 auto var(--space-4);
      display: flex;
      justify-content: center;
      align-items: center;
      background-color: var(--primary-50);
      border-radius: 50%;
      color: var(--primary-600);
    }
    
    .research-area-icon svg {
      width: 32px;
      height: 32px;
    }
    
    .research-area-card h3 {
      margin-bottom: var(--space-2);
      font-size: var(--text-xl);
      color: var(--neutral-900);
    }
    
    .research-area-card p {
      margin-bottom: var(--space-4);
      color: var(--neutral-600);
    }
    
    .btn-outline {
      background-color: transparent;
      border: 1px solid var(--primary-500);
      color: var(--primary-500);
      padding: var(--space-2) var(--space-4);
      border-radius: 4px;
      font-weight: 500;
      transition: all 0.2s ease;
      display: inline-block;
    }
    
    .btn-outline:hover {
      background-color: var(--primary-500);
      color: white;
      text-decoration: none;
    }
    
    .timeline {
      position: relative;
      max-width: 800px;
      margin: 0 auto;
    }
    
    .timeline::before {
      content: '';
      position: absolute;
      width: 2px;
      background-color: var(--primary-200);
      top: 0;
      bottom: 0;
      left: 50%;
      transform: translateX(-50%);
    }
    
    .timeline-item {
      padding: var(--space-4) 0;
      position: relative;
      width: 50%;
      padding-right: var(--space-8);
    }
    
    .timeline-item.even {
      margin-left: 50%;
      padding-right: 0;
      padding-left: var(--space-8);
    }
    
    .timeline-item::after {
      content: '';
      position: absolute;
      width: 16px;
      height: 16px;
      background-color: var(--secondary-500);
      border: 3px solid var(--primary-200);
      border-radius: 50%;
      top: var(--space-6);
      right: -8px;
      z-index: 1;
    }
    
    .timeline-item.even::after {
      right: auto;
      left: -8px;
    }
    
    .timeline-date {
      position: absolute;
      top: var(--space-4);
      right: var(--space-12);
      background-color: var(--primary-500);
      color: white;
      padding: var(--space-1) var(--space-3);
      border-radius: 4px;
      font-weight: 600;
    }
    
    .timeline-item.even .timeline-date {
      right: auto;
      left: var(--space-12);
    }
    
    .timeline-content {
      background-color: white;
      padding: var(--space-4);
      border-radius: 8px;
      box-shadow: 0 4px 6px rgba(0, 0, 0, 0.05);
    }
    
    .timeline-content h3 {
      margin-bottom: var(--space-2);
      color: var(--primary-600);
    }
    
    .timeline-content p {
      margin-bottom: 0;
    }
    
    @media (max-width: 767px) {
      .timeline::before {
        left: 30px;
      }
      
      .timeline-item, .timeline-item.even {
        width: 100%;
        padding-left: var(--space-12);
        padding-right: 0;
        margin-left: 0;
      }
      
      .timeline-item::after, .timeline-item.even::after {
        left: 22px;
        right: auto;
      }
      
      .timeline-date, .timeline-item.even .timeline-date {
        left: 0;
        right: auto;
        top: var(--space-4);
        width: auto;
        text-align: center;
      }
    }
    
    .newsletter-section {
      background-color: var(--primary-900);
      color: white;
    }
    
    .newsletter-content {
      max-width: 600px;
      margin: 0 auto;
      text-align: center;
    }
    
    .newsletter-content h2 {
      color: white;
      margin-bottom: var(--space-4);
    }
    
    .newsletter-content p {
      margin-bottom: var(--space-6);
      color: var(--neutral-300);
    }
    
    .newsletter-form .form-group {
      display: flex;
      gap: var(--space-2);
      margin-bottom: var(--space-4);
    }
    
    .newsletter-form input[type="email"] {
      flex: 1;
      padding: var(--space-3);
      border-radius: 4px;
      border: none;
    }
    
    .form-check {
      display: flex;
      align-items: center;
      gap: var(--space-2);
      justify-content: center;
      color: var(--neutral-300);
      font-size: var(--text-sm);
    }
    
    @media (max-width: 767px) {
      .newsletter-form .form-group {
        flex-direction: column;
      }
    }
    
    .partners-section {
      background: var(--neutral-100);
      padding: var(--space-8) 0;
    }
    .partners-grid {
      display: grid;
      grid-template-columns: repeat(auto-fit, minmax(160px, 1fr));
      gap: var(--space-6);
      align-items: center;
      justify-items: center;
      margin-top: var(--space-6);
    }
    .partner-card {
      background: white;
      border-radius: 8px;
      box-shadow: 0 2px 8px rgba(0,0,0,0.04);
      padding: var(--space-4);
      display: flex;
      flex-direction: column;
      align-items: center;
      transition: box-shadow 0.2s;
    }
    .partner-card:hover {
      box-shadow: 0 4px 16px rgba(0,0,0,0.10);
    }
    .partner-logo {
      width: 80px;
      height: 80px;
      object-fit: contain;
      margin-bottom: var(--space-2);
    }
    .partner-name {
      font-weight: 500;
      text-align: center;
      color: var(--primary-900);
    }

    .map-section {
      padding: var(--space-8) 0;
      background-color: var(--neutral-50);
    }

    .map-container {
      width: 100%;
      height: 450px;
      border-radius: 12px;
      overflow: hidden;
      box-shadow: 0 4px 12px rgba(0, 0, 0, 0.1);
      margin-bottom: var(--space-6);
    }

    .map-container iframe {
      width: 100%;
      height: 100%;
      border: none;
    }

    .map-info {
      display: grid;
      grid-template-columns: repeat(auto-fit, minmax(250px, 1fr));
      gap: var(--space-4);
      margin-top: var(--space-6);
    }

    .info-item {
      display: flex;
      align-items: center;
      gap: var(--space-3);
      padding: var(--space-4);
      background: white;
      border-radius: 8px;
      box-shadow: 0 2px 8px rgba(0, 0, 0, 0.05);
      transition: transform 0.3s ease;
    }

    .info-item:hover {
      transform: translateY(-3px);
    }

    .info-item i {
      font-size: 1.5rem;
      color: var(--primary-500);
    }

    .info-item span {
      font-size: 1.1rem;
      color: var(--neutral-700);
    }

    @media (max-width: 768px) {
      .map-container {
        height: 350px;
      }

      .map-info {
        grid-template-columns: 1fr;
      }

      .info-item {
        padding: var(--space-3);
      }

      .info-item i {
        font-size: 1.2rem;
      }

      .info-item span {
        font-size: 1rem;
      }
    }
  `]
})
export class HomeComponent implements OnInit {
  featuredArticles: Article[] = [];
  latestArticles: Article[] = [];
  
  researchAreas = [
    {
      name: ' Physics',
      description: 'Exploring the fundamental nature of reality at the smallest scales.',
      icon: '<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><circle cx="12" cy="12" r="10"></circle><circle cx="12" cy="12" r="4"></circle><line x1="4.93" y1="4.93" x2="9.17" y2="9.17"></line><line x1="14.83" y1="14.83" x2="19.07" y2="19.07"></line><line x1="14.83" y1="9.17" x2="19.07" y2="4.93"></line><line x1="14.83" y1="9.17" x2="18.36" y2="5.64"></line><line x1="4.93" y1="19.07" x2="9.17" y2="14.83"></line></svg>'
    },
    {
      name: 'Environmental Science',
      description: 'Developing solutions for sustainable development and climate challenges.',
      icon: '<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M12 2a10 10 0 1 0 10 10H2A10 10 0 0 0 12 2z"></path><path d="M12 2v10M2 12h20"></svg>'
    },
    {
      name: 'Medical Research',
      description: 'Advancing healthcare through innovative treatments and technologies.',
      icon: '<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M22 12h-4l-3 9L9 3l-3 9H2"/></svg>'
    },
    {
      name: 'Artificial Intelligence',
      description: 'Developing intelligent systems that can learn, reason, and adapt.',
      icon: '<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><rect x="3" y="3" width="18" height="18" rx="2"/><circle cx="8.5" cy="8.5" r="1.5"/><circle cx="15.5" cy="8.5" r="1.5"/><path d="M7 13.5h10"/></svg>'
    }
  ];
  
  timelineItems = [
    {
      year: '2023',
      title: 'Quantum Computation Breakthrough',
      description: 'First demonstration of fault-tolerant quantum computation with practical error correction.'
    },
    {
      year: '2022',
      title: 'Climate Modeling Initiative',
      description: 'Launch of high-resolution climate model with 95% accurate prediction capabilities.'
    },
    {
      year: '2020',
      title: 'AI Research Center Established',
      description: 'Foundation of the National Center for Artificial Intelligence Research.'
    },
    {
      year: '2018',
      title: 'Genomic Medicine Program',
      description: 'Initiation of the precision medicine initiative for personalized healthcare.'
    }
  ];

  partners = [
    { name: 'Mauritanie', logo: 'https://upload.wikimedia.org/wikipedia/commons/4/43/Flag_of_Mauritania.svg' },
    { name: 'France', logo: 'https://upload.wikimedia.org/wikipedia/commons/c/c3/Flag_of_France.svg' },
    { name: 'Japon', logo: 'https://upload.wikimedia.org/wikipedia/commons/9/9e/Flag_of_Japan.svg' },
    { name: 'Senegal', logo: 'https://upload.wikimedia.org/wikipedia/commons/f/fd/Flag_of_Senegal.svg' },
  ];

  constructor(private articleService: ArticleService) {}

  ngOnInit(): void {
    AOS.init();
    this.articleService.getFeaturedArticles().subscribe(articles => {
      this.featuredArticles = articles;
    });
    
    this.articleService.getRecentArticles(3).subscribe(articles => {
      this.latestArticles = articles;
    });
  }
}