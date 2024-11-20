import {
  Container,
  Variants,
  PizzaImage,
  Title,
} from "@/shared/components/shared";
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
  });

  if (!product) {
    return notFound();
  }

  return (
    <Container className="flex flex-col my-10">
      <div className="flex flex-1">
        <PizzaImage imageUrl={product.imageUrl} size={40} />
        <div className="w=[490px] bg-[#fcfcfc] p-7">
          <Title
            text={product.name}
            size="md"
            className="font-extrabold mb-1"
          />
          <p className="text-gray-400">
            Lorem ipsum dolor sit amet consectetur, adipisicing
          </p>
          <Variants
            items={[
              {
                name: "Маленькая",
                value: "1",
              },
              {
                name: "Средняя",
                value: "2",
              },
              {
                name: "Большая",
                value: "3",
                disabled: true,
              },
            ]}
          />
        </div>
      </div>
    </Container>
  );
};

export default ProductPage;
