import { ChooseProductModal } from "@/shared/components/shared";
import { prisma } from "@/prisma/prisma-client";
import { notFound } from "next/navigation";
import { FC } from "react";

interface Props {
  params: {
    id: string;
  };
}

const ProductModalPage: FC<Props> = async ({ params: { id } }) => {
  const product = await prisma.product.findFirst({
    where: {
      id: +id,
    },
    include: {
      ingredients: true,
      items: true,
    },
  });

  if (!product) {
    return notFound();
  }

  return <ChooseProductModal product={product} />;
};

export default ProductModalPage;
