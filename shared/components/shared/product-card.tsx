import type { FC } from "react";
import Link from "next/link";
import Image from "next/image";
import { Plus } from "lucide-react";
import { Ingredient } from "@prisma/client";

import { cn } from "@/shared/lib/utils";
import { Title } from "./title";
import { Button } from "../ui";

interface Props {
  className?: string;
  id: number;
  name: string;
  price: number;
  imageUrl: string;
  ingredients: Ingredient[];
}

export const ProductCard: FC<Props> = ({
  className,
  id,
  name,
  price,
  imageUrl,
  ingredients,
}) => {
  return (
    <div className={cn("", className)}>
      <Link href={`/product/${id}`} scroll={false}>
        <div className="flex justify-center p-6 bg-secondary rounded-lg max-h-[260px]">
          <Image width={215} height={215} src={imageUrl} alt={name} />
        </div>
        <Title text={name} size="sm" className="mb-1 mt-3 font-bold" />
        <p className="text-sm text-gray-400 line-clamp-2">
          {ingredients.map((ingredient) => ingredient.name).join(", ")}
        </p>
        <div className="flex justify-between items-center mt-4">
          <span className="text-[20px]">
            от <b>{price}</b> ₽
          </span>
          <Button className="text-base font-bold" variant="secondary">
            <Plus size={20} className="mr-1" />
            Добавить
          </Button>
        </div>
      </Link>
    </div>
  );
};
