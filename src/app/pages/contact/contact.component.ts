import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-contact',
  standalone: true,
  imports: [CommonModule, FormsModule],
  template: `
    <div class="contact-hero">
      <div class="container">
        <h1>Contact Us</h1>
        <p>Get in touch with our research teams and support staff</p>
      </div>
      <div class="hero-overlay"></div>
    </div>
    
    <div class="container">
      <section class="section contact-section">
        <div class="grid grid-2">
          <div class="contact-form-container">
            <h2>Send us a Message</h2>
            <form class="contact-form" (ngSubmit)="onSubmit()">
              <div class="form-group">
                <label for="name">Your Name</label>
                <input type="text" id="name" name="name" [(ngModel)]="contactForm.name" required>
              </div>
              
              <div class="form-group">
                <label for="email">Email Address</label>
                <input type="email" id="email" name="email" [(ngModel)]="contactForm.email" required>
              </div>
              
              <div class="form-group">
                <label for="subject">Subject</label>
                <select id="subject" name="subject" [(ngModel)]="contactForm.subject" required>
                  <option value="">Select a topic</option>
                  <option value="Research Inquiry">Research Inquiry</option>
                  <option value="Collaboration Proposal">Collaboration Proposal</option>
                  <option value="Media Request">Media Request</option>
                  <option value="Job/Internship">Job or Internship</option>
                  <option value="General Question">General Question</option>
                </select>
              </div>
              
              <div class="form-group">
                <label for="message">Your Message</label>
                <textarea id="message" name="message" rows="6" [(ngModel)]="contactForm.message" required></textarea>
              </div>
              
              <div class="form-check">
                <input type="checkbox" id="consent" name="consent" [(ngModel)]="contactForm.consent" required>
                <label for="consent">I consent to ScienceNOVA storing and processing my personal data to respond to my inquiry.</label>
              </div>
              
              <button type="submit" class="btn btn-primary">Send Message</button>
            </form>
            
            <div class="success-message" *ngIf="submitted">
              <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round">
                <path d="M22 11.08V12a10 10 0 1 1-5.93-9.14"></path>
                <polyline points="22 4 12 14.01 9 11.01"></polyline>
              </svg>
              <p>Thank you for your message! We'll get back to you as soon as possible.</p>
            </div>
          </div>
          
          <div class="contact-info">
            <h2>Contact Information</h2>
            
            <div class="info-card">
              <div class="info-icon">
                <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round">
                  <path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6 19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72 12.84 12.84 0 0 0 .7 2.81 2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45 12.84 12.84 0 0 0 2.81.7A2 2 0 0 1 22 16.92z"></path>
                </svg>
              </div>
              <div class="info-content">
                <h3>Phone</h3>
                <p>Main Office: +1 (555) 123-4567</p>
                <p>Research Inquiries: +1 (555) 765-4321</p>
              </div>
            </div>
            
            <div class="info-card">
              <div class="info-icon">
                <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round">
                  <path d="M4 4h16c1.1 0 2 .9 2 2v12c0 1.1-.9 2-2 2H4c-1.1 0-2-.9-2-2V6c0-1.1.9-2 2-2z"></path>
                  <polyline points="22,6 12,13 2,6"></polyline>
                </svg>
              </div>
              <div class="info-content">
                <h3>Email</h3>
                <p>General Inquiries: <a href="mailto:info&#64;sciencenova.org">info&#64;sciencenova.org</a></p>
                <p>Media Relations: <a href="mailto:media&#64;sciencenova.org">media&#64;sciencenova.org</a></p>
                <p>Careers: <a href="mailto:careers&#64;sciencenova.org">careers&#64;sciencenova.org</a></p>
              </div>
            </div>
            
            <div class="info-card">
              <div class="info-icon">
                <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round">
                  <path d="M21 10c0 7-9 13-9 13s-9-6-9-13a9 9 0 0 1 18 0z"></path>
                  <circle cx="12" cy="10" r="3"></circle>
                </svg>
              </div>
              <div class="info-content">
                <h3>Address</h3>
                <p>ScienceNOVA Headquarters</p>
                <p>1234 Innovation Boulevard</p>
                <p>Boston, MA 02108</p>
                <p>United States</p>
              </div>
            </div>
            
            <div class="info-card">
              <div class="info-icon">
                <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round">
                  <circle cx="12" cy="12" r="10"></circle>
                  <polyline points="12 6 12 12 16 14"></polyline>
                </svg>
              </div>
              <div class="info-content">
                <h3>Office Hours</h3>
                <p>Monday - Friday: 9:00 AM - 5:00 PM EST</p>
                <p>Research Facilities: 24/7 (Access by appointment)</p>
              </div>
            </div>
          </div>
        </div>
      </section>
      
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
      
      <section class="section faq-section">
        <h2 class="section-title">Frequently Asked Questions</h2>
        <div class="faq-container">
          <div class="faq-item" *ngFor="let faq of faqs; let i = index" (click)="toggleFaq(i)">
            <div class="faq-question" [class.active]="faq.open">
              <h3>{{ faq.question }}</h3>
              <span class="faq-icon">
                <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round">
                  <line x1="12" y1="5" x2="12" y2="19"></line>
                  <line x1="5" y1="12" x2="19" y2="12" [ngStyle]="{'display': faq.open ? 'none' : 'block'}"></line>
                </svg>
              </span>
            </div>
            <div class="faq-answer" [class.open]="faq.open">
              <p>{{ faq.answer }}</p>
            </div>
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
export class ContactComponent {
  contactForm = {
    name: '',
    email: '',
    subject: '',
    message: '',
    consent: false
  };
  
  submitted = false;
  
  faqs = [
    {
      question: 'How can I apply for research funding?',
      answer: 'Research funding applications are processed through our grants portal. Researchers should first check the current funding opportunities on our website, then prepare a proposal according to the specified guidelines. Applications are reviewed quarterly by our scientific committee.',
      open: false
    },
    {
      question: 'Do you offer internships for students?',
      answer: 'Yes, we offer internships for undergraduate and graduate students across various scientific disciplines. Internship opportunities are posted on our careers page three times a year (spring, summer, and fall). We also have a year-round research fellowship program for doctoral candidates.',
      open: false
    },
    {
      question: 'How can I access the research papers published by your scientists?',
      answer: 'All research papers published by ScienceNOVA scientists are available through our open access digital repository. You can search by author, topic, or publication date. For specialized research that may have access restrictions, please contact the corresponding author directly.',
      open: false
    },
    {
      question: 'Can I visit your research facilities?',
      answer: 'We organize public tours of our facilities on the first Friday of each month. For educational institutions, we offer specialized guided tours by appointment. Some sensitive research areas have restricted access, but our visitor center features interactive exhibits showcasing our work.',
      open: false
    },
    {
      question: 'How can I collaborate with your researchers?',
      answer: 'We welcome collaboration proposals from academic institutions, industry partners, and independent researchers. Please submit a brief outline of your proposed collaboration through our Partnerships department, including your research interests, objectives, and potential synergies with our ongoing work.',
      open: false
    }
  ];
  
  onSubmit() {
    // In a real application, this would submit the form data to a server
    console.log('Form submitted', this.contactForm);
    this.submitted = true;
    
    // Reset form after showing success message
    setTimeout(() => {
      this.contactForm = {
        name: '',
        email: '',
        subject: '',
        message: '',
        consent: false
      };
      this.submitted = false;
    }, 5000);
  }
  
  toggleFaq(index: number) {
    this.faqs[index].open = !this.faqs[index].open;
  }
}