import { FC } from "react";

interface Props {
  params: {
    id: string;
  };
}

const ProductPage: FC<Props> = ({ params: { id } }) => {
  return <div>Product {id}</div>;
};

export default ProductPage;
