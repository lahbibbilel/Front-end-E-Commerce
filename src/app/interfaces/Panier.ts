import {Product} from "../admin/produit/product";
import {Client} from "./Client";
import {ClientP} from "./ClientP";
export interface Panier {
  id: number;
  produits: Product;
  client: ClientP;

}
