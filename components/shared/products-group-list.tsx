"use client";

import { cn } from "@/lib/utils";
import { FC, useEffect, useRef } from "react";
import { useIntersection } from "react-use";
import { Title } from "./title";
import { ProductCard } from "./product-card";
import { useCategoryStore } from "@/store/category";

interface Props {
  className?: string;
  listClassName?: string;
  title: string;
  items: any[];
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
      <div className={cn("grid grid-cols-3 gap-[50px]", listClassName)}>
        {items.map((item) => (
          <ProductCard
            key={item.id}
            id={item.id}
            name={item.name}
            imageUrl={item.imageUrl}
            price={item.items[0].price}
          />
        ))}
      </div>
    </div>
  );
};
