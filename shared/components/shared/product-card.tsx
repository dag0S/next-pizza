import { cn } from "@/shared/lib/utils";
import Link from "next/link";
import { FC } from "react";
import { Title } from "./title";
import { Plus } from "lucide-react";
import { Button } from "../ui";
import { Ingredient } from "@prisma/client";

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
        <div className="flex justify-center p-6 bg-secondary rounded-lg h-[260px]">
          <img className="w-[215px] h-[215px]" src={imageUrl} alt={name} />
        </div>
        <Title text={name} size="sm" className="mb-1 mt-3 font-bold" />
        <p className="text-sm text-gray-400">
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
