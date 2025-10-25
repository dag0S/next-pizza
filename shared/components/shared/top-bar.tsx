import { FC } from "react";
import { Category } from "@prisma/client";

import { cn } from "@/shared/lib/utils";
import { Container } from "./container";
import { Categories } from "./categories";

interface Props {
  className?: string;
  categories: Category[];
}

export const TopBar: FC<Props> = ({ className, categories }) => {
  return (
    <div
      className={cn(
        "sticky top-0 bg-white py-5 shadow-lg shadow-black/5 z-10",
        className
      )}
    >
      <Container className="flex items-center justify-between overflow-auto">
        <Categories items={categories} />
      </Container>
    </div>
  );
};
