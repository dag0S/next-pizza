"use client";

import { cn } from "@/shared/lib";
import { FC, InputHTMLAttributes } from "react";
import { RequiredSymbol } from "../required-symbol";
import { Input } from "../../ui";
import { ErrorText } from "../error-text";
import { ClearButton } from "../clear-button";
import { useFormContext } from "react-hook-form";

interface Props extends InputHTMLAttributes<HTMLInputElement> {
  name: string;
  label?: string;
  required?: boolean;
  className?: string;
}

export const FormInput: FC<Props> = ({
  name,
  className,
  label,
  required,
  ...props
}) => {
  const {
    register,
    formState: { errors },
    watch,
    setValue,
  } = useFormContext();

  const value = watch(name);
  const errorText = errors[name]?.message as string;

  const onCLickClear = () => {
    setValue(name, "", { shouldValidate: true });
  };

  return (
    <div className={cn(className)}>
      {label && (
        <p className="font-medium mb-2">
          {label} {required && <RequiredSymbol />}
        </p>
      )}
      <div className="relative">
        <Input className="h-12 text-md" {...props} {...register(name)} />
        {value && <ClearButton onClick={onCLickClear} />}
      </div>
      {errorText && <ErrorText text={errorText} className="mb-2" />}
    </div>
  );
};
