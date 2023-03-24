import { createClient } from "tinacms/dist/client";
import { queries } from "./types";
export const client = createClient({ url: 'https://content.tinajs.io/1.4/content/65fb8ef7-903b-4e1f-a760-7cafd3849db2/github/main', token: 'bbdb6d9e548307467c76d8f1f6c6f8222baf7eaa', queries });
export default client;
  