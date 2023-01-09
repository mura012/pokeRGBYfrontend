declare namespace NodeJS {
  interface ProcessEnv {
    readonly CMS_API_KEY: string;
    readonly BACKEND_API_URL: string;
  }
}
