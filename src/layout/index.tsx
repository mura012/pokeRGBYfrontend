import { Footer } from "components/footer";
import { Header } from "components/header";
import Head from "next/head";
import { ReactNode } from "react";

type Props = {
  children: ReactNode;
  title?: string;
};

export const Layout = ({ children, title = "ぽけRGBY" }: Props) => {
  return (
    <>
      <Head>
        <title>{title}</title>
      </Head>
      <div className="flex min-h-screen flex-col bg-gray-200">
        <Header />
        <div className="m-auto flex-1 bg-gray-50 px-2 shadow-xl sm:w-3/5">
          {children}
        </div>
        <Footer />
      </div>
    </>
  );
};
