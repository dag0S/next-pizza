import { Button, Dialog, DialogContent } from "@/shared/components/ui";
import { signIn } from "next-auth/react";
import { FC } from "react";

interface Props {
  open: boolean;
  onClose: () => void;
}

export const AuthModal: FC<Props> = ({ open, onClose }) => {
  const handleClose = () => {
    onClose();
  };

  return (
    <Dialog open={open} onOpenChange={handleClose}>
      <DialogContent className="w-[450px] bg-white p-10">
        FORM
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
      </DialogContent>
    </Dialog>
  );
};
