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
      title: 'Conférence internationale et atelier de formation sur « La transformation des systèmes alimentaires pour l\'action climatique » (ICTW-FSTCA 2025)',
      summary: 'L\'ANRSI organise une conférence internationale majeure sur la transformation des systèmes alimentaires dans le contexte du changement climatique.',
      content: `L'Agence Nationale de la Recherche Scientifique et de l'Innovation (ANRSI) organise du 15 au 17 mars 2025 une conférence internationale et un atelier de formation sur « La transformation des systèmes alimentaires pour l'action climatique » (ICTW-FSTCA 2025).

Cette conférence réunira des experts internationaux, des chercheurs, des décideurs politiques et des représentants du secteur privé pour discuter des défis et des opportunités liés à la transformation des systèmes alimentaires dans le contexte du changement climatique.

Les thèmes principaux incluront :
- L'adaptation des systèmes agricoles au changement climatique
- L'innovation technologique dans la production alimentaire
- La sécurité alimentaire et nutritionnelle
- Les politiques publiques pour une agriculture durable
- Le rôle de la recherche et de l'innovation

Cette initiative s'inscrit dans le cadre de la stratégie nationale de recherche et d'innovation de la Mauritanie et contribue aux Objectifs de Développement Durable (ODD) des Nations Unies.

La conférence sera l'occasion de présenter les dernières innovations en matière d'agriculture durable, de technologies alimentaires et de politiques publiques adaptées aux défis climatiques. Des ateliers pratiques permettront aux participants de se familiariser avec les nouvelles techniques et approches.

L'ANRSI invite tous les acteurs concernés par la sécurité alimentaire et le développement durable à participer à cet événement majeur qui façonnera l'avenir de l'agriculture en Mauritanie et dans la région.`,
      author: 'ANRSI',
      publicationDate: new Date('2025-03-15'),
      category: 'Conférence',
      imageUrl: 'assets/images/Food Systems Transformation for Climate Actions.jpg',
      featured: true,
      tags: ['climat', 'agriculture', 'innovation', 'développement durable']
    },
    {
      id: '2',
      title: 'COMSTECH-UTS International Workshop on Renewable Energy: Affordable & Clean Energy for ALL (CURE-ALL)',
      summary: 'Workshop international sur les énergies renouvelables organisé en collaboration avec COMSTECH et UTS.',
      content: `L'ANRSI participe activement au COMSTECH-UTS International Workshop on Renewable Energy: Affordable & Clean Energy for ALL (CURE-ALL), qui se déroule du 20 au 22 février 2025.

Ce workshop international vise à promouvoir l'accès à des énergies propres et abordables pour tous, conformément à l'Objectif de Développement Durable 7 (ODD 7). L'événement rassemble des experts en énergies renouvelables, des chercheurs, des ingénieurs et des décideurs politiques.

Les sessions couvriront :
- Technologies solaires et éoliennes
- Systèmes de stockage d'énergie
- Énergies marines renouvelables
- Politiques énergétiques durables
- Financement des projets d'énergie verte
- Formation et renforcement des capacités

La Mauritanie, avec son potentiel important en énergies renouvelables, notamment solaire et éolienne, joue un rôle clé dans cette initiative régionale. Le pays dispose d'un des meilleurs potentiels solaires au monde avec plus de 3 000 heures d'ensoleillement par an.

Ce workshop s'inscrit dans la stratégie nationale de transition énergétique de la Mauritanie, qui vise à atteindre 50% d'énergies renouvelables dans le mix énergétique d'ici 2030. L'ANRSI coordonne plusieurs projets de recherche dans ce domaine, notamment sur l'optimisation des systèmes photovoltaïques et l'intégration des énergies renouvelables dans le réseau électrique national.`,
      author: 'ANRSI',
      publicationDate: new Date('2025-02-20'),
      category: 'Workshop',
      imageUrl: 'assets/images/WhatsApp Image 2025-08-09 at 15.03.01.jpeg',
      featured: true,
      tags: ['énergie renouvelable', 'COMSTECH', 'UTS', 'développement durable']
    },
    {
      id: '3',
      title: 'Lancement de l\'édition 2025 de SEE PAKISTAN avec une participation mauritanienne',
      summary: 'La Mauritanie participe activement à l\'événement international SEE PAKISTAN à Lahore.',
      content: `L'Agence Nationale de la Recherche Scientifique et de l'Innovation (ANRSI) est fière d'annoncer la participation de la Mauritanie à l'édition 2025 de SEE PAKISTAN, qui se déroule à Lahore du 10 au 12 mars 2025.

SEE PAKISTAN (Science, Education, and Economy) est un événement international majeur qui rassemble des experts en science, éducation et économie pour discuter des défis mondiaux et des opportunités de collaboration.

La délégation mauritanienne, dirigée par l'ANRSI, présentera :
- Les priorités de recherche nationales à l'horizon 2026
- Les projets d'innovation en cours
- Les opportunités de coopération internationale
- Le potentiel de la Mauritanie en matière de recherche scientifique

Cette participation renforce les liens de coopération entre la Mauritanie et le Pakistan dans les domaines de la science, de la technologie et de l'innovation. Les deux pays partagent des défis similaires en matière de développement et peuvent bénéficier mutuellement de leurs expériences et de leurs innovations.

L'événement sera l'occasion de nouer de nouveaux partenariats et de présenter les capacités de recherche de la Mauritanie à la communauté scientifique internationale. Plusieurs projets de collaboration sont déjà en cours de discussion avec des institutions pakistanaises.`,
      author: 'ANRSI',
      publicationDate: new Date('2025-03-10'),
      category: 'Participation Internationale',
      imageUrl: 'assets/images/WhatsApp Image 2025-08-18 at 14.48.29.jpeg',
      featured: true,
      tags: ['Pakistan', 'coopération internationale', 'science', 'innovation']
    },
    {
      id: '4',
      title: 'L\'ANRSI participe à une conférence internationale sur « l\'autonomisation des jeunes pour la réalisation des Objectifs de Développement Durable »',
      summary: 'Participation de l\'ANRSI à une conférence internationale sur l\'autonomisation des jeunes pour les ODD.',
      content: `L'ANRSI participe activement à une conférence internationale sur « l'autonomisation des jeunes pour la réalisation des Objectifs de Développement Durable », qui se déroule du 25 au 27 février 2025.

Cette conférence internationale met l'accent sur le rôle crucial des jeunes dans la réalisation des Objectifs de Développement Durable (ODD) des Nations Unies. Elle rassemble des jeunes leaders, des chercheurs, des décideurs politiques et des représentants d'organisations internationales.

Les thèmes abordés incluent :
- L'éducation et la formation des jeunes
- L'entrepreneuriat et l'innovation sociale
- La participation citoyenne des jeunes
- Les technologies numériques au service du développement
- Le leadership et l'engagement communautaire

L'ANRSI présente ses initiatives en faveur de la jeunesse mauritanienne, notamment les programmes de formation, les bourses de recherche et les opportunités d'innovation. L'agence a mis en place plusieurs programmes spécifiquement dédiés aux jeunes chercheurs et entrepreneurs.

Cette conférence s'inscrit dans la stratégie de l'ANRSI visant à impliquer davantage les jeunes dans les processus de recherche et d'innovation. Plusieurs projets pilotes sont en cours avec des jeunes chercheurs mauritaniens dans des domaines prioritaires comme l'agriculture durable, les énergies renouvelables et les technologies numériques.`,
      author: 'ANRSI',
      publicationDate: new Date('2025-02-25'),
      category: 'Conférence',
      imageUrl: 'assets/images/directeur.jpeg',
      featured: true,
      tags: ['jeunesse', 'ODD', 'autonomisation', 'développement']
    },
    {
      id: '5',
      title: 'Le Directeur Général de l\'ANRSI reçoit le Doyen de la Faculté de Médecine, de Pharmacie et d\'Odontostomatologie de Nouakchott',
      summary: 'Rencontre importante entre l\'ANRSI et la Faculté de Médecine pour renforcer la collaboration en recherche médicale.',
      content: `Le Directeur Général de l'Agence Nationale de la Recherche Scientifique et de l'Innovation (ANRSI) a reçu le Doyen de la Faculté de Médecine, de Pharmacie et d'Odontostomatologie de Nouakchott dans le cadre d'une rencontre de travail le 15 février 2025.

Cette rencontre s'inscrit dans le cadre du renforcement de la collaboration entre l'ANRSI et les institutions universitaires mauritaniennes, particulièrement dans le domaine de la recherche médicale et pharmaceutique.

Les discussions ont porté sur :
- Le développement de projets de recherche conjoints
- La formation des chercheurs en médecine
- L'innovation dans le domaine pharmaceutique
- Les partenariats internationaux en santé
- Le financement de la recherche médicale

Cette collaboration renforce le rôle de l'ANRSI dans le développement de la recherche médicale en Mauritanie et contribue à améliorer la qualité des soins de santé. Plusieurs projets de recherche sont déjà en cours, notamment sur les maladies tropicales, la pharmacopée traditionnelle et les technologies médicales adaptées au contexte local.

La Faculté de Médecine dispose d'un potentiel important en matière de recherche clinique et épidémiologique. Cette collaboration permettra de mieux structurer et financer les activités de recherche médicale en Mauritanie.`,
      author: 'ANRSI',
      publicationDate: new Date('2025-02-15'),
      category: 'Rencontre',
      imageUrl: 'assets/images/chef.jpeg',
      featured: false,
      tags: ['médecine', 'université', 'collaboration', 'recherche médicale']
    },
    {
      id: '6',
      title: 'Programme Commun de Mobilité Recherche PCMR (Listes des lauréats)',
      summary: 'La commission mixte pour la sélection des bourses du gouvernement mauritanien et français s\'est réunie à l\'ANRSI.',
      content: `Programme Commun de Mobilité Recherche PCMR (Listes des lauréats)

La commission mixte pour la sélection des bourses du gouvernement mauritanien et français s'est réunie ce jour à l'Agence nationale de la Recherche scientifique et de l'Innovation (ANRSI).

Ci-dessous la liste des lauréats du Programme Commun de Mobilité Recherche (PCMR) pour l'année 2025 :

**Domaine Sciences Exactes et Naturelles :**
- Dr. Ahmed Mohamed Salem - Physique des matériaux
- Dr. Fatima Mint Mohamed - Chimie analytique
- Dr. Mohamed Abdellahi - Mathématiques appliquées

**Domaine Sciences de la Vie et de la Santé :**
- Dr. Aïcha Mint Cheikh - Biologie moléculaire
- Dr. Sidi Mohamed Ould Cheikh - Médecine tropicale
- Dr. Khadija Mint Mohamed - Pharmacologie

**Domaine Sciences Humaines et Sociales :**
- Dr. Mohamed Salem Ould Ahmed - Économie du développement
- Dr. Fatou Mint Mohamed - Sociologie urbaine
- Dr. Cheikh Mohamed Ould Salem - Histoire contemporaine

Ce programme permet aux chercheurs mauritaniens de bénéficier d'une formation de haut niveau dans les meilleures institutions françaises et de développer des collaborations scientifiques durables.`,
      author: 'ANRSI',
      publicationDate: new Date('2025-02-28'),
      category: 'Bourses',
      imageUrl: 'assets/images/france.jpeg',
      featured: true,
      tags: ['bourses', 'France', 'mobilité', 'recherche']
    },
    {
      id: '7',
      title: 'Entretien Avec Isabelle Henry, représentante de l\'IRD à Dakar',
      summary: 'Entretien exclusif avec Isabelle Henry sur la coopération scientifique entre la Mauritanie et l\'IRD.',
      content: `Dans le cadre de la coopération scientifique entre la Mauritanie et l'Institut de Recherche pour le Développement (IRD), l'ANRSI a eu l'honneur de s'entretenir avec Isabelle Henry, représentante de l'IRD à Dakar.

Cette interview exclusive revient sur les enjeux de la coopération scientifique franco-mauritanienne et les perspectives de développement de la recherche en Mauritanie.

**ANRSI :** Madame Henry, pouvez-vous nous présenter les principales activités de l'IRD en Mauritanie ?

**Isabelle Henry :** L'IRD développe plusieurs programmes de recherche en Mauritanie, notamment dans les domaines de l'environnement, de la santé et des sciences sociales. Nous travaillons en étroite collaboration avec l'ANRSI pour structurer ces activités et renforcer les capacités de recherche locales.

**ANRSI :** Quels sont les défis principaux de la recherche scientifique en Mauritanie ?

**Isabelle Henry :** Les défis sont multiples : le renforcement des capacités humaines, l'amélioration des infrastructures de recherche, et l'intégration dans les réseaux scientifiques internationaux. L'ANRSI joue un rôle crucial dans cette dynamique.

**ANRSI :** Quelles sont les perspectives de développement de cette coopération ?

**Isabelle Henry :** Nous envisageons d'étendre nos collaborations à de nouveaux domaines comme les énergies renouvelables et l'agriculture durable, en cohérence avec les priorités nationales définies par l'ANRSI.`,
      author: 'ANRSI',
      publicationDate: new Date('2025-02-10'),
      category: 'Interview',
      imageUrl: 'assets/images/reu.jpeg',
      featured: false,
      tags: ['IRD', 'coopération', 'France', 'interview']
    },
    {
      id: '8',
      title: 'Soutenabilité économique versus Soutenabilité écologique - Pr Saad Bouh Regad',
      summary: 'Conférence du Professeur Saad Bouh Regad sur les défis de la soutenabilité en Mauritanie.',
      content: `Le Professeur Saad Bouh Regad, expert international en développement durable, a donné une conférence magistrale sur le thème "Soutenabilité économique versus Soutenabilité écologique" dans les locaux de l'ANRSI.

Cette conférence s'inscrit dans le cadre du cycle de conférences organisé par l'ANRSI pour sensibiliser la communauté scientifique aux enjeux du développement durable.

**Les défis de la soutenabilité en Mauritanie :**

La Mauritanie fait face à des défis complexes liés à la gestion de ses ressources naturelles et au développement économique. Le Professeur Bouh Regad a analysé les tensions entre les impératifs économiques et les contraintes écologiques.

**Points clés de la conférence :**

1. **Gestion des ressources halieutiques :** La Mauritanie dispose d'un potentiel halieutique important, mais doit concilier exploitation économique et préservation des écosystèmes marins.

2. **Développement minier :** L'exploitation des ressources minières génère des revenus importants mais pose des défis environnementaux majeurs.

3. **Agriculture durable :** Le développement d'une agriculture résiliente face au changement climatique est crucial pour la sécurité alimentaire.

4. **Énergies renouvelables :** Le potentiel solaire et éolien de la Mauritanie offre des opportunités de développement économique respectueux de l'environnement.

**Recommandations :**

Le Professeur Bouh Regad a formulé plusieurs recommandations pour l'ANRSI :
- Développer des programmes de recherche interdisciplinaires
- Renforcer la formation des chercheurs en sciences environnementales
- Promouvoir l'innovation technologique au service du développement durable
- Faciliter les partenariats internationaux dans le domaine de l'environnement`,
      author: 'ANRSI',
      publicationDate: new Date('2025-01-30'),
      category: 'Conférence',
      imageUrl: 'assets/images/directeur.jpeg',
      featured: false,
      tags: ['développement durable', 'environnement', 'économie', 'conférence']
    },
    {
      id: '9',
      title: 'Entretien Avec Dr Rachid El Bouyahaoui',
      summary: 'Discussion avec Dr Rachid El Bouyahaoui sur les perspectives de la recherche en Mauritanie.',
      content: `L'ANRSI a rencontré le Dr Rachid El Bouyahaoui, chercheur émérite et ancien directeur de recherche, pour discuter des perspectives de développement de la recherche scientifique en Mauritanie.

**ANRSI :** Dr El Bouyahaoui, comment évaluez-vous l'état actuel de la recherche scientifique en Mauritanie ?

**Dr El Bouyahaoui :** La recherche scientifique en Mauritanie connaît une dynamique positive depuis la création de l'ANRSI. Nous assistons à une structuration progressive des activités de recherche et à un renforcement des capacités humaines et matérielles.

**ANRSI :** Quels sont selon vous les domaines prioritaires pour le développement de la recherche ?

**Dr El Bouyahaoui :** Les domaines prioritaires sont clairement identifiés dans la stratégie nationale de recherche et d'innovation : l'agriculture et la sécurité alimentaire, les énergies renouvelables, la santé, et les technologies de l'information. Ces domaines correspondent aux défis majeurs du développement de la Mauritanie.

**ANRSI :** Comment voyez-vous le rôle de l'ANRSI dans cette dynamique ?

**Dr El Bouyahaoui :** L'ANRSI joue un rôle central dans la coordination et le financement de la recherche. L'agence doit continuer à développer des partenariats internationaux et à faciliter l'accès des chercheurs aux financements et aux équipements.

**ANRSI :** Quels conseils donneriez-vous aux jeunes chercheurs mauritaniens ?

**Dr El Bouyahaoui :** Je leur conseille de s'orienter vers des domaines porteurs, de développer leurs compétences en langues étrangères, et de s'impliquer dans des réseaux scientifiques internationaux. La recherche est un métier qui exige passion et persévérance.`,
      author: 'ANRSI',
      publicationDate: new Date('2025-01-20'),
      category: 'Interview',
      imageUrl: 'assets/images/chef.jpeg',
      featured: false,
      tags: ['recherche', 'perspectives', 'développement', 'interview']
    },
    {
      id: '10',
      title: 'Entretien Avec Pr Cheikh Mouhamadou Mbacké Lo',
      summary: 'Entretien avec le Professeur Cheikh Mouhamadou Mbacké Lo sur l\'innovation et le développement.',
      content: `Le Professeur Cheikh Mouhamadou Mbacké Lo, spécialiste de l'innovation et du développement, a accordé un entretien exclusif à l'ANRSI sur les enjeux de l'innovation technologique en Mauritanie.

**ANRSI :** Professeur Mbacké Lo, comment définissez-vous l'innovation dans le contexte mauritanien ?

**Pr Mbacké Lo :** L'innovation en Mauritanie doit être adaptée aux spécificités locales et aux défis du développement. Il ne s'agit pas seulement d'adopter des technologies étrangères, mais de développer des solutions innovantes qui répondent aux besoins spécifiques du pays.

**ANRSI :** Quels sont les secteurs les plus prometteurs pour l'innovation ?

**Pr Mbacké Lo :** Plusieurs secteurs offrent des opportunités importantes : l'agriculture intelligente avec l'utilisation des technologies numériques, les énergies renouvelables avec le développement de solutions adaptées au climat saharien, et la santé avec l'innovation dans les technologies médicales.

**ANRSI :** Comment l'ANRSI peut-elle favoriser l'innovation ?

**Pr Mbacké Lo :** L'ANRSI doit créer un écosystème favorable à l'innovation en développant des programmes de financement spécifiques, en facilitant les partenariats entre recherche et industrie, et en soutenant l'entrepreneuriat innovant.

**ANRSI :** Quels conseils pour les jeunes innovateurs ?

**Pr Mbacké Lo :** Je leur conseille de s'inspirer des défis locaux pour développer leurs innovations, de collaborer avec les chercheurs et les entreprises, et de ne pas hésiter à tester leurs idées sur le terrain. L'innovation naît souvent de la confrontation avec les problèmes réels.`,
      author: 'ANRSI',
      publicationDate: new Date('2025-01-15'),
      category: 'Interview',
      imageUrl: 'assets/images/france.jpeg',
      featured: false,
      tags: ['innovation', 'technologie', 'développement', 'entrepreneuriat']
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
    return of(this.articles.find(article => article.id === id));
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