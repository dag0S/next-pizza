import {
  Cart,
  CartItem,
  Ingredient,
  Product,
  ProductItem,
} from "@prisma/client";

export interface CartItemDTO extends CartItem {
  productItem: ProductItem & {
    product: Product;
  };
  ingredients: Ingredient[];
}

export interface CartDTO extends Cart {
  items: CartItemDTO[];
}
