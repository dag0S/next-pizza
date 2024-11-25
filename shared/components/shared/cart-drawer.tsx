"use client";

import { FC, ReactNode, useEffect } from "react";
import {
  Button,
  Sheet,
  SheetContent,
  SheetFooter,
  SheetHeader,
  SheetTitle,
  SheetTrigger,
} from "@/shared/components/ui";
import Link from "next/link";
import { ArrowRight } from "lucide-react";
import { CartDrawerItem } from "./cart-drawer-item";
import { useCartStore } from "@/shared/store";
import { getCartItemDetails } from "@/shared/lib";
import { PizzaSize, PizzaType } from "@/shared/constants/pizza";

interface Props {
  children: ReactNode;
}

export const CartDrawer: FC<Props> = ({ children }) => {
  const [fetchCartItems, totalAmount, items] = useCartStore((state) => [
    state.fetchCartItems,
    state.totalAmount,
    state.items,
  ]);

  useEffect(() => {
    fetchCartItems();
  }, []);
  // 11 52
  return (
    <Sheet>
      <SheetTrigger asChild>{children}</SheetTrigger>
      <SheetContent className="flex flex-col justify-between pb-0 bg-[#f4f1ee]">
        <SheetHeader>
          <SheetTitle>
            В корзине <span className="font-bold">3 товара</span>
          </SheetTitle>
        </SheetHeader>

        <div className="-mx-6 mt-5 overflow-auto flex-1">
          <div className="mb-2">
            {items.map((item) => (
              <CartDrawerItem
                key={item.id}
                id={item.id}
                imageUrl={item.imageUrl}
                name={item.name}
                price={item.price}
                details={getCartItemDetails(
                  item.ingredients,
                  item.pizzaType as PizzaType,
                  item.pizzaSize as PizzaSize
                )}
                quantity={item.quantity}
              />
            ))}
          </div>
        </div>

        <SheetFooter className="-mx-6 bg-white p-8">
          <div className="w-full">
            <div className="flex mb-4">
              <span className="flex flex-1 text-lg text-neutral-500">
                Итог
                <div className="flex-1 border-b border-dashed border-b-neutral-200 relative -top-1 mx-2" />
              </span>
              <span className="font-bold text-lg">{totalAmount} ₽</span>
            </div>
            <Link href="/cart">
              <Button type="submit" className="w-full h-12 text-base">
                Оформить заказ
                <ArrowRight className="w-5 ml-2" />
              </Button>
            </Link>
          </div>
        </SheetFooter>
      </SheetContent>
    </Sheet>
  );
};
