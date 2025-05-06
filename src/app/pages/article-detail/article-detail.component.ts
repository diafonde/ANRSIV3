import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ActivatedRoute, RouterLink } from '@angular/router';
import { Article } from '../../models/article.model';
import { ArticleService } from '../../services/article.service';

@Component({
  selector: 'app-article-detail',
  standalone: true,
  imports: [CommonModule, RouterLink],
  template: `
    <div class="article-detail-hero" *ngIf="article">
      <div class="container">
        <div class="article-category">{{ article.category }}</div>
        <h1>{{ article.title }}</h1>
        <div class="article-meta">
          <div class="article-author">
            <span>By {{ article.author }}</span>
          </div>
          <div class="article-date">
            <svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round">
              <rect x="3" y="4" width="18" height="18" rx="2" ry="2"></rect>
              <line x1="16" y1="2" x2="16" y2="6"></line>
              <line x1="8" y1="2" x2="8" y2="6"></line>
              <line x1="3" y1="10" x2="21" y2="10"></line>
            </svg>
            <span>{{ article.publicationDate | date:'mediumDate' }}</span>
          </div>
        </div>
      </div>
      <div class="hero-overlay"></div>
    </div>
    
    <div class="container" *ngIf="article">
      <div class="article-content">
        <div class="article-summary">
          {{ article.summary }}
        </div>
        
        <div class="article-featured-image">
          <img [src]="article.imageUrl" [alt]="article.title" class="img-fluid">
        </div>
        
        <div class="article-text">
          <p *ngFor="let paragraph of articleParagraphs">{{ paragraph }}</p>
        </div>
        
        <div class="article-tags">
          <span *ngFor="let tag of article.tags" class="article-tag">{{ tag }}</span>
        </div>
        
        <div class="article-share">
          <span>Share this article:</span>
          <div class="share-buttons">
            <a href="#" aria-label="Share on Twitter">
              <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round">
                <path d="M22 4s-.7 2.1-2 3.4c1.6 10-9.4 17.3-18 11.6 2.2.1 4.4-.6 6-2C3 15.5.5 9.6 3 5c2.2 2.6 5.6 4.1 9 4-.9-4.2 4-6.6 7-3.8 1.1 0 3-1.2 3-1.2z"></path>
              </svg>
            </a>
            <a href="#" aria-label="Share on Facebook">
              <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round">
                <path d="M18 2h-3a5 5 0 0 0-5 5v3H7v4h3v8h4v-8h3l1-4h-4V7a1 1 0 0 1 1-1h3z"></path>
              </svg>
            </a>
            <a href="#" aria-label="Share on LinkedIn">
              <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round">
                <path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6z"></path>
                <rect x="2" y="9" width="4" height="12"></rect>
                <circle cx="4" cy="4" r="2"></circle>
              </svg>
            </a>
            <a href="#" aria-label="Share by Email">
              <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round">
                <path d="M4 4h16c1.1 0 2 .9 2 2v12c0 1.1-.9 2-2 2H4c-1.1 0-2-.9-2-2V6c0-1.1.9-2 2-2z"></path>
                <polyline points="22,6 12,13 2,6"></polyline>
              </svg>
            </a>
          </div>
        </div>
      </div>
      
      <div class="related-articles">
        <h2>Related Articles</h2>
        <div class="grid grid-3">
          <div class="related-article-card" *ngFor="let relatedArticle of relatedArticles">
            <img [src]="relatedArticle.imageUrl" [alt]="relatedArticle.title" class="img-fluid">
            <div class="related-article-content">
              <h3><a [routerLink]="['/article', relatedArticle.id]">{{ relatedArticle.title }}</a></h3>
              <div class="related-article-meta">
                {{ relatedArticle.publicationDate | date:'mediumDate' }} | {{ relatedArticle.category }}
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
    
    <div class="loading-indicator" *ngIf="!article">
      <div class="spinner"></div>
      <p>Loading article...</p>
    </div>
  `,
  styles: [`
    .article-detail-hero {
      position: relative;
      height: 60vh;
      min-height: 400px;
      max-height: 600px;
      background-image: var(--article-image);
      background-size: cover;
      background-position: center;
      display: flex;
      align-items: flex-end;
      color: white;
      margin-top: 60px;
    }
    
    .article-detail-hero .container {
      position: relative;
      z-index: 2;
      padding-bottom: var(--space-12);
    }
    
    .hero-overlay {
      position: absolute;
      top: 0;
      left: 0;
      width: 100%;
      height: 100%;
      background: linear-gradient(to top, rgba(0, 0, 0, 0.8), rgba(0, 0, 0, 0.3));
      z-index: 1;
    }
    
    .article-category {
      display: inline-block;
      background-color: var(--primary-500);
      color: white;
      padding: var(--space-1) var(--space-3);
      border-radius: 4px;
      text-transform: uppercase;
      font-weight: 500;
      font-size: var(--text-sm);
      margin-bottom: var(--space-4);
    }
    
    .article-detail-hero h1 {
      font-size: clamp(2rem, 4vw, 3.5rem);
      margin-bottom: var(--space-4);
      max-width: 800px;
      color: white;
    }
    
    .article-meta {
      display: flex;
      align-items: center;
      gap: var(--space-6);
      font-size: var(--text-base);
    }
    
    .article-author {
      font-weight: 500;
    }
    
    .article-date {
      display: flex;
      align-items: center;
      gap: var(--space-2);
      color: var(--neutral-300);
    }
    
    .article-content {
      max-width: 800px;
      margin: var(--space-10) auto var(--space-16) auto;
    }
    
    .article-summary {
      font-size: var(--text-xl);
      font-weight: 500;
      color: var(--neutral-700);
      margin-bottom: var(--space-6);
      line-height: 1.5;
    }
    
    .article-featured-image {
      margin-bottom: var(--space-6);
      border-radius: 8px;
      overflow: hidden;
    }
    
    .article-text {
      font-size: var(--text-lg);
      line-height: 1.7;
      color: var(--neutral-800);
    }
    
    .article-text p {
      margin-bottom: var(--space-6);
    }
    
    .article-tags {
      display: flex;
      flex-wrap: wrap;
      gap: var(--space-2);
      margin: var(--space-8) 0;
    }
    
    .article-tag {
      background-color: var(--neutral-100);
      color: var(--neutral-700);
      padding: var(--space-1) var(--space-3);
      border-radius: 16px;
      font-size: var(--text-sm);
    }
    
    .article-share {
      display: flex;
      align-items: center;
      gap: var(--space-4);
      padding-top: var(--space-6);
      border-top: 1px solid var(--neutral-200);
    }
    
    .share-buttons {
      display: flex;
      gap: var(--space-3);
    }
    
    .share-buttons a {
      display: flex;
      align-items: center;
      justify-content: center;
      width: 40px;
      height: 40px;
      background-color: var(--neutral-100);
      border-radius: 50%;
      color: var(--neutral-700);
      transition: all 0.2s ease;
    }
    
    .share-buttons a:hover {
      background-color: var(--primary-500);
      color: white;
      transform: translateY(-3px);
    }
    
    .related-articles {
      margin-bottom: var(--space-16);
    }
    
    .related-articles h2 {
      margin-bottom: var(--space-6);
      text-align: center;
    }
    
    .related-article-card {
      background-color: white;
      border-radius: 8px;
      overflow: hidden;
      box-shadow: 0 4px 6px rgba(0, 0, 0, 0.05);
      transition: transform 0.3s ease, box-shadow 0.3s ease;
    }
    
    .related-article-card:hover {
      transform: translateY(-5px);
      box-shadow: 0 10px 15px rgba(0, 0, 0, 0.1);
    }
    
    .related-article-card img {
      height: 180px;
      width: 100%;
      object-fit: cover;
    }
    
    .related-article-content {
      padding: var(--space-4);
    }
    
    .related-article-content h3 {
      font-size: var(--text-lg);
      margin-bottom: var(--space-2);
    }
    
    .related-article-content h3 a {
      color: var(--neutral-900);
      text-decoration: none;
      transition: color 0.2s ease;
    }
    
    .related-article-content h3 a:hover {
      color: var(--primary-500);
    }
    
    .related-article-meta {
      font-size: var(--text-sm);
      color: var(--neutral-500);
    }
    
    .loading-indicator {
      display: flex;
      flex-direction: column;
      align-items: center;
      justify-content: center;
      height: 60vh;
      gap: var(--space-4);
    }
    
    .spinner {
      width: 40px;
      height: 40px;
      border: 4px solid rgba(0, 0, 0, 0.1);
      border-radius: 50%;
      border-top-color: var(--primary-500);
      animation: spin 1s ease-in-out infinite;
    }
    
    @keyframes spin {
      to { transform: rotate(360deg); }
    }
  `]
})
export class ArticleDetailComponent implements OnInit {
  article: Article | undefined;
  articleParagraphs: string[] = [];
  relatedArticles: Article[] = [];

  constructor(
    private route: ActivatedRoute,
    private articleService: ArticleService
  ) {}

  ngOnInit(): void {
    this.route.paramMap.subscribe(params => {
      const id = params.get('id');
      if (id) {
        this.articleService.getArticleById(id).subscribe(article => {
          this.article = article;
          
          if (this.article) {
            // Create paragraphs from content
            this.articleParagraphs = this.article.content.split('\n\n').filter(p => p.trim() !== '');
            
            // Find related articles
            this.articleService.getArticles().subscribe(articles => {
              this.relatedArticles = articles
                .filter(a => a.id !== this.article?.id)
                .filter(a => 
                  a.category === this.article?.category || 
                  a.tags.some(tag => this.article?.tags.includes(tag))
                )
                .slice(0, 3);
            });
          }
        });
      }
    });
  }
}