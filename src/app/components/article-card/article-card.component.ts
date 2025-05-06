import { Component, Input } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterLink } from '@angular/router';
import { Article } from '../../models/article.model';

@Component({
  selector: 'app-article-card',
  standalone: true,
  imports: [CommonModule, RouterLink],
  template: `
    <article class="article-card" [class.featured]="isFeatured">
      <div class="article-image">
        <img [src]="article.imageUrl" [alt]="article.title" class="img-fluid">
        <div class="article-category">{{ article.category }}</div>
      </div>
      <div class="article-content">
        <h3 class="article-title">
          <a [routerLink]="['/article', article.id]">{{ article.title }}</a>
        </h3>
        <p class="article-meta">
          <span class="article-date">{{ article.publicationDate | date:'mediumDate' }}</span>
          <span class="article-author">by {{ article.author }}</span>
        </p>
        <p class="article-summary">{{ article.summary }}</p>
        <div class="article-tags">
          <span *ngFor="let tag of article.tags" class="article-tag">{{ tag }}</span>
        </div>
        <a [routerLink]="['/article', article.id]" class="read-more">
          Read More
          <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round">
            <line x1="5" y1="12" x2="19" y2="12"></line>
            <polyline points="12 5 19 12 12 19"></polyline>
          </svg>
        </a>
      </div>
    </article>
  `,
  styles: [`
    .article-card {
      display: flex;
      flex-direction: column;
      height: 100%;
      overflow: hidden;
      background-color: white;
      border-radius: 8px;
      box-shadow: 0 4px 6px rgba(0, 0, 0, 0.05);
      transition: transform 0.3s ease, box-shadow 0.3s ease;
    }
    
    .article-card:hover {
      transform: translateY(-5px);
      box-shadow: 0 10px 20px rgba(0, 0, 0, 0.1);
    }
    
    .article-card.featured {
      border-bottom: 3px solid var(--accent-500);
    }
    
    .article-image {
      position: relative;
      overflow: hidden;
      height: 200px;
    }
    
    .article-image img {
      width: 100%;
      height: 100%;
      object-fit: cover;
      transition: transform 0.5s ease;
    }
    
    .article-card:hover .article-image img {
      transform: scale(1.05);
    }
    
    .article-category {
      position: absolute;
      top: var(--space-3);
      right: var(--space-3);
      background-color: var(--primary-500);
      color: white;
      padding: var(--space-1) var(--space-2);
      border-radius: 4px;
      font-size: var(--text-xs);
      font-weight: 500;
      text-transform: uppercase;
    }
    
    .article-content {
      padding: var(--space-4);
      display: flex;
      flex-direction: column;
      flex: 1;
    }
    
    .article-title {
      margin-bottom: var(--space-2);
      font-size: var(--text-xl);
    }
    
    .article-title a {
      color: var(--neutral-900);
      text-decoration: none;
      transition: color 0.2s ease;
    }
    
    .article-title a:hover {
      color: var(--primary-500);
    }
    
    .article-meta {
      display: flex;
      flex-wrap: wrap;
      gap: var(--space-2);
      font-size: var(--text-sm);
      color: var(--neutral-500);
      margin-bottom: var(--space-3);
    }
    
    .article-summary {
      margin-bottom: var(--space-4);
      color: var(--neutral-700);
      flex: 1;
    }
    
    .article-tags {
      display: flex;
      flex-wrap: wrap;
      gap: var(--space-2);
      margin-bottom: var(--space-4);
    }
    
    .article-tag {
      background-color: var(--neutral-100);
      color: var(--neutral-700);
      padding: var(--space-1) var(--space-2);
      border-radius: 16px;
      font-size: var(--text-xs);
    }
    
    .read-more {
      display: flex;
      align-items: center;
      gap: var(--space-1);
      color: var(--primary-500);
      font-weight: 500;
      text-decoration: none;
      align-self: flex-start;
      transition: transform 0.2s ease;
    }
    
    .read-more:hover {
      transform: translateX(5px);
    }
  `]
})
export class ArticleCardComponent {
  @Input() article!: Article;
  @Input() isFeatured: boolean = false;
}