/** @jsx h */
/// <reference no-default-lib="true"/>
/// <reference lib="dom" />
/// <reference lib="dom.asynciterable" />
/// <reference lib="deno.ns" />

import { h, listenAndServe, renderSSR } from "./deps.ts";
import { App } from "./src/App.tsx";

const handler = async (req: Request): Promise<Response> => {
  const html = renderSSR(<App />);
  return new Response(html, {
    headers: {
      "content-type": "text/html",
    },
  });
};

console.log("Listening on http://localhost:8080");
await listenAndServe(":8080", handler);
