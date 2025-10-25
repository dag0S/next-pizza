"use client";

import { FC, useEffect, useRef } from "react";
import { useIntersection } from "react-use";
import { cn } from "@/shared/lib/utils";

import { Title } from "./title";
import { ProductCard } from "./product-card";
import { useCategoryStore } from "@/shared/store/category";
import { ProductWithRelations } from "@/@types/prisma";

interface Props {
  className?: string;
  listClassName?: string;
  title: string;
  items: ProductWithRelations[];
  categoryId: number;
}

export const ProductsGroupList: FC<Props> = ({
  className,
  listClassName,
  title,
  items,
  categoryId,
}) => {
  const setActiveCategoryId = useCategoryStore((state) => state.setActiveId);
  const intersectionRef = useRef(null);
  const intersection = useIntersection(intersectionRef, {
    threshold: 0.4,
  });

  useEffect(() => {
    if (intersection?.isIntersecting) {
      setActiveCategoryId(categoryId);
    }
  }, [categoryId, intersection?.isIntersecting, setActiveCategoryId]);

  return (
    <div className={cn("", className)} id={title} ref={intersectionRef}>
      <Title text={title} size="lg" className="font-extrabold mb-5" />
      <div
        className={cn(
          "grid grid-co1 sm:grid-cols-2 md:grid-cols-3 gap-3 md:gap-4",
          listClassName
        )}
      >
        {items.map((item) => (
          <ProductCard
            key={item.id}
            id={item.id}
            name={item.name}
            imageUrl={item.imageUrl}
            price={item.items[0].price}
            ingredients={item.ingredients}
          />
        ))}
      </div>
    </div>
  );
};
