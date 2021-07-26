import currency from 'currency.js'

export type Product = {
  id: string;
  name: string;
  description: string;
  unit: string;
  price: currency;
  images: string[];
  stock: number;
}

export type CartState = {
  items: Array<Product>
  length: number;
}

export type SearchItem = {
  id: number;
  name: string;
}

export type SearchState = {
  query: string;
  softQuery: string;
  searchList: SearchItem[];
}