import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ActivatedRoute, RouterLink } from '@angular/router';
import { Article } from '../../models/article.model';
import { ArticleService } from '../../services/article.service';

@Component({
  selector: 'app-article-detail',
  standalone: true,
  imports: [CommonModule, RouterLink],
  templateUrl: './article-detail.component.html',
  styleUrls: ['./article-detail.component.scss']
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

  onImageError(event: any) {
    // Fallback to a default image if the original fails to load
    event.target.src = 'assets/images/article1.jpeg';
  }
}