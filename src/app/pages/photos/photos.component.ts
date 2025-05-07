import { Component } from '@angular/core';

@Component({
  selector: 'app-photos',
  standalone: true,
  template: `
    <div class="media-page">
      <h1>Photos</h1>
      <p>Ici, vous trouverez une collection de photos médiatiques.</p>
      <!-- Ajoutez ici la galerie ou la grille de photos -->
    </div>
  `,
  styles: [`
    .media-page {
      padding: 2rem;
      color: var(--primary-900);
      background: white;
      min-height: 60vh;
    }
    h1 {
      color: var(--secondary-300);
      margin-bottom: 1.5rem;
    }
  `]
})
export class PhotosComponent {} 