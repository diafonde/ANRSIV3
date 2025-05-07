import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SafePipe } from './safe.pipe';

@Component({
  selector: 'app-videos',
  standalone: true,
  imports: [CommonModule, SafePipe],
  template: `
  
    <div class="contact-hero">
      <div class="container">
        <h1>Mediatique</h1>
        <p>Get in touch with our research teams and support staff</p>
      </div>
      <div class="hero-overlay"></div>
    </div>
    
    <div class="container">
      
<!-- Container for the image gallery -->
    <div class="media-sections">
      <section class="media-block">
        <h2 class="media-title">Vidéos</h2>
        <div class="media-grid">
          <div class="media-card" *ngFor="let video of videos">
            <div class="media-thumb">
              <iframe
                [src]="video.url | safe"
                frameborder="0"
                allowfullscreen
                title="{{ video.title }}">
              </iframe>
            </div>
            <div class="media-caption">{{ video.title }}</div>
          </div>
        </div>
      </section>

      <section class="media-block">
        <h2 class="media-title">Photos</h2>
        <div class="media-grid">
          <div class="media-card" *ngFor="let photo of photos">
            <div class="media-thumb">
              <img [src]="photo.url" [alt]="photo.title" />
            </div>
            <div class="media-caption">{{ photo.title }}</div>
          </div>
        </div>
      </section>
    </div>

 
     
    </div>
  `,
  styles: [`
    .contact-hero {
      position: relative;
      height: 300px;
      background-image: url('https://images.pexels.com/photos/2467506/pexels-photo-2467506.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2');
      background-size: cover;
      background-position: center;
      display: flex;
      align-items: center;
      color: white;
      margin-top: 60px;
    }
    
    .contact-hero .container {
      position: relative;
      z-index: 2;
      text-align: center;
    }
    
    .contact-hero h1 {
      font-size: clamp(2.5rem, 5vw, 4rem);
      margin-bottom: var(--space-3);
      color: white;
    }
    
    .contact-hero p {
      font-size: clamp(1.1rem, 2vw, 1.5rem);
      max-width: 600px;
      margin: 0 auto;
    }
    
    .hero-overlay {
      position: absolute;
      top: 0;
      left: 0;
      width: 100%;
      height: 100%;
      background: linear-gradient(to right, rgba(10, 61, 98, 0.8), rgba(10, 61, 98, 0.6));
      z-index: 1;
    }
    
    .contact-section {
      padding-top: var(--space-12);
    }
    
    .contact-form-container {
      background-color: white;
      padding: var(--space-6);
      border-radius: 8px;
      box-shadow: 0 4px 20px rgba(0, 0, 0, 0.1);
    }
    
    .contact-form-container h2 {
      margin-bottom: var(--space-6);
      color: var(--primary-600);
    }
    
    .form-group {
      margin-bottom: var(--space-4);
    }
    
    .form-group label {
      display: block;
      margin-bottom: var(--space-2);
      font-weight: 500;
      color: var(--neutral-700);
    }
    
    .form-group input,
    .form-group select,
    .form-group textarea {
      width: 100%;
      padding: var(--space-3);
      border: 1px solid var(--neutral-300);
      border-radius: 4px;
      font-size: var(--text-base);
      transition: border-color 0.2s ease;
    }
    
    .form-group input:focus,
    .form-group select:focus,
    .form-group textarea:focus {
      border-color: var(--primary-500);
      outline: none;
      box-shadow: 0 0 0 3px rgba(10, 61, 98, 0.1);
    }
    
    .form-check {
      display: flex;
      align-items: flex-start;
      gap: var(--space-2);
      margin-bottom: var(--space-6);
    }
    
    .form-check input {
      margin-top: 5px;
    }
    
    .success-message {
      display: flex;
      align-items: center;
      gap: var(--space-3);
      margin-top: var(--space-6);
      padding: var(--space-4);
      background-color: #d1fae5;
      border-radius: 8px;
      color: #065f46;
    }
    
    .success-message svg {
      color: #059669;
      flex-shrink: 0;
    }
    
    .contact-info {
      display: flex;
      flex-direction: column;
      gap: var(--space-6);
    }
    
    .contact-info h2 {
      margin-bottom: var(--space-6);
      color: var(--primary-600);
    }
    
    .info-card {
      display: flex;
      align-items: flex-start;
      gap: var(--space-4);
      padding: var(--space-4);
      background-color: white;
      border-radius: 8px;
      box-shadow: 0 4px 6px rgba(0, 0, 0, 0.05);
      transition: transform 0.3s ease, box-shadow 0.3s ease;
    }
    
    .info-card:hover {
      transform: translateY(-5px);
      box-shadow: 0 10px 15px rgba(0, 0, 0, 0.1);
    }
    
    .info-icon {
      width: 48px;
      height: 48px;
      background-color: var(--primary-50);
      border-radius: 50%;
      display: flex;
      align-items: center;
      justify-content: center;
      color: var(--primary-500);
      flex-shrink: 0;
    }
    
    .info-content h3 {
      margin-bottom: var(--space-2);
      color: var(--neutral-900);
      font-size: var(--text-lg);
    }
    
    .info-content p {
      margin-bottom: var(--space-1);
      color: var(--neutral-700);
    }
    
    .departments-section {
      background-color: var(--neutral-50);
    }
    
    .department-card {
      background-color: white;
      padding: var(--space-6);
      border-radius: 8px;
      box-shadow: 0 4px 6px rgba(0, 0, 0, 0.05);
      transition: transform 0.3s ease, box-shadow 0.3s ease;
    }
    
    .department-card:hover {
      transform: translateY(-5px);
      box-shadow: 0 10px 15px rgba(0, 0, 0, 0.1);
    }
    
    .department-card h3 {
      margin-bottom: var(--space-3);
      color: var(--primary-600);
    }
    
    .department-card p {
      margin-bottom: var(--space-2);
      color: var(--neutral-700);
    }
    
    .faq-section {
      background-color: white;
    }
    
    .faq-container {
      max-width: 800px;
      margin: 0 auto;
    }
    
    .faq-item {
      border-bottom: 1px solid var(--neutral-200);
      cursor: pointer;
    }
    
    .faq-question {
      display: flex;
      justify-content: space-between;
      align-items: center;
      padding: var(--space-4) 0;
      color: var(--neutral-800);
      transition: color 0.2s ease;
    }
    
    .faq-question h3 {
      margin: 0;
      font-size: var(--text-lg);
      transition: color 0.2s ease;
    }
    
    .faq-question.active h3 {
      color: var(--primary-500);
    }
    
    .faq-icon {
      color: var(--neutral-500);
      transition: transform 0.3s ease;
    }
    
    .faq-question.active .faq-icon {
      color: var(--primary-500);
      transform: rotate(180deg);
    }
    
    .faq-answer {
      max-height: 0;
      overflow: hidden;
      opacity: 0;
      transition: all 0.3s ease-out;
    }
    
    .faq-answer.open {
      max-height: 500px;
      opacity: 1;
      padding-bottom: var(--space-4);
    }
    
    .faq-answer p {
      color: var(--neutral-600);
    }

    .media-sections {
      max-width: 1100px;
      margin: 2rem auto;
      padding: 2rem 1rem;
    }
    .media-block {
      margin-bottom: 3rem;
    }
    .media-title {
      font-size: 2rem;
      color: #1976d2;
      margin-bottom: 1.5rem;
      text-align: left;
    }
    .media-grid {
      display: grid;
      grid-template-columns: repeat(auto-fit, minmax(320px, 1fr));
      gap: 2rem;
    }
    .media-card {
      background: #fff;
      border-radius: 12px;
      box-shadow: 0 2px 8px rgba(0,0,0,0.06);
      overflow: hidden;
      display: flex;
      flex-direction: column;
      align-items: center;
      transition: box-shadow 0.2s;
    }
    .media-card:hover {
      box-shadow: 0 6px 24px rgba(25, 118, 210, 0.12);
    }
    .media-thumb {
      width: 100%;
      aspect-ratio: 16/9;
      background: #eee;
      display: flex;
      align-items: center;
      justify-content: center;
    }
    .media-thumb img, .media-thumb iframe {
      width: 100%;
      height: 100%;
      object-fit: cover;
      border: none;
      border-radius: 0;
    }
    .media-caption {
      padding: 1rem;
      font-weight: 500;
      text-align: center;
      color: #333;
    }
 
  `]
})
export class VideosComponent {
  selectedIndex = 0;
  videos = [
    { title: "Présentation de l'Agence", url: "https://www.youtube.com/embed/EMgwHc1F5W8", type: "youtube" },
    { title: "Recherche Scientifique", url: "https://www.youtube.com/embed/jNQXAC9IVRw", type: "youtube" },
    { title: "Nouvelles Technologies", url: "https://youtube.com/embed/4PupAG-vJnk", type: "youtube" }
    // Add more videos as needed
  ];
  photos = [
    { title: "Conférence annuelle", url: "https://images.unsplash.com/photo-1506744038136-46273834b3fb?auto=format&fit=crop&w=400&q=80", type: "photo" },
    { title: "Laboratoire de recherche", url: "https://images.unsplash.com/photo-1464983953574-0892a716854b?auto=format&fit=crop&w=400&q=80", type: "photo" },
    { title: "Innovation technologique", url: "https://images.unsplash.com/photo-1519125323398-675f0ddb6308?auto=format&fit=crop&w=400&q=80", type: "photo" },
    
    // Add more photos as needed
  ];
}
