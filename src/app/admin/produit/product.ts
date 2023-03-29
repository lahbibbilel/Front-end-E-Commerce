
export class Product {
  constructor() {
  }

  id?:number
  nom ?: string;
  description?: string;
  prix? : number;
  image?:string;
  client_id?: { id: number };
}
