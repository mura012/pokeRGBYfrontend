import { Layout } from "layout";
import { blogClient } from "libs/blogClient";
import { links } from "libs/links";
import { MicroCMSListResponse } from "microcms-js-sdk";
import { GetStaticProps, NextPage } from "next";
import Image from "next/image";
import Link from "next/link";

type Blog = {
  id: string;
  image: {
    url: string;
  };
  title: string;
  body: string;
  badge: string;
};

const Home: NextPage<MicroCMSListResponse<Blog>> = (props) => {
  return (
    <Layout title="ホーム">
      {links
        .filter((_, index) => index !== 0)
        .map((link) => {
          return (
            <Link
              href={link.href}
              className="my-2 flex justify-between rounded-md border border-solid border-black shadow-md"
              key={link.id}
            >
              <div>
                <h3 className="ml-2">{link.label}</h3>
                <p>{link.text}</p>
              </div>
              <Image
                src={link.img}
                height={150}
                width={200}
                alt={link.label}
                className="m-1"
              />
            </Link>
          );
        })}

      <h4>ポケモンに関するブログも書いています。</h4>
      {props.contents
        .filter((blog) => blog.badge[0] === "ポケモン")
        .map((blog) => {
          return (
            <div className="w-fit" key={blog.id}>
              <Link href={`https://www.mura-mostlove.com/blogPage/${blog.id}`}>
                <p className="w-fit text-base text-blue-500 hover:text-red-500">
                  {blog.title}
                </p>
              </Link>
            </div>
          );
        })}
    </Layout>
  );
};

export const getStaticProps: GetStaticProps<
  MicroCMSListResponse<Blog>
> = async () => {
  const data = await blogClient.getList({
    endpoint: "blog",
  });

  return {
    props: data,
  };
};

export default Home;
