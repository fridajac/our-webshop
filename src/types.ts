export type ProductItem = {
  id: number;
  name: string;
  category: string;
  price: number;
  inStock: boolean;
  labels?: string[];
};
