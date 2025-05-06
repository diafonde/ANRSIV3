import { Injectable } from '@angular/core';
import { Article } from '../models/article.model';
import { Observable, of } from 'rxjs';
import { delay } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class ArticleService {
  private articles: Article[] = [
    {
      id: '1',
      title: 'Breakthrough in Quantum Computing Achieved',
      summary: 'Scientists have developed a new method to stabilize quantum bits, bringing practical quantum computing one step closer.',
      content: `Our research team has successfully demonstrated a novel approach to stabilizing quantum bits (qubits) for longer periods, solving one of the major challenges in quantum computing development. 

      The new technique, which combines advanced materials science with innovative cooling methods, allows qubits to maintain their quantum state for up to 10 minutes - a dramatic improvement over previous records measured in seconds.
      
      "This breakthrough could accelerate the development of practical quantum computers by years," said Dr. Sarah Chen, lead researcher on the project. "With stable qubits, we can now focus on scaling up the number of qubits and implementing more complex quantum algorithms."
      
      The research, funded by the National Science Foundation, has implications beyond computing, potentially impacting fields like cryptography, drug discovery, and materials science.`,
      author: 'Dr. Sarah Chen',
      publicationDate: new Date('2025-03-15'),
      category: 'Quantum Physics',
      imageUrl: 'assets/images/directeur.jpeg',
      featured: true,
      tags: ['Quantum Computing', 'Physics', 'Technology']
    },
    {
      id: '2',
      title: 'New Biodegradable Plastic Alternative Developed',
      summary: 'Researchers have created a fully biodegradable plastic alternative from agricultural waste that breaks down in weeks.',
      content: `A team of environmental scientists and material engineers has developed a promising new plastic alternative made entirely from agricultural waste products. The material, named "EcoPolymer," possesses strength and flexibility comparable to conventional plastics but can biodegrade completely within 6-8 weeks in standard composting conditions.

      "We wanted to address the growing plastic pollution crisis by creating a truly sustainable alternative," explained Dr. Miguel Rodriguez, who led the research team. "Unlike many 'biodegradable' plastics that still leave microplastic residues, EcoPolymer breaks down completely into non-toxic compounds that can actually enrich soil."
      
      The innovation utilizes cellulose fibers from crop residues combined with a binding agent derived from food processing byproducts. This approach not only creates a useful material but also finds purpose for agricultural waste that would otherwise be burned or discarded.
      
      Initial testing shows the material is suitable for food packaging, disposable utensils, and various consumer goods. The team is now working with industry partners to scale up production and bring EcoPolymer products to market within two years.`,
      author: 'Dr. Miguel Rodriguez',
      publicationDate: new Date('2025-02-28'),
      category: 'Environmental Science',
      imageUrl: 'assets/images/france.jpeg',
      featured: true,
      tags: ['Environment', 'Materials Science', 'Sustainability']
    },
    {
      id: '3',
      title: 'AI System Predicts Protein Structures with Unprecedented Accuracy',
      summary: 'A new artificial intelligence system can predict complex protein structures with 95% accuracy, advancing drug discovery potential.',
      content: `Researchers have developed an artificial intelligence system that can predict the three-dimensional structure of proteins with remarkable accuracy, potentially revolutionizing drug discovery and biological research.

      The system, called ProteinFold AI, uses a combination of deep learning techniques and vast datasets of known protein structures to predict how amino acid chains will fold into functional proteins. In blind tests, the system achieved 95% accuracy across a wide range of protein types, outperforming all previous computational methods.
      
      "Understanding protein structure is fundamental to understanding how they function and how they can be targeted with medications," said Dr. Emma Wilson, lead computer scientist on the project. "Our system can now predict structures for proteins that have resisted traditional analysis methods for decades."
      
      The implications for drug development are significant, as researchers can now rapidly identify potential binding sites for new medications and understand disease mechanisms at the molecular level. The system has already been used to analyze several proteins associated with neurodegenerative diseases, revealing previously unknown structural features that may be targeted therapeutically.
      
      The research team has made the system available to the scientific community through a cloud-based platform, allowing researchers worldwide to submit protein sequences for analysis.`,
      author: 'Dr. Emma Wilson',
      publicationDate: new Date('2025-02-10'),
      category: 'Artificial Intelligence',
      imageUrl: 'assets/images/reu.jpeg',
      featured: false,
      tags: ['AI', 'Biotechnology', 'Medicine']
    },
    {
      id: '4',
      title: 'Solar Panel Efficiency Record Shattered',
      summary: 'New photovoltaic cell design achieves 35% efficiency, marking a significant advancement in solar technology.',
      content: `Scientists from the National Renewable Energy Laboratory have developed a new type of solar cell that converts sunlight to electricity with an efficiency of 35% - shattering the previous record of 29.8% for commercially viable technology.

      The breakthrough was achieved by creating a multi-junction cell with specialized materials that capture different portions of the light spectrum. Unlike previous high-efficiency designs that required expensive materials and complex manufacturing, this new approach uses earth-abundant materials and can be produced using modified versions of existing manufacturing equipment.
      
      "This represents a step-change in what's possible with solar energy," said Dr. James Park, the project's principal investigator. "At this efficiency level and with our projected manufacturing costs, solar electricity will be significantly cheaper than fossil fuel alternatives in virtually every market."
      
      The technology has already attracted interest from major solar manufacturers, with pilot production expected to begin within 18 months. Industry analysts suggest the innovation could accelerate the global transition to renewable energy by making solar power more economically attractive in regions previously considered marginal for solar deployment.
      
      The research was funded through a combination of government grants and industry partnerships, with all patents being licensed under favorable terms to encourage rapid adoption.`,
      author: 'Dr. James Park',
      publicationDate: new Date('2025-01-25'),
      category: 'Renewable Energy',
      imageUrl: 'assets/images/chef.jpeg',
      featured: true,
      tags: ['Solar Energy', 'Engineering', 'Climate']
    },
    {
      id: '5',
      title: 'Gene Therapy Successfully Treats Rare Genetic Disorder',
      summary: 'Clinical trial shows complete reversal of symptoms in patients with rare metabolic disorder using targeted gene therapy.',
      content: `A groundbreaking clinical trial has demonstrated the successful treatment of Harrington's Syndrome, a rare genetic disorder affecting metabolic processes, using a novel gene therapy approach.

      The trial, involving 24 patients with confirmed genetic mutations causing the syndrome, used an engineered viral vector to deliver a functional copy of the affected gene to patients' liver cells. Within three months of treatment, all patients showed significant improvement in metabolic markers, with 18 patients experiencing complete reversal of symptoms.
      
      "This is the first time we've seen a genetic disorder of this complexity respond so completely to gene therapy," remarked Dr. Lisa Johnson, who led the clinical program. "These patients went from requiring constant medical management to living essentially normal lives."
      
      The therapy works by using a modified adeno-associated virus that specifically targets liver cells, where the metabolic dysfunction originates. Once delivered, the functional gene produces the enzyme that patients with Harrington's Syndrome lack.
      
      Long-term follow-up will continue for five years, but initial data suggests the treatment effect is durable, with treated patients maintaining normal metabolic function for the 18 months since treatment.
      
      The research team is now exploring how the same delivery platform might be adapted to treat other genetic disorders affecting liver function.`,
      author: 'Dr. Lisa Johnson',
      publicationDate: new Date('2025-01-15'),
      category: 'Medical Research',
      imageUrl: 'https://images.pexels.com/photos/8325982/pexels-photo-8325982.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2',
      featured: false,
      tags: ['Genetics', 'Medicine', 'Biotechnology']
    },
    {
      id: '6',
      title: 'New Space Telescope Reveals Extraordinary Views of Distant Galaxies',
      summary: 'The recently launched DeepView Space Telescope has sent back its first images, showing unprecedented detail of galaxies billions of light years away.',
      content: `The DeepView Space Telescope, launched six months ago into an orbit beyond the Moon, has transmitted its first set of scientific images, revealing details of distant galaxies never before observed by human instruments.

      The telescope, which features a 12-meter primary mirror and advanced spectroscopic capabilities, has captured images of galaxies more than 13 billion light years away, showing them as they appeared when the universe was less than 5% of its current age.
      
      "What we're seeing is extraordinary," said Dr. Robert Chen, DeepView's principal investigator. "We can observe individual star-forming regions in these ancient galaxies, giving us new insights into how the earliest galaxies evolved."
      
      One particularly notable image shows evidence of what appears to be a supermassive black hole in a galaxy that existed just 400 million years after the Big Bang – far earlier than current theories predicted such structures would form.
      
      "This observation alone will force us to revise our understanding of early galaxy formation," explained Dr. Elena Martinez, a theoretical astrophysicist consulting on the project. "It suggests these massive structures formed much faster than our models predicted."
      
      The $4.2 billion telescope, a collaboration between multiple space agencies, is expected to operate for at least 15 years, with its most ambitious observation programs just beginning.`,
      author: 'Dr. Robert Chen',
      publicationDate: new Date('2024-12-20'),
      category: 'Astronomy',
      imageUrl: 'https://images.pexels.com/photos/2150/sky-space-dark-galaxy.jpg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2',
      featured: false,
      tags: ['Astronomy', 'Cosmology', 'Space']
    }
  ];

  constructor() {}

  getArticles(): Observable<Article[]> {
    return of(this.articles).pipe(delay(300));
  }

  getFeaturedArticles(): Observable<Article[]> {
    return of(this.articles.filter(article => article.featured)).pipe(delay(300));
  }

  getRecentArticles(count: number = 3): Observable<Article[]> {
    return of([...this.articles]
      .sort((a, b) => b.publicationDate.getTime() - a.publicationDate.getTime())
      .slice(0, count)
    ).pipe(delay(300));
  }

  getArticleById(id: string): Observable<Article | undefined> {
    return of(this.articles.find(article => article.id === id))
      .pipe(delay(300));
  }

  getArticlesByCategory(category: string): Observable<Article[]> {
    return of(this.articles.filter(article => 
      article.category.toLowerCase() === category.toLowerCase()
    )).pipe(delay(300));
  }

  searchArticles(term: string): Observable<Article[]> {
    const searchTerm = term.toLowerCase();
    return of(this.articles.filter(article => 
      article.title.toLowerCase().includes(searchTerm) ||
      article.summary.toLowerCase().includes(searchTerm) ||
      article.content.toLowerCase().includes(searchTerm) ||
      article.tags.some(tag => tag.toLowerCase().includes(searchTerm))
    )).pipe(delay(300));
  }
}