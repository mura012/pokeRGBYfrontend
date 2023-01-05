import { Layout } from "layout";
import { links } from "libs/links";
import Image from "next/image";
import Link from "next/link";

const Home = () => {
  return (
    <Layout title="ホーム">
      {links
        .filter((_, index) => index !== 0)
        .map((link) => {
          return (
            <Link
              href={link.href}
              className="m-2 flex justify-between rounded-md border border-solid border-black shadow-md"
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
    </Layout>
  );
};

export default Home;
