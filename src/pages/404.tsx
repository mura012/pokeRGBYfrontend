import { Layout } from "layout";

const Custom404 = () => {
  return (
    <Layout>
      <div className="text-center">
        <h1 className="text-7xl">404</h1>
        <p>お探しのページが見つかりません。</p>
        <p>入力したurlが間違っているかもしれません。</p>
      </div>
    </Layout>
  );
};

export default Custom404;
