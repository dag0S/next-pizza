"use client";

import { cn } from "@/lib/utils";
import { useCategoryStore } from "@/store/category";
import { FC } from "react";

const categories = [
  { id: 1, name: "Пиццы" },
  { id: 2, name: "Комбо" },
  { id: 3, name: "Закуски" },
  { id: 4, name: "Коктейли" },
  { id: 5, name: "Кофе" },
  { id: 6, name: "Напитки" },
  { id: 7, name: "Десерты" },
];

interface Props {
  className?: string;
}

export const Categories: FC<Props> = ({ className }) => {
  const categoryActiveId = useCategoryStore((state) => state.activeId);

  return (
    <div
      className={cn("inline-flex gap-1 bg-gray-50 p-1 rounded-2xl", className)}
    >
      {categories.map((category) => (
        <a
          href={`/#${category.name}`}
          className={cn(
            "flex items-center font-bold h-11 rounded-2xl px-5",
            categoryActiveId === category.id &&
              "bg-white shadow-gray-200 text-primary"
          )}
          key={category.id}
        >
          <button>{category.name}</button>
        </a>
      ))}
    </div>
  );
};
