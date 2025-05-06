export interface Article {
  id: string;
  title: string;
  summary: string;
  content: string;
  author: string;
  publicationDate: Date;
  category: string;
  imageUrl: string;
  featured: boolean;
  tags: string[];
}