import { createApp } from "vue";
import "./style.css";
import App from "./App.vue";
import { Icon } from "@iconify/vue/dist/iconify.js";
import router from "./router/router";

const app = createApp(App);
app.use(Icon);
app.use(router);
app.mount("#app");
