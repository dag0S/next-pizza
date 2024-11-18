import { cn } from "@/lib/utils";
import Link from "next/link";
import { FC } from "react";
import { Title } from "./title";
import { Plus } from "lucide-react";
import { Button } from "../ui";

interface Props {
  className?: string;
  id: number;
  name: string;
  price: number;
  imageUrl: string;
}

export const ProductCard: FC<Props> = ({
  className,
  id,
  name,
  price,
  imageUrl,
}) => {
  return (
    <div className={cn("", className)}>
      <Link href="/product/1">
        <div className="flex justify-center p-6 bg-secondary rounded-lg h-[260px]">
          <img className="w-[215px] h-[215px]" src={imageUrl} alt={name} />
        </div>
        <Title text={name} size="sm" className="mb-1 mt-3 font-bold" />
        <p className="text-sm text-gray-400">
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Dignissimos
          pariatur eius totam! Fuga incidunt corrupti.
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
