"use client";

import { ProductWithRelations } from "@/@types/prisma";
import { useCartStore } from "@/shared/store";
import { FC } from "react";
import toast from "react-hot-toast";
import { ChoosePizzaFrom } from "./choose-pizza-form";
import { ChooseProductFrom } from "./choose-product-from";

interface Props {
  product: ProductWithRelations;
  onSubmit?: VoidFunction;
}

export const ProductForm: FC<Props> = ({ product, onSubmit: _onSubmit }) => {
  const [addCartItem, loading] = useCartStore((state) => [
    state.addCartItem,
    state.loading,
  ]);
  const firstItem = product.items[0];
  const isPizzaForm = !!firstItem.pizzaType;

  const onAddPizza = async (productItemId: number, ingredients: number[]) => {
    try {
      await addCartItem({
        productItemId,
        ingredients,
      });
      toast.success("Пицца добавлена в корзину");
      _onSubmit?.();
    } catch (error) {
      toast.error("Не удалось добавить пиццу в корзину");
      console.error(error);
    }
  };

  const onAddProduct = async () => {
    try {
      await addCartItem({
        productItemId: firstItem.id,
      });
      toast.success("Продукт добавлена в корзину");
      _onSubmit?.();
    } catch (error) {
      toast.error("Не удалось добавить продукт в корзину");
      console.error(error);
    }
  };

  if (isPizzaForm) {
    return (
      <ChoosePizzaFrom
        name={product.name}
        imageUrl={product.imageUrl}
        ingredients={product.ingredients}
        items={product.items}
        onSubmit={onAddPizza}
        loading={loading}
      />
    );
  }

  return (
    <ChooseProductFrom
      name={product.name}
      imageUrl={product.imageUrl}
      onSubmit={onAddProduct}
      price={firstItem.price}
      loading={loading}
    />
  );
};
