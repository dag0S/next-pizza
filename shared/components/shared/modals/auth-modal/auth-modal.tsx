"use client";

import { Button, Dialog, DialogContent } from "@/shared/components/ui";
import { signIn } from "next-auth/react";
import { FC, useState } from "react";
import { LoginForm } from "./forms/login-form";

interface Props {
  open: boolean;
  onClose: () => void;
}

export const AuthModal: FC<Props> = ({ open, onClose }) => {
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
          <h2>Регистрация</h2>
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
            className="gap-2 h-12 p-2 flex-1"
          >
            <img src="/github.svg" alt="GitHub" className="w-6 h-6" />
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
            <img src="/google.svg" alt="Google" className="w-6 h-6" />
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
