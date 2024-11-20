import { ProductItem } from "@prisma/client";
import { pizzaSizes, PizzaType } from "../constants/pizza";
import { Variant } from "../components/shared/variants";

export const getAvailablePizzaSizes = (
  type: PizzaType,
  items: ProductItem[]
): Variant[] => {
  const filteredPizzasByType = items.filter((item) => item.pizzaType === type);
  return pizzaSizes.map(({ name, value }) => ({
    name,
    value,
    disabled: !filteredPizzasByType.some(
      (pizza) => Number(pizza.size) === Number(value)
    ),
  }));
};
