export interface ShoppingLists {
  id: number;
  name: string;
  products: Product[];
  emoji: string;
  color: string;
  date_added?: string;
  date_updated?: string;
}

export interface Product {
  id: number;
  name: string;
  isChecked?: boolean;
  quantity?: number;
  date_added?: string;
  date_updated?: string;
}
