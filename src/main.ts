import { createApp } from "vue";
import App from "./App.vue";
import "./lib/circle.scss";
import "./index.scss";
import { router } from "./router";
import "./lib/svg.js";
import "github-markdown-css";

const app = createApp(App);
app.use(router);
app.mount("#app");
