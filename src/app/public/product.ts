export class Product {
  id?: number;
  nom?: string;
  description?: string;
  prix?: number;
  image?: string;
  client_id?: { id: number };

  constructor(nom: string, description: string, prix: number, image: string) {
    this.nom = nom;
    this.description = description;
    this.prix = prix;
    this.image = image;
  }
}
