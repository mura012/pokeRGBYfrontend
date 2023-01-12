import { createClient } from "microcms-js-sdk";

export const pokeClient = createClient({
  serviceDomain: "questionandanswer",
  apiKey: process.env.POKE_CMS_API_KEY,
});
