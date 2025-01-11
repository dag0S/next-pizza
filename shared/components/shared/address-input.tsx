"use client";

import { FC } from "react";
import { AddressSuggestions } from "react-dadata";
import "react-dadata/dist/react-dadata.css";

interface Props {
  onChange?: (value?: string) => void;
}

export const AddressInput: FC<Props> = ({ onChange }) => {
  return (
    <AddressSuggestions
      token="9f3201710cc48bc6f14c220b793814bac1733e96"
      onChange={(data) => onChange?.(data?.value)}
    />
  );
};
