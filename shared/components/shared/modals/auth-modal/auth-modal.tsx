"use client";

import { signIn } from "next-auth/react";
import { FC, useState } from "react";
import Image from "next/image";

import { Button, Dialog, DialogContent } from "@/shared/components/ui";
import { LoginForm } from "./forms/login-form";
import { RegisterForm } from "./forms/register-form";
import { cn } from "@/shared/lib";

interface Props {
  open: boolean;
  onClose: () => void;
  className?: string;
}

export const AuthModal: FC<Props> = ({ open, onClose, className }) => {
  const [type, setType] = useState<"login" | "register">("login");

  const onSwitchType = () => {
    setType(type === "login" ? "register" : "login");
  };

  const handleClose = () => {
    onClose();
  };

  return (
    <Dialog open={open} onOpenChange={handleClose}>
      <DialogContent className="w-[450px] bg-white p-10">
        {type === "login" ? (
          <LoginForm onClose={handleClose} />
        ) : (
          <RegisterForm onClose={handleClose} />
        )}
        <hr />
        <div className="flex gap-2">
          <Button
            variant="secondary"
            onClick={() => {
              signIn("github", {
                callbackUrl: "/",
                redirect: true,
              });
            }}
            type="button"
            className={cn("gap-2 h-12 p-2 flex-1", className)}
          >
            <Image src="/github.svg" alt="GitHub" width={24} height={24} />
            GitHub
          </Button>
          <Button
            variant="secondary"
            onClick={() => {
              signIn("google", {
                callbackUrl: "/",
                redirect: true,
              });
            }}
            type="button"
            className="gap-2 h-12 p-2 flex-1"
          >
            <Image src="/google.svg" alt="Google" width={24} height={24} />
            Google
          </Button>
        </div>
        <Button
          variant="outline"
          onClick={onSwitchType}
          type="button"
          className="h-12"
        >
          {type === "login" ? "Регистрация" : "Войти"}
        </Button>
      </DialogContent>
    </Dialog>
  );
};
