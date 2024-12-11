import { Container, ProductForm } from "@/shared/components/shared";
import { prisma } from "@/prisma/prisma-client";
import { notFound } from "next/navigation";
import { FC } from "react";

interface Props {
  params: {
    id: string;
  };
}

const ProductPage: FC<Props> = async ({ params: { id } }) => {
  const product = await prisma.product.findFirst({
    where: {
      id: +id,
    },
    include: {
      ingredients: true,
      category: {
        include: {
          products: {
            include: {
              items: true,
            },
          },
        },
      },
      items: true,
    },
  });

  if (!product) {
    return notFound();
  }

  return (
    <Container className="flex flex-col my-10">
      <ProductForm product={product} />
    </Container>
  );
};

export default ProductPage;
