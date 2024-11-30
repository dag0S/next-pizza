"use client";

import { cn } from "@/shared/lib/utils";
import { useRouter } from "next/navigation";
import { FC } from "react";
import { ChooseProductFrom } from "../choose-product-from";
import { ProductWithRelations } from "@/@types/prisma";
import { ChoosePizzaFrom } from "../choose-pizza-form";
import { Dialog, DialogContent } from "../../ui";
import { useCartStore } from "@/shared/store";
import toast from "react-hot-toast";

interface Props {
  className?: string;
  product: ProductWithRelations;
}

export const ChooseProductModal: FC<Props> = ({ className, product }) => {
  const router = useRouter();
  const firstItem = product.items[0];
  const isPizzaForm = !!firstItem.pizzaType;
  const [addCartItem, loading] = useCartStore((state) => [
    state.addCartItem,
    state.loading,
  ]);

  const onAddProduct = async () => {
    try {
      await addCartItem({
        productItemId: firstItem.id,
      });
      toast.success("Продукт добавлена в корзину");
      router.back();
    } catch (error) {
      toast.error("Не удалось добавить продукт в корзину");
      console.error(error);
    }
  };

  const onAddPizza = async (productItemId: number, ingredients: number[]) => {
    try {
      await addCartItem({
        productItemId,
        ingredients,
      });
      toast.success("Пицца добавлена в корзину");
      router.back();
    } catch (error) {
      toast.error("Не удалось добавить пиццу в корзину");
      console.error(error);
    }
  };

  return (
    <Dialog open={!!product} onOpenChange={() => router.back()}>
      <DialogContent
        className={cn(
          "p-0 w-[1060px] max-w-[1060px] min-h-[500px] bg-white overflow-hidden",
          className
        )}
      >
        {isPizzaForm ? (
          <ChoosePizzaFrom
            name={product.name}
            imageUrl={product.imageUrl}
            ingredients={product.ingredients}
            items={product.items}
            onSubmit={onAddPizza}
            loading={loading}
          />
        ) : (
          <ChooseProductFrom
            name={product.name}
            imageUrl={product.imageUrl}
            onSubmit={onAddProduct}
            price={firstItem.price}
            loading={loading}
          />
        )}
      </DialogContent>
    </Dialog>
  );
};
