import { createClient } from "microcms-js-sdk";

export const client = createClient({
  serviceDomain: "questionandanswer",
  apiKey: process.env.CMS_API_KEY,
});
