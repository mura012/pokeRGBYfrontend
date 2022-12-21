import { Accordion } from "@mantine/core";
import { Header } from "components/header";
import { client } from "libs/client";
import Head from "next/head";
import React from "react";

const Qa = ({ data }: any) => {
  return (
    <div>
      <Head>
        <title>Q&A</title>
      </Head>
      <Header />
      <div className="m-auto w-3/4">
        <h3 className="text-center">
          ポケモン赤緑について気になって調べたことをQ&A形式で掲載しています。
        </h3>
        <Accordion defaultValue="itibansoto">
          {data.contents.map((item: any) => {
            return (
              <Accordion.Item value={item.question} key={item.question}>
                <Accordion.Control>{item.question}</Accordion.Control>
                <Accordion.Panel>{item.answer}</Accordion.Panel>
              </Accordion.Item>
            );
          })}
        </Accordion>
      </div>
    </div>
  );
};

export const getStaticProps = async () => {
  const data = await client.get({
    endpoint: "questionandanswer",
  });

  return {
    props: {
      data,
    },
  };
};

export default Qa;
