import { createApp } from "vue";
import App from "./App.vue";
import "./index.css";
import { createWebHashHistory, createRouter } from "vue-router";
import Lily from "./components/Lily.vue";
import Lily2 from "./components/Lily2.vue";

const history = createWebHashHistory();
const router = createRouter({
  history,
  routes: [
    { path: "/", component: Lily },
    { path: "/xxx", component: Lily2 },
  ],
});

const app = createApp(App);
app.use(router);
app.mount("#app");
