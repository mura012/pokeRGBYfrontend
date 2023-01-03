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
      <Header />
      <div>{children}</div>
    </>
  );
};
