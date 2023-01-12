import { createClient } from "microcms-js-sdk";

export const blogClient = createClient({
  serviceDomain: "mura-blog",
  apiKey: process.env.BLOG_CMS_API_KEY,
});
