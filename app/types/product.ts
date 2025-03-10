export interface ProductType {
  id: number;
  name: string;
  short_desc: string;
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
  }[];
  product_variation: {
    id: number;
    variaton_values: string;
  }[];
}
