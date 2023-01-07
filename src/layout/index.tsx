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
      <div className="m-auto flex min-h-screen flex-col sm:w-3/5">
        <Header />
        <div className="flex-1">{children}</div>
        <Footer />
      </div>
    </>
  );
};
