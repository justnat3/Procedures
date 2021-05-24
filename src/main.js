// main.js
import Service from "./Service.svelte";

const app = new Service({
  target: document.body,
  hydrate: true,
});

export default app;
