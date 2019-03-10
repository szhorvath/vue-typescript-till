import { ProductListItem } from "../Product/ProductListItem";
import { Product } from "@/models/Product/Product";

export interface ProductState {
  products: Product[];
  list: ProductListItem[];
  total: number;
}
