"use client";

import { cn } from "@/shared/lib/utils";
import { useRouter } from "next/navigation";
import { FC } from "react";
import { ProductWithRelations } from "@/@types/prisma";
import { Dialog, DialogContent } from "../../ui";
import { ProductForm } from "../product-form";

interface Props {
  className?: string;
  product: ProductWithRelations;
}

export const ChooseProductModal: FC<Props> = ({ className, product }) => {
  const router = useRouter();

  return (
    <Dialog open={!!product} onOpenChange={() => router.back()}>
      <DialogContent
        className={cn(
          "p-0 max-w-[1060px] min-h-[500px] bg-white overflow-x-hidden overflow-y-auto",
          className
        )}
      >
        <ProductForm product={product} onSubmit={() => router.back()} />
      </DialogContent>
    </Dialog>
  );
};
