"use client";

import { FC } from "react";
import { Ingredient } from "@prisma/client";

import { cn } from "@/shared/lib/utils";
import { Title } from "./title";
import { Button } from "../ui";
import { PizzaImage } from "./pizza-image";
import { Variants } from "./variants";
import { PizzaSize, PizzaType, pizzaTypes } from "@/shared/constants/pizza";
import { IngredientItem } from "./ingredient-item";
import { ProductWithRelations } from "@/@types/prisma";
import { getPizzaDetails } from "@/shared/lib";
import { usePizzaOptions } from "@/shared/hooks";

interface Props {
  className?: string;
  name: string;
  imageUrl: string;
  ingredients: Ingredient[];
  items: ProductWithRelations["items"];
  onSubmit: (itemId: number, ingredients: number[]) => void;
  loading: boolean;
}

export const ChoosePizzaFrom: FC<Props> = ({
  className,
  imageUrl,
  ingredients,
  name,
  items,
  onSubmit,
  loading,
}) => {
  const {
    size,
    type,
    selectedIngredients,
    availableSizes,
    setSize,
    setType,
    addIngredient,
    currentItemId,
  } = usePizzaOptions(items);

  const { textDetails, totalPrice } = getPizzaDetails(
    type,
    size,
    items,
    ingredients,
    selectedIngredients
  );

  const handleClickAdd = () => {
    if (currentItemId) {
      onSubmit(currentItemId, Array.from(selectedIngredients));
    }
  };

  return (
    <div
      className={cn(
        "flex lg:flex-1 flex-col lg:flex-row w-full items-center",
        className
      )}
    >
      <PizzaImage
        imageUrl={imageUrl}
        size={size}
        className="min-w-[500px] min-h-[500px]"
      />
      <div className="w-[490px] bg-[#fcfcfc] p-1 lg:p-7">
        <Title text={name} size="md" className="font-extrabold mb-1" />
        <p className="text-gray-400">{textDetails}</p>
        <div className="flex flex-col gap-5 my-5">
          <Variants
            items={availableSizes}
            value={String(size)}
            onClick={(value) => setSize(+value as PizzaSize)}
          />
          <Variants
            items={pizzaTypes}
            value={String(type)}
            onClick={(value) => setType(+value as PizzaType)}
          />
        </div>
        <div className="bg-gray-50 p-5 rounded-md max-h-[340px] overflow-auto scrollbar">
          <div className="grid grid-cols-3 gap-4">
            {ingredients.map((ingredient) => (
              <IngredientItem
                key={ingredient.id}
                imageUrl={ingredient.imageUrl}
                name={ingredient.name}
                price={ingredient.price}
                onClick={() => addIngredient(ingredient.id)}
                active={selectedIngredients.has(ingredient.id)}
              />
            ))}
          </div>
        </div>
        <Button
          loading={loading}
          className="h-[55px] px-2 lg:px-10 text-base rounded-[18px] w-full mt-0 lg:mt-10"
          onClick={handleClickAdd}
        >
          Добавить в корзину за {totalPrice} ₽
        </Button>
      </div>
    </div>
  );
};
