import { Accordion } from "@mantine/core";
import { Layout } from "layout";
import { pokeClient } from "libs/pokeClient";
import { MicroCMSListResponse } from "microcms-js-sdk";
import { GetStaticProps, NextPage } from "next";

type QA = {
  question: string;
  answer: string;
};

const Qa: NextPage<MicroCMSListResponse<QA>> = ({ contents }) => {
  return (
    <Layout title="Q&A">
      <div className="m-auto">
        <h3 className="text-center">
          ポケモン赤緑青ピカチューについて気になって調べたことをQ&A形式で掲載しています。
        </h3>
        <Accordion variant="contained">
          {contents.map((item) => {
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

export const getStaticProps: GetStaticProps<
  MicroCMSListResponse<QA>
> = async () => {
  const data = await pokeClient.getList({
    endpoint: "questionandanswer",
  });

  return {
    props: data,
  };
};

export default Qa;
