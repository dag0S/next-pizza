"use client";

import { cn } from "@/shared/lib/utils";
import { useRouter } from "next/navigation";
import { FC } from "react";
import { ChooseProductFrom } from "../choose-product-from";
import { ProductWithRelations } from "@/@types/prisma";
import { ChoosePizzaFrom } from "../choose-pizza-form";
import { Dialog, DialogContent } from "../../ui";

interface Props {
  className?: string;
  product: ProductWithRelations;
}

export const ChooseProductModal: FC<Props> = ({ className, product }) => {
  const router = useRouter();
  const isPizzaForm = !!product.items[0].pizzaType;

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
          />
        ) : (
          <ChooseProductFrom name={product.name} imageUrl={product.imageUrl} />
        )}
      </DialogContent>
    </Dialog>
  );
};
