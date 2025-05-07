import { Component } from '@angular/core';

@Component({
  selector: 'app-videos',
  standalone: true,
  template: `
    <div class="contact-hero">
      <div class="container">
        <h1>Mediatique</h1>
        <p>Get in touch with our research teams and support staff</p>
      </div>
      <div class="hero-overlay"></div>
    </div>
    
    <div class="container">
     
      
      <section class="section departments-section">
        <h2 class="section-title">Departments</h2>
        <div class="grid grid-3">
          <div class="department-card">
            <h3>Research & Development</h3>
            <p>Contact our R&D department for inquiries about ongoing research projects, methodologies, and findings.</p>
            <p><strong>Email:</strong> <a href="mailto:research&#64;sciencenova.org">research&#64;sciencenova.org</a></p>
            <p><strong>Phone:</strong> +1 (555) 123-4567</p>
          </div>
          
          <div class="department-card">
            <h3>Partnerships & Collaborations</h3>
            <p>For institutional partnerships, research collaborations, and joint venture opportunities.</p>
            <p><strong>Email:</strong> <a href="mailto:partnerships&#64;sciencenova.org">partnerships&#64;sciencenova.org</a></p>
            <p><strong>Phone:</strong> +1 (555) 123-8901</p>
          </div>
          
          <div class="department-card">
            <h3>Media & Public Relations</h3>
            <p>For press inquiries, interview requests, and media resources.</p>
            <p><strong>Email:</strong> <a href="mailto:media&#64;sciencenova.org">media&#64;sciencenova.org</a></p>
            <p><strong>Phone:</strong> +1 (555) 123-6789</p>
          </div>
          
          <div class="department-card">
            <h3>Funding & Grants</h3>
            <p>Information about research grants, funding opportunities, and application processes.</p>
            <p><strong>Email:</strong> <a href="mailto:grants&#64;sciencenova.org">grants&#64;sciencenova.org</a></p>
            <p><strong>Phone:</strong> +1 (555) 123-3456</p>
          </div>
          
          <div class="department-card">
            <h3>Education & Outreach</h3>
            <p>For educational programs, workshops, and public engagement initiatives.</p>
            <p><strong>Email:</strong> <a href="mailto:education&#64;sciencenova.org">education&#64;sciencenova.org</a></p>
            <p><strong>Phone:</strong> +1 (555) 123-2345</p>
          </div>
          
          <div class="department-card">
            <h3>Human Resources</h3>
            <p>For job opportunities, internships, and career-related inquiries.</p>
            <p><strong>Email:</strong> <a href="mailto:careers&#64;sciencenova.org">careers&#64;sciencenova.org</a></p>
            <p><strong>Phone:</strong> +1 (555) 123-5678</p>
          </div>
        </div>
      </section>
      
     
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
  `]
})
export class VideosComponent {} 