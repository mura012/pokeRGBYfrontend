declare namespace NodeJS {
  interface ProcessEnv {
    readonly POKE_CMS_API_KEY: string;
    readonly BLOG_CMS_API_KEY: string;
    readonly BACKEND_API_URL: string;
  }
}
