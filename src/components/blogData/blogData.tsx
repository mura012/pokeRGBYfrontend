import Link from "next/link";
import { Blog } from "types/blog";

export const BlogData = ({ contents }: { contents: Blog[] }) => {
  return (
    <>
      {contents
        .filter((blog) => blog.badge[0] === "ポケモン")
        .map((blog) => {
          return (
            <div className="w-fit" key={blog.id}>
              <Link href={`https://www.mura-mostlove.com/blogPage/${blog.id}`}>
                <p className="mx-0 my-1 w-fit text-base text-blue-500 underline hover:text-red-500">
                  {blog.title}
                </p>
              </Link>
            </div>
          );
        })}
    </>
  );
};
