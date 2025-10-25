"use client";

import { FC, useEffect, useState } from "react";
import Image from "next/image";
import Link from "next/link";
import toast from "react-hot-toast";
import { useRouter, useSearchParams } from "next/navigation";

import { Container } from "./container";
import { cn } from "@/shared/lib/utils";
import { SearchInput } from "./search-input";
import { CartButton } from "./cart-button";
import { ProfileButton } from "./profile-button";
import { AuthModal } from "./modals";

interface Props {
  className?: string;
  hasSearch?: boolean;
  hasCart?: boolean;
}

export const Header: FC<Props> = ({
  className,
  hasSearch = true,
  hasCart = true,
}) => {
  const router = useRouter();
  const searchParams = useSearchParams();
  const [openAuthModal, setOpenAuthModal] = useState(false);

  useEffect(() => {
    let toastMessage = "";

    if (searchParams.has("paid")) {
      toastMessage = "Заказ успешно оплачен! Информация отправлена на почту.";
    }

    if (searchParams.has("verified")) {
      toastMessage = "Почта подтверждена!";
    }

    if (toastMessage) {
      setTimeout(() => {
        router.replace("/");
        toast.success(toastMessage);
      }, 500);
    }
  }, []);

  return (
    <header className={cn("border-b", className)}>
      <Container className="flex flex-col gap-3 py-4 md:py-8">
        <div className="flex items-center justify-between w-full">
          <Link href="/">
            <div className="flex items-center gap-4">
              <Image src="/logo.png" alt="Logo" width={35} height={35} />
              <div>
                <h1 className="text-2xl uppercase font-black">Next Pizza</h1>
                <p className="text-sm text-gray-400 leading-3">
                  вкусней уже некуда
                </p>
              </div>
            </div>
          </Link>

          {hasSearch && (
            <div className="mx-10 flex-1 hidden lg:block">
              <SearchInput />
            </div>
          )}

          <div className="flex items-center gap-3">
            <AuthModal
              open={openAuthModal}
              onClose={() => setOpenAuthModal(false)}
            />
            <ProfileButton onClickSignIn={() => setOpenAuthModal(true)} />

            {hasCart && <CartButton className="hidden md:flex" />}
          </div>
        </div>
        <div className="flex items-center gap-3">
          {hasSearch && (
            <div className="lg:hidden flex-1">
              <SearchInput className="w-full" />
            </div>
          )}
          {hasCart && <CartButton className="md:hidden" />}
        </div>
      </Container>
    </header>
  );
};
