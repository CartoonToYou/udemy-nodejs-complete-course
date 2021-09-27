// import { listenAndServe } from "https://deno.land/std@0.108.0/http/server.ts";

// const server = listenAndServe(':3000', () => new Response('Hello World\n'))

// console.log(server,"http://localhost:3000/")


import { serve } from "https://deno.land/std@0.108.0/http/server_legacy.ts";

const server = serve({ port: 8000 });
console.log("http://localhost:8000/");

for await (const req of server) {
  req.respond({ body: "Hello World\n" });
}