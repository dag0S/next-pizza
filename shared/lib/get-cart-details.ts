import { CartDTO } from "../services/dto/cart.dto";
import { calcCartItemTotalPrice } from "./calc-cart-item-total-price";

export interface CartStateItem {
  id: number;
  quantity: number;
  name: string;
  imageUrl: string;
  price: number;
  pizzaSize?: number | null;
  pizzaType?: number | null;
  ingredients: Array<{ name: string; price: number }>;
}

interface ReturnProps {
  items: CartStateItem[];
  totalAmount: number;
}

export const getCartDetails = (data: CartDTO): ReturnProps => {
  const items = data.items.map(
    (item): CartStateItem => ({
      id: item.id,
      quantity: item.quantity,
      name: item.productItem.product.name,
      imageUrl: item.productItem.product.imageUrl,
      ingredients: item.ingredients.map((ingredient) => ({
        name: ingredient.name,
        price: ingredient.price,
      })),
      price: calcCartItemTotalPrice(item),
      pizzaSize: item.productItem.size,
      pizzaType: item.productItem.pizzaType,
    })
  );

  return {
    items,
    totalAmount: data.totalAmount,
  };
};
