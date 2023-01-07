import { Accordion } from "@mantine/core";
import { Layout } from "layout";
import { client } from "libs/client";
import React from "react";

const Qa = ({ data }: any) => {
  return (
    <Layout title="Q&A">
      <div className="m-auto">
        <h3 className="text-center">
          ポケモン赤緑青ピカチューについて気になって調べたことをQ&A形式で掲載しています。
        </h3>
        <Accordion defaultValue="itibansoto" variant="contained">
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
    </Layout>
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
