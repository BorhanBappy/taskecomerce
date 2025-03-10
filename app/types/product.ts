export interface ProductType {
  id: number;
  name: string;
  short_desc: string;
  code: string;
  discount_percent: string;
  category: {
    _id: string;
    name: string;
  };
  product_images: {
    id: number;
    name: string;
  }[];
  variation_combinations: {
    id: number;
    price: number;
    discount: number;
    discount_date: string;
    values: string;
    discount_percent: number;
  }[];
  product_variation: {
    id: number;
    variaton_values: string;
  }[];
}
