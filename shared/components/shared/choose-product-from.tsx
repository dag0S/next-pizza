import type { FC } from "react";
import Image from "next/image";

import { cn } from "@/shared/lib/utils";
import { Title } from "./title";
import { Button } from "../ui";

interface Props {
  className?: string;
  name: string;
  imageUrl: string;
  price: number;
  onSubmit?: VoidFunction;
  loading: boolean;
}

export const ChooseProductFrom: FC<Props> = ({
  className,
  imageUrl,
  name,
  onSubmit,
  price,
  loading,
}) => {
  return (
    <div className={cn("flex flex-1 flex-col md:flex-row w-full", className)}>
      <div className="flex items-center justify-center flex-1 relative w-full">
        <Image
          src={imageUrl}
          alt={name}
          width={350}
          height={350}
        />
      </div>
      <div className="w-full md:w-1/2 bg-[#fcfcfc] p-2 md:p-7">
        <Title text={name} size="md" className="font-extrabold mb-1" />
        <Button
          loading={loading}
          onClick={onSubmit}
          className="h-[55px] px-10 text-base rounded-[18px] w-full mt-10"
        >
          Добавить в корзину за {price} ₽
        </Button>
      </div>
    </div>
  );
};
