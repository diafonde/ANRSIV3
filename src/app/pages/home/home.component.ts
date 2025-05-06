import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterLink } from '@angular/router';
import { HeroSectionComponent } from '../../components/hero-section/hero-section.component';
import { ArticleCardComponent } from '../../components/article-card/article-card.component';
import { ArticleService } from '../../services/article.service';
import { Article } from '../../models/article.model';

@Component({
  selector: 'app-home',
  standalone: true,
  imports: [CommonModule, RouterLink, HeroSectionComponent, ArticleCardComponent],
  template: `
    <app-hero-section></app-hero-section>
    
    <section id="featured" class="section featured-section">
      <div class="container">
        <h2 class="section-title">Featured Research</h2>
        <div class="grid grid-3">
          <app-article-card 
            *ngFor="let article of featuredArticles" 
            [article]="article" 
            [isFeatured]="true">
          </app-article-card>
        </div>
      </div>
    </section>
    
    <section class="section research-areas-section">
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
    
    <section class="section latest-news-section">
      <div class="container">
        <h2 class="section-title">Latest News</h2>
        <div class="grid grid-3">
          <app-article-card 
            *ngFor="let article of latestArticles" 
            [article]="article">
          </app-article-card>
        </div>
        <div class="text-center" style="margin-top: var(--space-8);">
          <a routerLink="/categories" class="btn btn-primary">View All News</a>
        </div>
      </div>
    </section>
    
    <section class="section timeline-section">
      <div class="container">
        <h2 class="section-title">Research Timeline</h2>
        <div class="timeline">
          <div class="timeline-item" *ngFor="let item of timelineItems; let isEven = even" [class.even]="isEven">
            <div class="timeline-date">{{ item.year }}</div>
            <div class="timeline-content">
              <h3>{{ item.title }}</h3>
              <p>{{ item.description }}</p>
            </div>
          </div>
        </div>
      </div>
    </section>
    
    <section id="newsletter" class="section newsletter-section">
      <div class="container">
        <div class="newsletter-content">
          <h2>Stay Updated with Research Breakthroughs</h2>
          <p>Subscribe to our newsletter to receive the latest updates on scientific discoveries, research opportunities, and upcoming events.</p>
          <form class="newsletter-form">
            <div class="form-group">
              <input type="email" placeholder="Your email address" required>
              <button type="submit" class="btn btn-accent">Subscribe</button>
            </div>
            <div class="form-check">
              <input type="checkbox" id="consent" required>
              <label for="consent">I agree to receive updates from ScienceNOVA</label>
            </div>
          </form>
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

  constructor(private articleService: ArticleService) {}

  ngOnInit(): void {
    this.articleService.getFeaturedArticles().subscribe(articles => {
      this.featuredArticles = articles;
    });
    
    this.articleService.getRecentArticles(3).subscribe(articles => {
      this.latestArticles = articles;
    });
  }
}