import type { Metadata } from "next";
import { Header } from "@/shared/components/shared";
import { Suspense } from "react";

export const metadata: Metadata = {
  title: "Next Pizza | Главна",
  description: "Главная страница онлайн магазина Next Pizza",
};

export default function HomeLayout({
  children,
  modal,
}: Readonly<{
  children: React.ReactNode;
  modal: React.ReactNode;
}>) {
  return (
    <>
      <Suspense>
        <Header />
      </Suspense>
      <main className="min-h-screen">
        {children}
        {modal}
      </main>
    </>
  );
}
