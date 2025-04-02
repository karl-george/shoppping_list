export interface ShoppingLists {
  id: number;
  name: string;
  icon: string;
  color: string;
  date_added?: number;
  date_updated?: number;
}

export interface Product {
  id: number;
  name: string;
  isChecked?: boolean;
  quantity?: number;
  date_added?: number;
  date_updated?: number;
}
